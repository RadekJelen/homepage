{
    const welcome = () => {
        console.log("Hello world!");
    };

    const toggleButton = (buttonElement) => {
        const buttonNameElement = document.querySelector(".js-buttonName");

        buttonElement.classList.toggle("button--left");
        buttonNameElement.innerText = buttonElement.classList.contains("button--left") ? "Oczywiście 😜" : "Guzik może uciekać?";
    };

    const init = () => {
        const buttonElement = document.querySelector(".js-button");

        buttonElement.addEventListener("click", () => {
            toggleButton(buttonElement);
        });

        welcome();
    };

    init();
}