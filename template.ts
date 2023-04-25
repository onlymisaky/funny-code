// https://juejin.cn/post/6854573210638221320
function getRangeOffsetInContainer(containerNode: Node, rangeNode: Node, offset: number) {
  let index = offset;
  let currentNode = rangeNode;
  while (currentNode !== containerNode) {
    const siblings = Array.from(currentNode.parentNode?.childNodes);
    for (const node of siblings) {
      if (node !== currentNode) {
        const len = (node.innerText || node.data).length;
        index += len;
      } else {
        break;
      }
    }
    currentNode = currentNode.parentNode;
  }
  return index;
}
