// Select HTML elements using DOM
const surpriseButton = document.getElementById("surprise-btn");
const birthdayLetter = document.getElementById("birthday-letter");

const heartButton = document.getElementById("heart-btn");
const finalMessage = document.getElementById("final-message");

const floatingHearts = document.getElementById("floating-hearts");

// First button: open the birthday letter
surpriseButton.addEventListener("click", function () {
birthdayLetter.classList.remove("hidden");

birthdayLetter.scrollIntoView({
    behavior: "smooth",
    block: "center"
});

createHearts(15);

});

// Second button: show another surprise
heartButton.addEventListener("click", function () {
finalMessage.textContent = "Sending you lots of love! 💗✨🎂";

createHearts(25);

});

// Function to create floating hearts
function createHearts(amount) {
for (let i = 0; i < amount; i++) {
const heart = document.createElement("span");

    heart.classList.add("float-heart");

    const symbols = ["♡", "♥", "💕", "✦", "✨"];

    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (16 + Math.random() * 18) + "px";

    heart.style.color = [
        "#c34f78",
        "#e58aaf",
        "#b99ad8"
    ][Math.floor(Math.random() * 3)];

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    floatingHearts.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 8500);
}

}

// Small floating-heart animation in the background
setInterval(function () {
createHearts(2);
}, 2000);