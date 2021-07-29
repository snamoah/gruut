import { validateBody } from '..'

const instagramUrl = 'https://www.instagram.com/p/CR2gbSipLr6/?utm_medium=share_sheet'

describe('Validate body', () => {
  test('should return body', async () => {
    const body = await validateBody(`{"url": "${instagramUrl}"}`)
    expect(body).toEqual({ url: instagramUrl })
  })

  describe('Errors', () => {
    test('no body is passed', async () => {
      await expect(validateBody()).rejects.toThrow('Request must have a body')
    })

    test('no url field present', async () => {
      await expect(validateBody(`{"otherField": "${instagramUrl}"}`)).rejects.toThrow(
        'Url is required',
      )
    })

    test('invalid url', async () => {
      await expect(validateBody(`{"url": "https://www.pinterest.com"}`)).rejects.toThrow(
        'Url must be an Instagram url',
      )
    })
  })
})
