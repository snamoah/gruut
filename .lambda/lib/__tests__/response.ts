import { send, sendError } from '../response'

describe('Response', () => {
  describe('send()', () => {
    const mockJson = {
      success: true,
    }

    test('return status code 200', () => {
      const response = send(mockJson)
      expect(response.statusCode).toBe(200)
    })

    test("return json in body's data property", () => {
      const { body } = send(mockJson)

      expect(JSON.parse(body).data).toEqual(mockJson)
    })
  })

  describe('sendError()', () => {
    const errorMessage = 'Error mesage'

    test('return status code passed as argument', () => {
      const response = sendError(400, errorMessage)
      expect(response.statusCode).toEqual(400)
    })

    test("return errorMessage in body's error property", () => {
      const { body } = sendError(402, errorMessage)
      expect(JSON.parse(body).error).toEqual(errorMessage)
    })
  })
})
