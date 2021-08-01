import Axios from 'axios'

const axios = Axios.create()

axios.defaults.headers['User-Agent'] =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36'
axios.defaults.headers['Accept-Language'] = 'en-US,en;q=0.9'
axios.defaults.headers['Accept-Encoding'] = 'gzip, deflate, br'
axios.defaults.headers['Accept'] =
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
axios.defaults.withCredentials = true

const fetch = async (url: string) => {
  const response = await axios.get(url)
  return response.data
}

export default fetch
