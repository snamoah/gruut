export const GA_TRACKING_CODE = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_CODE

export const trackPageView = (url: string) => {
  ;(window as any).gtag('config', GA_TRACKING_CODE, {
    page_path: url,
  })
}

interface Event {
  action: string
  params?: Record<string, any>
}
// log specific events happening.
export const trackEvent = ({ action, params }: Event) => {
  ;(window as any).gtag('event', action, params)
}
