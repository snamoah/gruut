import { PostType } from './constants'

export const verifyUrlType = (url: string) => {
  let path: string

  /*1. Check that value passed is actually a url */
  try {
    const { pathname } = new URL(url)
    path = pathname
  } catch (_) {
    throw new Error('Not a valid url')
  }

  const isInstagramLink = /^https:\/\/(www.)?instagram.com/.test(url)

  if (!isInstagramLink) {
    throw new Error('Not an Instagram link')
  }

  const parts = path.split('/')
  let urlType = parts[1]

  /**
   * Check if url is highlight alias
   */
  if (parts[1] === 'stories' && parts[2] === 'highlights') {
    urlType = 'stories/highlight'
  }

  if (!Object.values(PostType).includes(urlType as any)) {
    throw new Error('Invalid Instagram activity link')
  }

  return urlType as PostType
}

export const cleanUrl = (url: string) => {
  const { pathname } = new URL(url)
  return `instagram.com${pathname}`
}

export const cdn = (url: string) =>
  `https://fetch-instagram-media.gruut.workers.dev/${url}`
