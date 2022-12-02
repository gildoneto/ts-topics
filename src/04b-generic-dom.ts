// function extractText(element: HTMLElement) {
//   return element.innerText;
// }

function extractText<T extends HTMLElement>(element: T) {
  return {
    text: element.innerText,
    element
  }
}

const link = document.querySelector('a');
const heading = document.querySelector('h2')

if(link) {
  console.log(extractText(link));
}

if(heading) {
  console.log(extractText(heading));
}