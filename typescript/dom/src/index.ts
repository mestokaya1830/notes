//expicit types

//dom
const tagh2 = document.querySelector('h2')!
console.log(tagh2) //this works
console.log(tagh2.style)//but this need !(mean not null) punction at the end of query

//or without ! punction use if
const tagp = document.querySelector('p')
console.log(tagp) //this works
if(tagp){
  console.log(tagp.style)
}

//or with as proprty
const title = document.getElementById('title') as HTMLHeadElement
console.log(title.style)

const par = document.getElementById('par') as HTMLParagraphElement
console.log(par.style)

//form
const form = document.getElementById('submit') as HTMLFormElement
const formName = document.getElementById('name') as HTMLFormElement
const formAge = document.getElementById('age') as HTMLFormElement

form.addEventListener('click', (e: Event) => {
  e.preventDefault
  console.log(formName.value)
  console.log(formAge.value)
})