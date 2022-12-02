// function extractText(element: HTMLElement) {
//   return element.innerText;
// }
function extractText(element) {
    return {
        text: element.innerText,
        element: element
    };
}
var link = document.querySelector('a');
var heading = document.querySelector('h2');
if (link) {
    console.log(extractText(link));
}
if (heading) {
    console.log(extractText(heading));
}
