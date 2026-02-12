document.addEventListener("DOMContentLoaded", () => {

    // Elements
    const envelope = document.getElementById("envelope-container");
    const letter = document.getElementById("letter-container");
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");

    const title = document.getElementById("letter-title");
    const catImg = document.getElementById("letter-cat");
    const buttons = document.getElementById("letter-buttons");
    const finalText = document.getElementById("final-text");
    const yipeeSound = document.getElementById("yipee-sound");

    // Ensure sound never plays on load
    yipeeSound.pause();
    yipeeSound.currentTime = 0;

    // Click Envelope
    envelope.addEventListener("click", () => {
        envelope.style.display = "none";
        letter.style.display = "flex";

        setTimeout(() => {
            document.querySelector(".letter-window").classList.add("open");
        }, 50);
    });

    // NO button moves
    noBtn.addEventListener("mouseover", () => {
        const distance = 200;
        const angle = Math.random() * Math.PI * 2;

        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        noBtn.style.transition = "transform 0.3s ease";
        noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    yesBtn.addEventListener("click", () => {
        // Change title
        title.textContent = "Yippeeee! 🎉";
        title.classList.add("no-border"); // optional border removal

        // Change GIF
        catImg.src = "catyes.gif";
    
        // Hide buttons
        buttons.style.display = "none";
    
        // Show final text (only if it exists)
        if (finalText) {
            finalText.style.display = "block";
        }
    
        // Play sound
        yipeeSound.currentTime = 0;
        yipeeSound.play().catch(error => {
            console.log("Audio play failed:", error);
        });
    
    });

        // Play sound ONLY here
        yipeeSound.currentTime = 0;
        yipeeSound.play().catch(error => {
            console.log("Audio play failed:", error);
        });
    });
