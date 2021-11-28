console.clear();

document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".square");
    const winnerElement = document.querySelector(".winner");
    const restartButton = document.querySelector("#restartButton");

    squares.forEach((square) => {
        square.addEventListener("click", (e) => {
            updateSquare.bind(square)();

            let position = e.target.id;
            handlePlayerAction(position);

            if (gameOver) {
                winnerElement.textContent = `${playerSymbolEmoji[winnerPlayer]} venceu! 🎉`;
                winnerElement.style.display = "block";

                restartButton.textContent = "Jogar Novamente";
            }
        });
    });

    function updateSquare() {
        if (this.classList.length === 1 && !gameOver) {
            let playerClass = playerTurn === 0 ? "player1" : "player2";
            this.classList.add(playerClass);
        }
    }

    restartButton.addEventListener("click", () => {
        console.clear();
        restartGame();
    });

    function restartGame() {
        clearBoard();
        resetPlayerTurn();
        resetGameOverState();
        squares.forEach((square) => {
            if (square.classList.length > 1) {
                let currentClass = square.classList[1];
                square.classList.remove(currentClass);
            }
        });
        winnerElement.style.display = "none";
        restartButton.textContent = "Recomeçar";
    }
});
