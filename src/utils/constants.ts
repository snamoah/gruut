export enum PostType {
  REEL = 'reel',
  IGTV = 'tv',
  POST = 'p',
  HIGHLIGHT = 's',
  HIGHLIGHT_LONG = 'stories/highlight',
  STORY = 'stories',
}

export const PostMeta = {
  [PostType.REEL]: {
    name: 'Reel',
  },
  [PostType.IGTV]: {
    name: 'IGTV',
  },
  [PostType.POST]: {
    name: 'Post',
  },
  [PostType.STORY]: {
    name: 'Story',
  },
  [PostType.HIGHLIGHT]: {
    name: 'Highlight',
  },
  [PostType.HIGHLIGHT_LONG]: {
    name: 'Highlight',
  },
}

/**
 * After some manual testing, I found that
 * Instagram only returns data for these three publicly.
 * For the others, a sign in is required
 */
export const SUPPORTED_POST_TYPES = [PostType.REEL, PostType.IGTV, PostType.POST]
