if (Math.random() >= 0) {
  import(/* 
    webpackChunkName: "wp",
    webpackExports: ["a", "default"]
    */ './dir3/x')
    .then(module => console.log(module))
}