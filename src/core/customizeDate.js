
export const customizeDate = (timestamp) => {
  const date = new Date(timestamp)
  const time = date.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + date.toLocaleDateString()
}
