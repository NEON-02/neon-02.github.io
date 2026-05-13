startBtn.addEventListener("click", () => {

    firstPage.style.opacity = "0";

    setTimeout(() => {
        firstPage.classList.add("hidden");

        secondPage.classList.remove("hidden");
        secondPage.classList.add("fade");

    }, 500);
});

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

    const maxX = 500;
    const maxY = 120;

    const x = Math.random() * maxX - 200;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
