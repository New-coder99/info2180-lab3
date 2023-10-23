document.addEventListener("DOMContentLoaded", function() {
    
    const squares = document.querySelectorAll(".square");
    const button = document.getElementById("button");
    const status = document.getElementById("status");
    
    let Player = "X";
    let gameState = ["", "", "", "", "", "", "", "", ""]; 
    let gameEnd= false;
    
    
    squares.forEach(function(square, index) {
        
        square.classList.add("square");

        square.addEventListener("click", function() {
        
            if (!gameState[index+1] && !isGameWon()) {
                
                gameState[index+1] = Player;
                square.textContent = Player;

                square.classList.add(Player);

                
                Player = Player === "X" ? "O" : "X";
            }
            if(isGameWon()){
                Player=Player === "X" ? "O" : "X";
                win=Player;
                status.textContent="Congratulations!"+" "+win+" "+"is the Winner";
                status.classList.add("you-won");
            }
            
            
        });
    });
    
    button.addEventListener("click", function() {
        
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
        gameState = ["", "", "", "", "", "", "", "", ""];
        Player = "X";

        
        
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");
    
    })
        
    
    function isGameWon() {
        const HowtoWin = [
            [1,2,3], [4,5,6], [7,8,9], 
            [1,4,7], [2,5,8], [3,6,9],
            [1,5,9], [3,5,7] 
        ];
    
        
        for (const combination of HowtoWin) {
            const [a, b, c] = combination;
    
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return true; 
            }
        }
    
        return false;
    }
    
})
