/*
 * Starter file 
 */
(function () {
    "use strict";

    window.addEventListener("load", init);

    function init() {
        console.log("Window loaded!");

        // Add event listeners to the buttons
        let encryptButton = document.getElementById("encrypt-it");
        encryptButton.addEventListener("click", handleEncrypt);

        let resetButton = document.getElementById("reset");
        resetButton.addEventListener("click", handleReset);
    }

    // Function to handle the Encrypt-It button click
    function handleEncrypt() {
        let textArea = document.getElementById("input-text");
        let resultArea = document.getElementById("result");

        // Get the input text and apply the shift cipher
        let inputText = textArea.value;
        let encryptedText = shiftCipher(inputText);

        // Display the encrypted text in the result area
        resultArea.textContent = encryptedText;
    }

    // Function to handle the Reset button click
    function handleReset() {
        // Clear the textarea content
        let textArea = document.getElementById("input-text");
        textArea.value = "";
        // Clear the result area
        let resultArea = document.getElementById("result");
        resultArea.textContent = "";
    }

    // Shift Cipher function
    function shiftCipher(text) {
        text = text.toLowerCase();
        let result = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] < 'a' || text[i] > 'z') {
                result += text[i];  // Keep non-letters unchanged
            } else if (text[i] == 'z') {
                result += 'a';  // Wrap 'z' around to 'a'
            } else {
                let letter = text.charCodeAt(i);
                let resultLetter = String.fromCharCode(letter + 1);
                result += resultLetter;
            }
        }
        return result;
    }

})();
