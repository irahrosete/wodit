export const formatDate = (date) => {
  let formattedDate = new Date(date)
    .toLocaleString('sv')
    .replace(' ', 'T')
    .substring(0, 10)
  return formattedDate
}
