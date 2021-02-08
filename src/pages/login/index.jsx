import React, { useEffect } from 'react'
import { useHistory, Redirect } from 'react-router-dom'

import { useUser } from '~/hooks'

function login() {
  const { user, setUser } = useUser()
  const history = useHistory()

  const loginHandler = event => {
    event.preventDefault()
    const fakeUser = {
      name: 'Rogério Queiroz',
      email: 'rogerio.mq@gmail.com',
      token: '123456789',
    }
    setUser({ ...fakeUser })
  }

  // useEffect(() => {
  //   console.log('userLogin', { user })
  //   // let timer = null
  //   if (user) {
  //     // setTimeout(() => {
  //     history.push('/')
  //     // }, 3000)
  //   }

  //   // return clearTimeout(timer)
  // }, [history, user])

  return user ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1>Login view</h1>
      <button
        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        type="button"
        onClick={loginHandler}
      >
        Login
      </button>

      <div className="mt-2">
        {user ? (
          <div className="flex flex-col p-3 rounded-md bg-black text-red-400 text-lg">
            <span>Name: {user?.name}</span>
            <span>Email: {user?.email}</span>
            <span>Token: {user?.token}</span>
          </div>
        ) : (
          <div>Not user logged</div>
        )}
      </div>
    </div>
  )
}

export default login
