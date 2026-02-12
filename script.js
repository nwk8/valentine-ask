let audioUnlocked = false;

document.addEventListener("DOMContentLoaded", () => {

    const envelope = document.getElementById("envelope-container");
    const letter = document.getElementById("letter-container");
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");

    const title = document.getElementById("letter-title");
    const catImg = document.getElementById("letter-cat");
    const buttons = document.getElementById("letter-buttons");
    const finalText = document.getElementById("final-text");
    const yipeeSound = document.getElementById("yipee-sound");

    // Safety: force audio silent on load
    yipeeSound.pause();
    yipeeSound.currentTime = 0;

    envelope.addEventListener("click", () => {
        envelope.style.display = "none";
        letter.style.display = "flex";

        setTimeout(() => {
            document.querySelector(".letter-window").classList.add("open");
        }, 50);
    });

    noBtn.addEventListener("mouseover", () => {
        const distance = 200;
        const angle = Math.random() * Math.PI * 2;

        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        noBtn.style.transition = "transform 0.3s ease";
        noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    yesBtn.addEventListener("click", () => {
        title.textContent = "Yippeeee! 🎉";
        catImg.src = "catyes.gif";
        buttons.style.display = "none";

        if (finalText) {
            finalText.style.display = "block";
        }

        yipeeSound.currentTime = 0;
        yipeeSound.play();
    });

});