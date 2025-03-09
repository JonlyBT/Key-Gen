// Array of possible codes
const codes = [
    'QWERT1U5OPA2DFGHJKL',
    'ZXCV5NMASDF6HJKLQ',
    'PO6UYTRE1QLKJHGF0S',
    'ASDFGH1KLQWE81YUIO',
    'Z7CVBNMA4DFGHJ1LOP',
    'Q7ERT3ASDFGHZX6VBNM'
];

// Get the elements
const codeDisplay = document.getElementById('code-display');
const generateBtn = document.getElementById('generate-btn');
const loader = document.getElementById('loader');

// Check if the code has already been generated in this session
if (sessionStorage.getItem('codeGenerated')) {
    generateBtn.disabled = true; // Disable the button if a code is already generated
    codeDisplay.textContent = 'You have already generated a Key!';
} else {
    // Function to generate a random code
    function generateCode() {
        // Show the loader when generating the code
        loader.style.display = 'inline-block';
        generateBtn.disabled = true; // Disable the button after it's clicked

        // Simulate a delay before displaying the code
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * codes.length);
            const generatedCode = codes[randomIndex];
            codeDisplay.textContent = generatedCode;

            // Save to sessionStorage to track that the code has been generated
            sessionStorage.setItem('codeGenerated', 'true');

            // Hide the loader after the code is displayed
            loader.style.display = 'none';
        }, 2000); // Simulating 2 seconds delay for the "loading" effect
    }

    // Event listener for the button
    generateBtn.addEventListener('click', generateCode);
}
