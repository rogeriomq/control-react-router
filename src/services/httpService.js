import history from '~/services/historyService'

export const request = () => {
  // setTimeout(() => {
  console.log('Deu ruim: /login')
  history.push('/logout')
  // }, 3000)
}
