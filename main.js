$(document).ready(function(){
  console.log("YO");

var picture = document.getElementById('picture');
var boxes = document.getElementsByClassName('boxes');
var level = 1;
var itemsPictures = document.getElementById('itemsPictures');
var clickedBoxes = []; //store the imaged click to pass on to the next level when all clicked.
var descriptionBox1 = document.getElementById('description1');
var descriptionBox2 = document.getElementById('description2');
var descriptionBox3 = document.getElementById('description3');
var descriptionBox4 = document.getElementById('description4');


var descriptionArr1 = [["Woman face. 1 PT", "Glass 2PTS", "People Dancing 2PTS", "Group of People 3PTS"],["1","2","3","4"]];

var add1 = 0;
descriptionBox1.innerHTML=descriptionArr1[add1][0];
descriptionBox2.innerHTML=descriptionArr1[add1][1];
descriptionBox3.innerHTML=descriptionArr1[add1][2];
descriptionBox4.innerHTML=descriptionArr1[add1][3];

//assing a click event on every box: meaning that if i dont click it wont change anything : ex if i add an innerHTML it will only be displayed once a box is cliked.
for(var i = 0; i < boxes.length; i++) {   
  boxes[i].addEventListener('click', function() {
    if(clickedBoxes.indexOf(this.id) === -1) {  
      clickedBoxes.push(this.id);
    }

    if(clickedBoxes.length === boxes.length) {
      alert("Bravo!");
      level++;
      console.log(level);
  //change class to level+1
      picture.className="level"+ level ;
      itemsPictures.className="level"+ level ;
      clickedBoxes = []; //boss move
      add1++;
      descriptionBox1.innerHTML=descriptionArr1[add1][0];
      descriptionBox2.innerHTML=descriptionArr1[add1][1];
      descriptionBox3.innerHTML=descriptionArr1[add1][2];
      descriptionBox4.innerHTML=descriptionArr1[add1][3];
    }
  });
  
};

// add descriptions through array 


//set a score to div according to sizes

//set item list

//timer : set a Ready go too (ambitious)
// when done go to next level




});