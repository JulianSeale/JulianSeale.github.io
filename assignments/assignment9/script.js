
document.addEventListener("DOMContentLoaded", () => {
    const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo"];
    const rainbowContainer = document.getElementById("rainbow-container");

    document.getElementById("rainbow-button").addEventListener("click", () => {
        createRainbow(rainbowColors, 0);
    });

     createRainbow = (colors, index)  => {
        if (index >= colors.length) {
            // When all rainbow strips are added, reveal the pot of gold
            const potOfGold = document.getElementById("pot-of-gold");
            potOfGold.style.display = "block";
            return;
        }

        const stripColor = colors[index];
        const rainbowStrip = document.createElement("div");
        rainbowStrip.className = "rainbow-strip";
        rainbowStrip.style.backgroundColor = stripColor;

        // Add the strip to the rainbow container after a delay
        setTimeout(() => {
            rainbowContainer.appendChild(rainbowStrip);
            createRainbow(colors, index + 1); // Move to the next color
        }, 1000); // Delay each strip for 1 second
    }
});


window.onload = () => {
    const quotes = [
        "I love country", "I love rock","I love pop","I love rap","I love disco"
    ];

    const quoteContainer = document.getElementById("quote-text");
    let currentIndex = 0;

    function displayQuote() {
        quoteContainer.textContent = quotes[currentIndex];
        currentIndex = (currentIndex + 1) % quotes.length;
    }

    displayQuote();
    setInterval(displayQuote, 2000);
};
