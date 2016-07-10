$(document).ready(function(){
  console.log("I want to die peacefully in my sleep, like my grandfather.. Not screaming and yelling like the passengers in his car.");

var picture = document.getElementById('picture');
var boxes = document.getElementsByClassName('boxes');
var itemsPictures = document.getElementById('itemsPictures');
var player1Score = document.getElementsByClassName('playerScore')[0]; // choosed Class because later on it will be 2 players;

var level = 1;
var player1Score=0;


var clickedBoxes = []; //store the imaged click to pass on to the next level when all clicked.

// TODO // This can be simplified by : selecting a parent node and iterate through. Think of updating also the rest (innerHTML..) when updating this
var descriptionBox1 = document.getElementById('description1');
var descriptionBox2 = document.getElementById('description2');
var descriptionBox3 = document.getElementById('description3');
var descriptionBox4 = document.getElementById('description4');




// add descriptions through array
var add1 = 0; // Changed : 0 > 1 
var descriptionArr = [
["Woman face. 1 PT", "Glass 2PTS", "People Dancing 2PTS", "Group of People 3PTS"], //lvl1 descriptions
["Washington face","Big Ben","Ben Laden ?","Money coins"], //level 2 descriptions
["Woman face","Dolphin creature","Creature","E.T. ?"],//level 3 descriptions
["Coke","More Coke","What Coke again?!","You already now :)"],//level 4 descriptions
["Pollock right ?","Good old Jackson","Bloody JACKSON","Seriously ?!"],//level 5 descriptions
["Venus face","Random Branches","Too easy if I tell you","Good Luck"],//level 6 descriptions
["Good","Luck","Now",":)"],//level 7 descriptions
];

descriptionBox1.innerHTML=descriptionArr[add1][0];
descriptionBox2.innerHTML=descriptionArr[add1][1];
descriptionBox3.innerHTML=descriptionArr[add1][2];
descriptionBox4.innerHTML=descriptionArr[add1][3];

//assing a click event on every box and make it possible t:
for(var i = 0; i < boxes.length; i++) {   
  boxes[i].addEventListener('click', function() {
    if(clickedBoxes.indexOf(this.id) === -1) {  
      clickedBoxes.push(this.id);

    }

    if(clickedBoxes.length === boxes.length) {
     
      level++;
      console.log(level);
      alert("Bravo! Level "+level+" Now");
      picture.className="level"+ level ; ////change class to level+1: it updates the image which is going to the next level
      itemsPictures.className="level"+ level ;// update the images in item list
      clickedBoxes = []; //boss move // set the array clickedBox back to 0. To be able to store the new clicked box.
      add1++; // 
      descriptionBox1.innerHTML=descriptionArr[add1][0];
      descriptionBox2.innerHTML=descriptionArr[add1][1];
      descriptionBox3.innerHTML=descriptionArr[add1][2];
      descriptionBox4.innerHTML=descriptionArr[add1][3];
    }
  });
  
};




//set a score to div according to sizes


//timer : set a Ready go too (ambitious)




});