export const logConfigerIgnore = (ignoreArr) => {
  window.console = new Proxy( window.console, {
    get( target, key) {
      return function(...args) {
        if (ignoreArr.includes(key)) {
          return
        }
        return Reflect.apply(target[key], target, args);
      }
    }
  })
}
