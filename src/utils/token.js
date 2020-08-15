export const getToken = () => {
  return window.localStorage.getItem('phm-generator-tkn')
}

export const setToken = token => {
  window.localStorage.setItem('phm-generator-tkn', token)
}

export const removeToken = () => {
  window.localStorage.removeItem('phm-generator-tkn')
}
