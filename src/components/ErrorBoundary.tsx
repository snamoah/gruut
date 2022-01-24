import React from 'react'
import * as Sentry from '@sentry/react'

interface Props {
  url: string
  data: any
  children: React.ReactNode
}

export const ErrorBoundary = ({ children, url, data }: Props) => {
  return (
    <Sentry.ErrorBoundary
      beforeCapture={(scope) => {
        scope.setContext('additional_data', {
          instagramUrl: url,
          apiResponse: data,
        })
      }}
    >
      {children}
    </Sentry.ErrorBoundary>
  )
}
