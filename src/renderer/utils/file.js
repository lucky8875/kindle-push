import data from '../data/data'
const path = require('path')

export function isValidateFormat (filename) {
  return data.data.includes(path.extname(filename))
}
