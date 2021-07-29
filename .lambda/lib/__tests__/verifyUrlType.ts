import { PostType } from '../constants'
import { verifyUrlType } from '../verifyUrlType'

describe('verifyUrlType()', () => {
  test('pass for story', () => {
    const url = 'https://www.instagram.com/stories/schoengeister/2628491671796763079/'
    expect(verifyUrlType(url)).toEqual(PostType.STORY)
  })

  test('pass for reel', () => {
    const url = 'https://www.instagram.com/reel/CR2jz2MKtJn/'
    expect(verifyUrlType(url)).toEqual(PostType.REEL)
  })

  test('pass for profile hightlight', () => {
    const url =
      'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTE2MDc2ODg2MTg3MTgy?story_media_id=2374304642196025777&utm_medium=copy_link'
    expect(verifyUrlType(url)).toEqual(PostType.HIGHLIGHT)
  })

  test('pass for profile hightlight alias', () => {
    const url = 'https://www.instagram.com/stories/highlights/18116076886187182/'
    expect(verifyUrlType(url)).toEqual(PostType.HIGHLIGHT_LONG)
  })

  test('pass for regular post', () => {
    const url = 'https://www.instagram.com/p/CR4LHlap5T7/'
    expect(verifyUrlType(url)).toEqual(PostType.POST)
  })

  test('pass for IGTV', () => {
    const url = 'https://www.instagram.com/tv/CR4I0I_o9gR/'
    expect(verifyUrlType(url)).toEqual(PostType.IGTV)
  })

  test('throw if link is not supported', () => {
    const url = 'https://www.instagram.com/senor_dillinger/'
    expect(() => verifyUrlType(url)).toThrow('Invalid Instagram activity link')
  })
})
