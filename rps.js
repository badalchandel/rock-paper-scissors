        const choices = document.querySelectorAll(".choice");
        const msg = document.querySelector("#msg");
        const beepSound = document.querySelector("#beep-sound");

        const genCompChoice = () => {
            const options = ["rock", "paper", "scissors"];
            return options[Math.floor(Math.random() * 3)];
        };

        const createBubbles = (event) => {
            for (let i = 0; i < 5; i++) {
                const bubble = document.createElement("div");
                bubble.classList.add("bubble");
                const xOffset = (Math.random() - 0.5) * 40;
                const yOffset = (Math.random() - 0.5) * 40;
                bubble.style.left = `${event.clientX + xOffset}px`;
                bubble.style.top = `${event.clientY + yOffset}px`;
                bubble.style.borderColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                document.body.appendChild(bubble);
                setTimeout(() => bubble.remove(), 1500);
            }
        };

        const createConfetti = () => {
        const colors = ['#132641', '#ffd700', '#f5f5f5']; // Keeping old colors

        for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
        }
        };

        const playGame = (userChoice, event) => {
            beepSound.play();
            createBubbles(event);
            const compChoice = genCompChoice();
            
            if (userChoice === compChoice) {
                msg.innerText = "It's a draw!";
                msg.style.backgroundColor = "#1d3557";
            } else {
                let userWin = (userChoice === "rock" && compChoice === "scissors") ||
                              (userChoice === "paper" && compChoice === "rock") ||
                              (userChoice === "scissors" && compChoice === "paper");

                msg.innerText = userWin ? `You Win! ${userChoice} beats ${compChoice}` : `You Lose! ${compChoice} beats ${userChoice}`;
                msg.style.backgroundColor = userWin ? "green" : "red";
                msg.style.transform = "scale(1.1)";
                setTimeout(() => msg.style.transform = "scale(1)", 300);

                if (userWin) {
                    createConfetti();
                }
            }
        };

        choices.forEach(choice => {
            choice.addEventListener("click", (event) => {
                playGame(choice.id, event);
            });
        });