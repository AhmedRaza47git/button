document.addEventListener("DOMContentLoaded", function () {
    const readToggle = document.querySelector(".read-toggle");
    const moreContent = document.querySelector(".more-content");

    readToggle.addEventListener("click", function () {
        moreContent.classList.toggle("show");
        if (moreContent.classList.contains("show")) {
            readToggle.textContent = "Read Less";
        } else {
            readToggle.textContent = "Read More";
        }
    });
});