const KEY_ACCESS_TOKEN = '@HF_WEB:token'
const KEY_REFRESH_TOKEN = '@HF_WEB:refresh_token'
const KEY_USER = '@HF_WEB:user'

export const getAccessToken = () => localStorage.getItem(KEY_ACCESS_TOKEN)

export const getRefreshToken = () => localStorage.getItem(KEY_REFRESH_TOKEN)

export const setToken = ({ token, refreshToken }) => {
  localStorage.setItem(KEY_ACCESS_TOKEN, `${token}`)
  localStorage.setItem(KEY_REFRESH_TOKEN, `${refreshToken}`)
}

export const clearStorage = () => {
  localStorage.removeItem(KEY_ACCESS_TOKEN)
  localStorage.removeItem(KEY_REFRESH_TOKEN)
  localStorage.removeItem(KEY_USER)
}

export const getUser = () => {
  const key = localStorage.getItem(KEY_USER)
  return JSON.parse(key)
}

export const setUser = user => {
  localStorage.setItem(KEY_USER, user)
}
