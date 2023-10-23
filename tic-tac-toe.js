document.addEventListener("DOMContentLoaded", function() {
    // Get all the squares in the 3x3 grid
    const squares = document.querySelectorAll(".square");

    // Initialize variables
    let currentPlayer = "X"; // X starts the game
    let gameState = ["", "", "", "", "", "", "", "", ""]; // Empty game state

    // Add a click event listener to each square
    squares.forEach(function(square, index) {
        // Add the "square" class to each square
        square.classList.add("square");

        square.addEventListener("click", function() {
            // Check if the square is empty and the game is still ongoing
            if (!gameState[index] && !isGameWon()) {
                // Update the game state and square content
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;

                // Add the class "X" or "O" for styling
                square.classList.add(currentPlayer);

                // Toggle the current player
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });

    // Function to check if the game is won (You need to implement this)
    function isGameWon() {
        // Implement your win condition logic here
        // Check rows, columns, and diagonals for a win
        // Return true if the game is won, otherwise return false
    }
});