// https://developer.mozilla.org/zh-CN/docs/Web/API/Selection
// https://developer.mozilla.org/zh-CN/docs/Web/API/Range
// https://juejin.cn/post/6844904038991921166
// https://zhuanlan.zhihu.com/p/159702888
// https://blog.csdn.net/weixin_43809685/article/details/124858446
// https://juejin.cn/post/6854573210638221320
function getRangeOffsetInContainer(containerNode: Node, rangeNode: Node, offset: number) {
  let index = offset;
  let currentNode = rangeNode;
  while (currentNode !== containerNode) {
    const siblings = Array.from(currentNode.parentNode?.childNodes);
    for (const node of siblings) {
      if (node !== currentNode) {
        const text = (node.innerText || node.data).toLowerCase().replaceAll('&nbsp;', ''); 
        index += text.length;
      } else {
        break;
      }
    }
    currentNode = currentNode.parentNode;
  }
  return index;
}
