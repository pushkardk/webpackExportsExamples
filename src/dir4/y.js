(function() {
  console.log('I am a side effect')
})()

export const a = () => {
  console.log('I am A')
}

export const b = () => {
  console.log('I am B')
}

export const c = () => {
  console.log('I am C')
}

export default () => {
  console.log('I am default')
}