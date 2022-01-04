export const sortDate = (data) => {
  let result = data.sort((a, b) => {
    let da = a.date.toLowerCase()
    let db = b.date.toLowerCase()

    if (da < db) {
      return -1
    }
    if (da > db) {
      return 1
    }
    return 0
  })
  return result
}
