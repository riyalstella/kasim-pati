
const petalsContainer = document.getElementById("petals");

function createPetals() {
    petalsContainer.innerHTML = "";

    // 3 sıra yaprak oluştur
    for (let layer = 0; layer < 3; layer++) {

        const count = 16 + layer * 8;

        for (let i = 0; i < count; i++) {

            const petal = document.createElement("div");
            petal.classList.add("petal");

            const angle = (360 / count) * i + layer * 12;

            const length = 95 - layer * 15;

            petal.style.height = length + "px";
            petal.style.width = (25 + layer * 2) + "px";

            petal.style.transform =
                `rotate(${angle}deg)`;

            petal.style.animationDelay =
                (i * 0.025 + layer * 0.3) + "s";

            petal.style.background =
                layer === 0
                ? "linear-gradient(to top, #d83279, #ff8fbd)"
                : layer === 1
                ? "linear-gradient(to top, #ed5898, #ffc0d9)"
                : "linear-gradient(to top, #ff85b7, #ffe0ed)";

            petalsContainer.appendChild(petal);
        }
    }
}

function bloomFlower() {
    petalsContainer.style.transform = "scale(1)";
    document.querySelector(".center").style.transform = "scale(1)";

    document.querySelectorAll(".leaf").forEach(leaf => {
        leaf.style.transform = "scale(1)";
    });
}

createPetals();

setTimeout(() => {
    document.getElementById("note").classList.add("show");
}, 1800);

