export const formatDate = (date) => {
  // let formattedDate = date
  // // use sweden format as it is close to current timezone time
  // .toLocaleString('sv')
  // .replace(' ', 'T')
  // .substring(0, 10)

  const z = date.getTimezoneOffset() * 60 * 1000
  const tLocal = new Date(date - z)
  const iso = tLocal.toISOString()
  const isoFormatted = iso.substring(0, 10)
  return isoFormatted
  // return formattedDate
}
