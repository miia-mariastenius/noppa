const div = document.querySelector('div')
const img = document.querySelector('img')

div.addEventListener("click", () => {

  const randomNumber = Math.floor(Math.random() * 6) + 1
  img.src = './img/' + randomNumber + '.png'
})