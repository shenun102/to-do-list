export default function newElement(tag, classes = [], content = "") {
  const element = document.createElement(tag);
  classes.forEach((className) => element.classList.add(className));
  element.textContent = content;
  return element;
}
