export const formatDate = (date) => {
  let formattedDate = new Date(date)
    // use sweden format as it is close to current timezone time
    .toLocaleString('sv')
    .replace(' ', 'T')
    .substring(0, 10)
  return formattedDate
}
