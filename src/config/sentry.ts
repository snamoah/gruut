import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

export const initSentry = () =>
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 0.3,
  })
