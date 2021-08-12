// rem等比适配配置文件
// 基准大小
const baseSize = 37.5
// 注意此值要与 postcss.config.js 文件中的 rootValue保持一致
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 375宽的缩放比例，可根据自己需要修改,一般设计稿都是宽750(图方便可以拿到设计图后改过来)。
  const w = document.documentElement.clientWidth
  const scale = w / 375
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  if (w > 750) {
    document.documentElement.style.fontSize = baseSize * Math.min(1.5, 2) + 'px'
  } else {
    document.documentElement.style.fontSize =
      baseSize * Math.min(scale, 2) + 'px'
  }
}

// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}

// 初始化
setRem()
