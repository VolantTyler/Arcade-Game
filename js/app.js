// Enemies our player must avoid
var Enemy = function(x,y, speed = Math.floor(Math.random() * 5 + 1 )) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    //mycode
    //establishing original coordinates at x, y
    this.x = x;
    this.y = y;
    //generate random speed 1-20 (Math.floor() and Math.random() principles learned from https://www.w3schools.com/jsref/jsref_random.asp)
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //mycode
    //enemy movement, variable speed
    this.x += this.speed * dt * 10;
    //when enemy reaches right side of the board, reset to starting position
    if (this.x > 400) {
        this.reset();
        this.speed = Math.floor(Math.random() * 200 + 1 );
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//mycode
Enemy.prototype.reset = function() {
    this.x = 0;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
//mycode
var Player = function(x,y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};
Player.prototype.update = function() {
    //mycode
    //collision detection    
    //win condition
    if (this.y < 40) {
        console.log("You win!");
        this.reset();
    }
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(key) {
    if (key === "up") {
        this.y -= 85;
    //restrict player to game board with && conditionals
    } else if ((key === "left") && (this.x > 0)) {
        this.x -= 100;
    } else if ((key === "down") && (this.y < 400)) {
        this.y += 85;
    } else if ((key === "right") && (this.x < 400)) {
        this.x += 100;
    } else {
        return;
    }
};
Player.prototype.reset = function() {
    this.x = 0;
    this.y = 400;
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
//mycode
const enemy1 = new Enemy(0, 50);
const enemy2 = new Enemy(0, 135);
const enemy3 = new Enemy(0, 215);
const allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player
//mycode
let player = new Player(0, 400);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
