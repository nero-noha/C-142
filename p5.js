function setup() {
    let canvas = createCanvas(400, 300); // Set the canvas size
    canvas.parent('canvas-container'); // Place the canvas inside the div
}

let video;

function setup() {
    let canvas = createCanvas(400, 300);
    canvas.parent('canvas-container');

    video = createCapture(VIDEO);
    video.size(width, height); // Set the size to match the canvas
    video.hide(); // Hide the video component
}

function draw() {
    background(0); // Clear the canvas
    image(video, 0, 0, width, height); // Draw the webcam video on the canvas
}

let poseNet;

function setup() {
    // ... (previous code)

    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log('Model is loaded');
}

// Define the variable to hold the game status at line 28
let gameStatus = "initial"; // You can initialize it as needed

function startGame() {
    // ... (other code in the function)

    // Inside the startGame() function, update the gameStatus variable and the element with id "status"
    gameStatus = "start"; // Update game status to "start"
    document.getElementById("status").innerHTML = "Game Is Loaded";
}

function draw() {
    // ... (other code in the function)

    // Inside the if condition at line 67 of the draw() function, check if the game status is equal to "start"
    if (gameStatus === "start") {
        // Your code to handle the game logic when the status is "start"
    }
}
