import Tabletop from 'tabletop'

export const getData = (url, cb) => {
  Tabletop.init({
    key: url,
    callback: cb,
  })
}
