// https://developer.mozilla.org/zh-CN/docs/Web/API/Selection
// https://developer.mozilla.org/zh-CN/docs/Web/API/Range
// https://juejin.cn/post/6844904038991921166
// https://zhuanlan.zhihu.com/p/159702888
// https://juejin.cn/post/7010580352523567134
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


export function closest(dom: Node, selectors: keyof HTMLElementTagNameMap): Node {
  const nodes = document.querySelectorAll(selectors);

  function find(node: Node) {
    const parent = node.parentNode;
    if (parent) {
      for (const iterator of nodes) {
        if (iterator === parent) {
          return parent;
        }
      }
      return find(parent);
    }
    return null;
  }

  return find(dom);
}


/**
 * @param {Node} containerNode
 * @param {Node} startNode
 * @param {Node} endNode
 * @param {string} color
 */
export function connectNode(containerNode, startNode, endNode, color) {
  const {
    offsetLeft: startX,
    offsetTop: startY,
    offsetWidth: startW,
    offsetHeight: startH,
  } = startNode;

  const {
    offsetLeft: endX,
    offsetTop: endY,
    offsetWidth: endW,
    offsetHeight: endH,
  } = endNode;

  const lineW = 2;

  let startLineX = startX + startW / 2;
  let startLineY = 0;
  const startLineH = 20;

  let endLineX = endX + endW / 2;
  let endLineY = 0;
  let endLineH = 0;


  let connectLineX = Math.min(startLineX, endLineX);
  let connectLineY = 0;
  let connectLineW = Math.abs(startLineX - endLineX);

  if (startY === endY) {
    startLineY = startY - startLineH;
    endLineY = startLineY;
    endLineH = startLineH;
    connectLineY = startLineY;
  }

  if (startY > endY) {
    startLineY = startY - startLineH;
    endLineY = endY + endH;
    endLineH = startLineY - endLineY;
    connectLineY = startLineY;
  }

  if (startY < endY) {
    startLineY = startY + startH;
    endLineY = startLineY + startLineH;
    endLineH = endY - endLineY;
    connectLineY = endLineY;
  }

  [
    {
      left: `${startLineX}px`,
      top: `${startLineY}px`,
      width: `${lineW}px`,
      height: `${startLineH}px`,
    },
    {
      left: `${endLineX}px`,
      top: `${endLineY}px`,
      width: `${lineW}px`,
      height: `${endLineH}px`,
    },
    {
      left: `${connectLineX}px`,
      top: `${connectLineY}px`,
      width: `${connectLineW}px`,
      height: `${lineW}px`,
    },
  ].forEach((styles) => {
    const div = document.createElement('div');
    div.className = 'connect-line'
    div.style.position = 'absolute';
    div.style.backgroundColor = color;
    Object.keys(styles).forEach(
      (key) => (div.style[key] = styles[key]),
    );
    containerNode.appendChild(div);
  });
}
