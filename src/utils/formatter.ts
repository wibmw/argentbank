// Format with thousands separator on number >= 1000
export const thousandsSeparator = (num: number) => {
  const numParts = num.toFixed(2).toString().split('.')
  numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return numParts.join('.')
}

// Return an expires date in milliseconds
export const expiresDate = (time: number) => {
  return new Date(new Date().getTime() + time * 60 * 60 * 1000)
}
