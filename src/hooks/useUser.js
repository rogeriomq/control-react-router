import { useEffect, useCallback } from 'react'

import { useRecoilState } from 'recoil'

import {
  getUser,
  setUser as setLocalStoreUser,
  clearStorage,
} from '~/services/localStoreServices'
import { userAtom } from '~/store'

export default () => {
  const [user, setRecoilUser] = useRecoilState(userAtom)

  const setUser = useCallback(
    user => {
      setRecoilUser({ ...user })
      setLocalStoreUser(JSON.stringify(user))
    },
    [setRecoilUser]
  )

  const clearUser = () => {
    clearStorage()
    setRecoilUser(null)
  }

  useEffect(() => {
    const userStorage = getUser()
    console.log('USERStorage:', userStorage)
    if (userStorage) {
      setUser(userStorage)
    }
  }, [setUser])

  return { user, setUser, clearUser }
}
