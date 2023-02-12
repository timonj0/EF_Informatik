// Canvas with cats bouncing around

// The canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// The cat image
var cat = new Image();
cat.src = "images/cat.png";

// The cats
var cats = [];

// The number of cats
var numCats = 100;

// The game loop
function main() {
    // Print startup message
    console.log("Cats game started");

    // Start the game loop
    setInterval(loop, 1000 / 60);
}

// The game loop
function loop() {
    // Update the game state
    update();

    // Draw the game state
    draw();
}

// Update the game state
function update() {
    // Move the cats
    for (var i = 0; i < numCats; i++) {
        cats[i].x += cats[i].dx;
        cats[i].y += cats[i].dy;
    }
}

// Draw the game state
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the cats
    for (var i = 0; i < numCats; i++) {
        ctx.drawImage(cat, cats[i].x, cats[i].y);
    }
}

// Create a cat
function createCat() {
    var cat = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: Math.random() * 10 - 5,
        dy: Math.random() * 10 - 5
    };
    return cat;
}

// Create the cats
for (var i = 0; i < numCats; i++) {
    cats.push(createCat());
}

// Start the game
main();

// Path: docs\Netzwerke\webserver\cats.js