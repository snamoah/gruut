const chromium = require('chrome-aws-lambda')

// import Axios from 'axios'
// import tough from 'tough-cookie'
// import axiosCookieJarSupport from 'axios-cookiejar-support'

// const axios = Axios.create()

// axiosCookieJarSupport(axios)

// axios.defaults.headers['user-agent'] = axios.defaults.headers['accept-language'] =
//   'en-US,en;q=0.9'
// axios.defaults.headers['scheme'] = 'https'
// axios.defaults.headers['authority'] = 'instagram'
// axios.defaults.headers['sec-ch-ua-mobile'] = '?0'
// axios.defaults.headers['sec-fetch-dest'] = 'document'
// axios.defaults.headers['sec-fetch-mode'] = 'navigate'
// axios.defaults.headers['sec-fetch-site'] = 'none'
// axios.defaults.headers['sec-fetch-user'] = '?1'
// axios.defaults.headers['upgrade-insecure-requests'] = '1'
// axios.defaults.headers[
//   'sec-ch-ua'
// ] = `"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"`
// ;('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36')
// axios.defaults.headers['accept-encoding'] = 'gzip, deflate, br'
// axios.defaults.headers['accept'] =
//   'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
// axios.defaults.withCredentials = true
// axios.defaults.jar = new tough.CookieJar()

const fetch = async (url: string) => {
  // const response = await axios.get(url)
  // return response.data
  console.log(chromium)
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  })

  let page = await browser.newPage()

  await page.goto(url)
  const html = await page.content()
  return html
}

export default fetch
