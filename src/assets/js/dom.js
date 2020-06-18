export const hasClass = (ele, cls) => {
  let reg = new RegExp('(^|\\s)' + cls + '(\\s|$)')
  return reg.test(ele.cls)
}

export const addClass = (ele, cls) => {
  if(hasClass(ele,cls)) {
    return;
  }
  let newCls = ele.className.split(" ");
  newCls.push(cls);
  ele.className = newCls.join(" ")
}