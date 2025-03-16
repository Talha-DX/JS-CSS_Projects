    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Function to check the guessed number
    function checkGuess() {
        // Get the guessed number from the input field
        const userGuess = parseInt(document.getElementById('guessField').value);
        // Get the message display element
        const messageElement = document.getElementById('message');
        
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            // If the input is not a valid number
            messageElement.textContent = "Please enter a valid number between 1 and 100.";
        } else if (userGuess === randomNumber) {
            // If the guess is correct
            messageElement.textContent = "Congratulations! You guessed the correct number!";
        } else if (userGuess < randomNumber) {
            // If the guess is too low
            messageElement.textContent = "Too low! Try again.";
        } else {
            // If the guess is too high
            messageElement.textContent = "Too high! Try again.";
        }
    }

    // Come own you can do it
    // You are the best

    

