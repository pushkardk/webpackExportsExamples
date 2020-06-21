const someValue = (() => {
  return 'Other functionality in b'
})()

export const bOne = () => {
  console.log('I am bOne')
  console.log('Side effects', someValue)
}