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
