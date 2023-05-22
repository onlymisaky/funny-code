function equalObject(o1, o2) {
  let keys1 = [];
  for (const key in o1) {
    keys1.push(key);
  }
  let keys2 = [];
  for (const key in o1) {
    keys2.push(key);
  }

  if (keys1.length !== keys2.length) {
    return false;
  }

  if (keys1.every((key) => !keys2.includes(key))) {
    return false
  }

  // keys1 = keys1.sort();
  // keys2 = keys1.sort();
  // if (JSON.stringify(keys1) !== JSON.stringify(keys2)) {
  //   return false;
  // }

  let result = true;

  for (const key of keys1) {
    const value1 = o1[key];
    const value2 = o2[key];
    if (value1 !== value2) {
      result = equal(value1, value2);
      if (!result) {
        return false;
      }
    }
  }

  return result;

}

function equalArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let result = true;
  for (let index = 0; index < arr1.length; index++) {
    const value1 = arr1[index];
    const value2 = arr2[index];
    if (value1 !== value2) {
      result = equal(value1, value2);
      if (!result) {
        return result;
      }
    }
  }

  return result;

}

function equal(value1, value2) {
  if (value1 === value2) {
    return true;
  }

  let type = Object.prototype.toString.call(value1);
  if (type !== Object.prototype.toString.call(value2)) {
    return false;
  }

  type = type.slice(8, -1).toLowerCase();
  if (!['array', 'object'].includes(type)) {
    return false;
  }

  if (type === 'object') {
    return equalObject(value1, value2);
  }

  if (type === 'array') {
    return equalArray(value1, value2);
  }

}
