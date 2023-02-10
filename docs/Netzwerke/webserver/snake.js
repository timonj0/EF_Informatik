// Web version of the classic game "Snake"

// The snake is represented by an array of cells
// Each cell is an object with x and y properties
var snake = [
    { x: 150, y: 150 },
    { x: 140, y: 150 },
    { x: 130, y: 150 },
    { x: 120, y: 150 },
    { x: 110, y: 150 }
];

// The food is represented by a single cell
var food = { x: 0, y: 0 };

// The score is the number of times the snake ate food
var score = 0;

// The game is over when the snake hits a wall or itself
var gameOver = false;

// The direction of the snake
var dx = 10;
var dy = 0;

// The canvas context
var ctx;

// The game loop
function main() {
    // Print startup message
    console.log("Snake game started");

    // Get the canvas context
    ctx = document.getElementById("canvas").getContext("2d");

    // Start the game loop
    setInterval(loop, 100);
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
    // If the game is over, do nothing
    if (gameOver) {
        return;
    }

    // Move the snake
    move();

    // Check if the snake ate food
    checkFoodCollision();

    // Check if the snake hit a wall or itself
    checkWallCollision();
    checkSnakeCollision();
}

// Draw the game state
function draw() {
    // Clear the canvas
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Draw the snake
    ctx.fillStyle = "green";
    for (var i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
        ctx.strokeRect(snake[i].x, snake[i].y, 10, 10);
    }

    // Draw the food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 10, 10);
    ctx.strokeRect(food.x, food.y, 10, 10);

    // Draw the score
    ctx.fillStyle = "black";
    ctx.font = "10px Arial";
    ctx.fillText("Score: " + score, canvas.width - 50, 10);
}

// Move the snake
function move() {
    // Create the new snake head
    var head = { x: snake[0].x + dx, y: snake[0].y + dy };

    // Add the new head to the beginning of snake body
    snake.unshift(head);

    // Remove the last part of snake body
    snake.pop();
}

// Check if the snake ate food
function checkFoodCollision() {
    // If the snake ate food, increase score and regenerate food
    if (snake[0].x === food.x && snake[0].y === food.y) {
        score += 10;
        generateFood();
    }
}

// Check if the snake hit a wall or itself
function checkWallCollision() {
    // If the snake hit a wall, end the game
    if (snake[0].x < 0 || snake[0].x > canvas.width - 10 ||
        snake[0].y < 0 || snake[0].y > canvas.height - 10) {
        gameOver = true;
    }
}

function checkSnakeCollision() {
    // If the snake hit itself, end the game
    for (var i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            gameOver = true;
        }
    }
}

// Generate a random number
function randomTen(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

// Generate food
function generateFood() {
    // Generate a random number the food x-coordinate
    food.x = randomTen(0, canvas.width - 10);

    // Generate a random number for the food y-coordinate
    food.y = randomTen(0, canvas.height - 10);

    // If the new food location is where the snake currently is, generate a new food location
    for (var i = 0; i < snake.length; i++) {
        if (food.x === snake[i].x && food.y === snake[i].y) {
            generateFood();
        }
    }
}

// Change the direction of the snake
function changeDirection(event) {
    // Get the key code
    var keyCode = event.keyCode;

    // Up arrow
    if (keyCode === 38 && dy === 0) {
        dx = 0;
        dy = -10;
    }

    // Down arrow
    if (keyCode === 40 && dy === 0) {
        dx = 0;
        dy = 10;
    }

    // Left arrow
    if (keyCode === 37 && dx === 0) {
        dx = -10;
        dy = 0;
    }

    // Right arrow
    if (keyCode === 39 && dx === 0) {
        dx = 10;
        dy = 0;
    }
}

// Start the game
main();

// Listen to keyboard events to move the snake
document.addEventListener("keydown", changeDirection);

// Listen to touch events to move the snake
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            dx = -10;
            dy = 0;
        } else {
            dx = 10;
            dy = 0;
        }
    } else {
        if (yDiff > 0) {
            dx = 0;
            dy = -10;
        } else {
            dx = 0;
            dy = 10;
        }
    }

    xDown = null;
    yDown = null;
}