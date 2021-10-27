import './style.css'
import printMe from './print.js'

console.log('当前环境：', process.env.NODE_ENV)

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button')

  element.innerHTML = '<p class="title">Hello Webpack</p>'
  btn.innerHTML = '点击事件'
  btn.onclick = printMe
  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
