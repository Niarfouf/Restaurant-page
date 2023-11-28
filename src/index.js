import home from "./home"
import menu from "./menu"
import contact from "./contact"
import "./styles.css"

const homeButton = document.querySelector("#home")
const menuButton = document.querySelector("#menu")
const contactButton = document.querySelector("#contact")
homeButton.addEventListener("click", () => {
    home()
})
menuButton.addEventListener("click", () => {
    menu()
})
contactButton.addEventListener("click", () => {
    contact()
})

