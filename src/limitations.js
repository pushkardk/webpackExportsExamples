setTimeout(() => {
  import(/* 
    webpackChunkName: "limitation1",
    webpackExports: ["a"]
    */ './dir4/y')
    .then(module => console.log('module with  a', module))
}, 1200)
  
setTimeout(() => {
  import(/* 
    webpackChunkName: "limitation2",
    webpackExports: ["b"]
    */ './dir4/y')
    .then(module => console.log('module with  b', module))
}, 500)