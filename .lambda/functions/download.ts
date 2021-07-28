const send = (json) => ({
  statusCode: 200,
  body: JSON.stringify(json),
})

export const handler = () => {
  return send({
    success: true,
  })
}
