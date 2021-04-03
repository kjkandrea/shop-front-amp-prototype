// A jsx pragma method to create html dom elements (more info below)
export default function createElement(tagName, attrs = {}, ...children) {
  const element = Object.assign(document.createElement(tagName), attrs)
  for (const child of children) {
    if (Array.isArray(child)) element.append(...child)
    else element.append(child)
  }
  return element
}