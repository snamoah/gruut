export const send = (json) => ({
  statusCode: 200,
  body: JSON.stringify({
    data: json,
  }),
})

export const sendError = (statusCode: number, errorMessage: string) => ({
  statusCode,
  body: JSON.stringify({
    error: errorMessage,
  }),
})
