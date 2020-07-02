export const c = () => {
  console.log('I am C')
  var x = 10
  const y = 'Hi' 
  return "Return of C"
}

export const b = () => {
  console.log('I am B')
  const x = c()
}

export const a = () => {
  console.log('I am A')
  const x = c()
}