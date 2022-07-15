console.log("hello")

const letters = "ABC"

console.log(letters)

const prevButton = document.querySelector(".prev")
const nextButton = document.querySelector(".next")

prevButton.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("previous slide")
})

nextButton.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("next slide")
})