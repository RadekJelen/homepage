console.log("Hello world!")

let buttonElement = document.querySelector(".js-button");
let buttonNameElement = document.querySelector(".js-buttonName");


buttonElement.addEventListener("click", () => {
    buttonElement.classList.toggle("button--left"); 

    buttonNameElement.innerText = buttonElement.classList.contains("button--left") ? "Oczywiście 😜" : "Guzik może uciekać?";
});