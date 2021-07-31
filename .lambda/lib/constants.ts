export enum PostType {
  REEL = 'reel',
  IGTV = 'tv',
  POST = 'p',
  HIGHLIGHT = 's',
  HIGHLIGHT_LONG = 'stories/highlight',
  STORY = 'stories',
}

export const Extractor = {
  [PostType.REEL]: {
    node: 'PostPage',
    fields: ['graphql'],
  },
  [PostType.IGTV]: {
    node: 'PostPage',
    fields: ['graphql'],
  },
  [PostType.POST]: {
    node: 'PostPage',
    fields: ['graphql'],
  },
  [PostType.HIGHLIGHT]: {
    node: 'StoriesPage',
    fields: ['user', 'highlight'],
  },
  [PostType.HIGHLIGHT_LONG]: {
    node: 'StoriesPage',
    fields: ['user', 'highlight'],
  },
  [PostType.STORY]: {
    node: 'StoriesPage',
    fields: ['user'],
  },
  profile: {
    node: 'ProfilePage',
    fields: ['graphql'],
  },
}

/**
 * After some manual testing, I found that
 * Instagram only returns data for these three publicly.
 * For the others, a sign in is required
 */
export const SUPPORTED_POST_TYPES = [PostType.REEL, PostType.IGTV, PostType.POST]

export type ExtractorKeys = keyof typeof Extractor
