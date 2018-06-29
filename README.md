The Arcade Game: Udacity Front End Web Developer Nanodegree, Project 3
======================================================================

## Table of Contents

* [Purpose](#purpose)
* [How to Run](#how to run)
* [Gameplay](#gameplay) 
* [Learning](#learning)


Note: Due to the large volume of comments in the starter code, I have preceded all of my original code additions with //mycode

## Purpose

This third project of the Udacity Front-End Web Developer Nanodegree (FEND) instructed me to build a functional Javascript version of the arcade game Frogger. I refined my understanding of JavaScript in this project by following object-oriented programming throughout.

## How to Run

Option 1: Visit http://arcadegame.volantweb.com/ for a live, functioning version of the game. (And then visit volantweb.com to see more of my recent clients!)

Option 2: Run the game locally on your computer (requires Internet connection, JavaScript, HTML, CSS)
* Download the repository from GitHub
* Open the downloaded folder
* Double-click on the 'index.html' file, or drag it into your web browser of choice
* Game will be ready to play (see next section for gameplay functionality and rules)

## Gameplay

Use arrow keys to move player left, right, up or down on the game board. Player cannot move off of the game board. If player is hit with an enemy/bug, the player resets to original position. If player makes it to the water, player wins!

## Learning

My biggest takeaway from this project was a better understanding of the 'prototype' of constructor functions. Prior to this project, I did not understand why we would add functions to a Player.prototype, for example, rather than to Player itself. Working with functions and prototypes, I learned that prototype functions can run multiple times, while objects are created with properties once. I suspect I have more to learn about this principle, but having to work with classes and objects got me farther down the road.


>>>>>>>>>>>
Initial Udacity Readme:

frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).
