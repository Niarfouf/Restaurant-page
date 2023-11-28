function component() {
    const content = document.querySelector("#content")
    content.innerText = ""
    const element = document.createElement('div');
    const title = document.createElement('h1');
    const text = document.createElement('p');
    title.innerText = "Welcome to my restaurant contact"
    text.innerText = "lorem ipsum test"
    element.appendChild(title)
    element.appendChild(text)
    content.appendChild(element)
}

export default component