//mycode
//declare variable for freezing keyboard
let freezeKey = 0;
const resetButton = document.getElementById('reset');


let Enemy = function(x,y, speed = Math.floor(Math.random() * 4 + 1 )) {
    this.sprite = 'images/enemy-bug.png';

    //mycode
    //establishing original coordinates at x, y
    this.x = x;
    this.y = y;
    //generate random speed 1-20 (Math.floor() and Math.random() principles learned from https://www.w3schools.com/jsref/jsref_random.asp)
    this.speed = speed;
};

Enemy.prototype.update = function(dt) {

    //mycode
    //enemy movement, variable speed
    //number 75 chosen to create playable/challenging enemy movement speeds
    this.x += this.speed * dt * 75;
    //when enemy reaches right side of the board, reset position and speed
    if (this.x > 500) {
        this.reset();
    }
};

//mycode
//reset to starting position and create new random speed
Enemy.prototype.reset = function() {
    this.x = -100;
    this.speed = Math.floor(Math.random() * 4 + 1 );
}

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//mycode
var Player = function(x,y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};
Player.prototype.update = function() {
    //mycode
    //collision detection   
    //principle learned from http://blog.sklambert.com/html5-canvas-game-2d-collision-detection
    allEnemies.forEach(function (enemy) {
        //only checks for collision if collision has not happened 
        //i.e. if player is boy, check; if player is explosion, do not check
        if (player.sprite === 'images/char-boy.png') {
            if (enemy.x < player.x + 70  && enemy.x + 70  > player.x &&
                enemy.y < player.y + 70 && enemy.y + 70 > player.y){
                player.sprite = 'images/explosion.png';
                //adjust explosion image position to center on player position
                player.x += 25;
                player.y += 75;
                //thanks to FEND student Moschops [FEND] PDX
                //for suggestions for keyboard freeze and timeout
                freezeKey = 1;
                setTimeout(function() {
                    freezeKey = 0;
                    player.reset();
                }, 1500);
            };
        } else {
            return;
        }
    });
    
    //win condition
    if (this.y < 40) {
        //lock keyboard until button clicked in victory modal
        freezeKey = 1;
        this.victory();
        this.reset();
    }
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(key) {
    //freezeKey checks if keyboard should be frozen due to
    //recent collision
    if (freezeKey === 0) {
        if (key === "up") {
            this.y -= 85;
        //restrict player to game board with && conditionals
        } else if ((key === "left") && (this.x > 0)) {
            this.x -= 100;
        } else if ((key === "down") && (this.y < 400)) {
            this.y += 85;
        } else if ((key === "right") && (this.x < 400)) {
            this.x += 100;
        //if any non-arrow key is pressed, do nothing
        } else {
            return;
        }
    } else {
        return;
    }
};
Player.prototype.reset = function() {
    this.x = 0;
    this.y = 400;
    //player icon is set to boy on reset
    this.sprite = 'images/char-boy.png';
}
Player.prototype.victory = function(){
    //Victory message - starter code from https://sweetalert.js.org/guides/ 
    swal({
      title: 'You win!', 
      icon: "success",
    })
    //if ok button is pressed, or user clicks outside of modal
    //unfreeze keyboard
    .then((value) => {
        if (value) {
            freezeKey = 0;
        } else {
            freezeKey = 0;
        }
    })
  };



//mycode
//click reset button returns player and enemies to starting position
resetButton.addEventListener('click', function(){
    allEnemies.forEach(function (enemy) {
        enemy.reset();
    });
    player.reset();
    freeze = 0;
});


//mycode
//create and place three enemies in each of three "lanes"
const enemy1 = new Enemy(0, 50);
const enemy2 = new Enemy(0, 135);
const enemy3 = new Enemy(0, 215);
const allEnemies = [enemy1, enemy2, enemy3];

//mycode
//create player
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
