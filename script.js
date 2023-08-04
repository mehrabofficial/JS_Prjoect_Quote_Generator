// Array of inspirational quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",

    "In the middle of difficulty lies opportunity. - Albert Einstein",

    "Believe you can and you're halfway there. - Theodore Roosevelt",

    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",

    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",

    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",


    "The best way to predict the future is to create it. - Peter Drucker",

    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",

    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",

    "Life is what happens when you're busy making other plans. - John Lennon"
];



// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    const quoteElement = document.getElementById('quote');

    quoteElement.textContent = quotes[randomIndex];
}



// Event listener for the "Generate Quote" button
const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', generateQuote);



// Generate a quote on page load
generateQuote();
