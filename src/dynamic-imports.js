// Loading on demand:
if (Math.random() > 0.5) {
  import('./dir2/a')
    .then(module => console.log(module))
}

// Loading on demand with a magic comment:
if (Math.random() > 0.5) {
  import(/* webpackChunkName: "module-b" */ './dir2/b')
    .then(module => console.log(module))
}