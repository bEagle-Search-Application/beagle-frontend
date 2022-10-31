import Cookies from 'js-cookie'
import { WithRouterProps } from 'next/dist/client/with-router'
import React from 'react'
import { Test } from './Test'

const checkUserAuthentication = () => {
  return {
    auth:
      Cookies.get('access_token') &&
      Cookies.get('refresh_token') &&
      window.localStorage.getItem('user-data'),
  }
}

export const wrapperPrivateRoute = <P extends WithRouterProps>(
  Component: React.ComponentType<P>
) =>
  class WrapperPrivateRoute extends React.Component<P> {
    render() {
      const { ...props } = this.props
      const { auth } = checkUserAuthentication()
      return auth ? <Component {...(props as P)} /> : <Test />
    }
  }
