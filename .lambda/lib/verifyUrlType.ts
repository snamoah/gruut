import { PostType } from './constants'

export const verifyUrlType = (url: string) => {
  const { pathname } = new URL(url)
  const parts = pathname.split('/')

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
