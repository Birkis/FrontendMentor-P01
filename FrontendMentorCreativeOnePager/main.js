const galleryText = ["guidelines", "web design","merchandise"]


//legger til en comment

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