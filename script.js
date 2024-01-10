document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".custom-btn");

    function toggleLoadingState() {
        button.classList.toggle("loading");
    }

    function handleButtonClick() {
        toggleLoadingState();
        setTimeout(toggleLoadingState, 3000);
    }

    if (button) {
        button.addEventListener("click", handleButtonClick);
    }
});
