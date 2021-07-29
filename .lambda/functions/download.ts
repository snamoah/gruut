import fetch from 'node-fetch'
import { pick } from 'lodash'
import * as cheerio from 'cheerio'
import { send, sendError, validateBody } from '../utils'

const PROFILE_FIELDS = ['is_private', 'profile_pic_url', 'username']

const getSharedData = (html: string): Record<string, any> | null => {
  const $ = cheerio.load(html)

  const body = $('body')
  const bodyScripts = body.find('script')

  const scriptWithSharedData = bodyScripts.toArray().find((script) => {
    const innerContent = (script as any).children[0]
    return innerContent && innerContent.data.startsWith('window._sharedData =')
  })

  const sharedDataScriptContent: string | undefined = (scriptWithSharedData as any)
    ?.children[0].data

  const hasTrailingSemiColon = sharedDataScriptContent?.endsWith(';')

  const contentLength = sharedDataScriptContent.length
  const startIndex = sharedDataScriptContent.indexOf('{')
  const endIndex = hasTrailingSemiColon ? contentLength - 1 : contentLength

  const jsonString = sharedDataScriptContent.slice(startIndex, endIndex)

  try {
    return JSON.parse(jsonString)
  } catch (_) {
    return null
  }
}

export const handler = async ({ body: bodyString }) => {
  let response = {}

  try {
    const { url } = await validateBody(bodyString)
    const fetchResult = await fetch(url)
    const html = await fetchResult.text()
    const sharedData = getSharedData(html)

    if (!sharedData) {
      throw new Error('Could not get data from Instagram')
    }

    const { entry_data } = sharedData
    const isPrivate = isPrivateAccount(sharedData)

    if (isPrivate) {
      const { user } = grabGraphqlData('ProfilePage', entry_data)
      response = pick(user, PROFILE_FIELDS)
    } else {
      const { shortcode_media } = grabGraphqlData('PostPage', entry_data)
      response = processPost(shortcode_media)
    }
  } catch (error) {
    return sendError(400, error.message)
  }

  return send(response)
}

const isPrivateAccount = (sharedData: Record<string, any>) =>
  Object.keys(sharedData.entry_data).includes('ProfilePage')

const grabGraphqlData = (key: string, data: Record<string, any>) => {
  return data[key] && data[key][0]?.graphql
}

enum ShortCodeMedia {
  IMAGE = 'GraphImage',
  SIDE_CAR = 'GraphSidecar',
  VIDEO = 'GraphVideo',
}

const POST_FIELDS = ['is_video', 'video_url', 'display_url', 'thumbnail_src']

const processPost = (shortCodeMedia: Record<string, any>) => {
  let posts = []
  let user = pick(shortCodeMedia.owner, PROFILE_FIELDS)

  if (shortCodeMedia.__typename !== ShortCodeMedia.SIDE_CAR) {
    posts.push(pick(shortCodeMedia, POST_FIELDS))
  } else {
    const {
      edge_sidecar_to_children: { edges },
    } = shortCodeMedia
    posts = edges.map((edge) => pick(edge.node, POST_FIELDS))
  }

  return { ...user, posts }
}
