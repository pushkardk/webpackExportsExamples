import(
  /* 
    webpackChunkName: "interdependentExportsChunk",
    webpackExports: ["a", "b"]
  */ './dir6/z'
).then(module => {
  console.log(module)
})


