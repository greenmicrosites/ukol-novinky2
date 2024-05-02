const bodyElement = document.querySelector("body")

bodyElement.style.backgroundColor = "#e9e9e9"

const newsElement = document.querySelector(".news")

newsElement.style.backgroundColor = "white"
newsElement.style.maxWidth = "60rem"

const headlineElement = document.querySelector("H1")

headlineElement.classList.add("news__title")

headlineElement.textContent = "Aktuální novinky"

const firstMessEl = document.querySelector("#zprava1")

firstMessEl.classList.add("post--main")

const lastImgEl = document.querySelector("#zprava3 img.post__picture")
lastImgEl.src = "images/zprava3-novy.jpg"
