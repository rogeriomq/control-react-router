import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Home from '~/pages/home'
import Login from '~/pages/login'
import Logout from '~/pages/logout'
import Customer from '~/pages/customer'

import { useUser } from '~/hooks'
import RouteGuard from '~/RouteGuard'

function App() {
  const { user } = useUser()

  return (
    <>
      <div className="bg-indigo-200 mb-3">
        <div>
          User: {user?.name}({user?.email})
        </div>
        <nav className="flex">
          <ul className="flex justify-start w-full">
            <li className="px-3 py-2 text-white font-black text-lg">
              <Link to="/login">Login</Link>
            </li>
            <li className="px-3 py-2 text-white font-black text-lg">
              <Link to="/customer">Customer</Link>
            </li>
            <li className="px-3 py-2 text-white font-black text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="px-3 py-2 text-white font-black text-lg">
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/login" component={Login}></Route>
        <RouteGuard
          requireAuth
          path="/customer"
          component={Customer}
        ></RouteGuard>
        <Route path="/logout" component={Logout}></Route>
        <RouteGuard requireAuth exact path="/" component={Home}></RouteGuard>
      </Switch>
    </>
  )
}

export default App
