import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useUser } from '~/hooks'

function Logout() {
  const history = useHistory()
  const { clearUser } = useUser()

  // Mount Logout
  useEffect(() => {
    console.log('#### Logout...')
    clearUser()
    history.replace('/login')
  }, [])

  return <div>logout</div>
}

export default Logout
