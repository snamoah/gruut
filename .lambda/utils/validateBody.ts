import * as yup from 'yup'

interface RequestBody {
  url: string
}

const schema = yup.object().shape({
  url: yup
    .string()
    .trim()
    .required('Url is required')
    .matches(/^https:\/\/(www.)?instagram.com/, 'Url must be an Instagram url'),
})

export const validateBody = async (body?: string): Promise<RequestBody> => {
  let jsonBody: RequestBody

  try {
    if (body === null) {
      throw new Error()
    }

    jsonBody = JSON.parse(body)
  } catch (_) {
    throw new Error('Request must have a body')
  }

  try {
    await schema.validate(jsonBody)
  } catch (error) {
    throw new Error(error.errors[0])
  }

  return jsonBody
}
