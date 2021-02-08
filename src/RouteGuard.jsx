import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useUser } from '~/hooks'

function RouteGuard({ component: Component, requireAuth, ...rest }) {
  const { user } = useUser()

  useEffect(() => console.log('USER GUARD---: ', { user }), [user])
  return (
    <>
      <div>{user?.name}</div>
      <Route
        render={() => {
          return requireAuth && user ? (
            <>
              <Component {...rest} />
            </>
          ) : (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          )
        }}
        {...rest}
      ></Route>
    </>
  )
}

export default RouteGuard
