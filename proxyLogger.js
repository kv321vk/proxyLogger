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

// 用法
// logConfigerIgnore 方法接受一个array 其中是你不想打印出的logger level 的 key方法

// demo
import { logConfigerIgnore } from './plugins/logConfiger'
logConfigerIgnore(['error','warn'])

