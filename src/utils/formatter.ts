export const thousandsSeparator = (num: number) => {
  const numParts = num.toFixed(2).toString().split('.')
  numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return numParts.join('.')
}
