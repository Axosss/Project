$(document).ready(function(){
  console.log("I want to die peacefully in my sleep, like my grandfather.. Not screaming and yelling like the passengers in his car.");

// if my code look messy about the Javascript and jQuery Mix is because i didn't wanted to start doing fancy jQuery stuff without having a reenforced knowledge about JavaScript. Once i felt better with it i started jQuery. 

  var picture = document.getElementById('picture');
  var boxes = document.getElementsByClassName('boxes');
  var itemsPictures = document.getElementById('itemsPictures');
  var player1Score = document.getElementsByClassName('playerScore')[0]; // choosed Class because later on it will be 2 players;
  var timer = document.getElementById('timer');

var level = 1;
var player1Score = 0;




var clickedBoxes = []; //store the imaged click to pass on to the next level when all clicked.

// TODO // This can be simplified by : selecting a parent node and iterate through. Think of updating also the rest (innerHTML..) when updating this
var descriptionBox1 = document.getElementById('description1');
var descriptionBox2 = document.getElementById('description2');
var descriptionBox3 = document.getElementById('description3');
var descriptionBox4 = document.getElementById('description4');

//Add descriptions about the artist : 


//Add level name through array :
var addd1=0;
var levelNameArr = [
["Auguste Renoir - Dance at Le Moulin de la Galette - Musee d'Orsay (France)"],//level 1 Name
["2"],//level 2 Name
["Pieter Bruegel - The Fall of the Rebel Angels - Royal Museums of Fine Arts (Belgium)"],//level 3 Name
["Andy Wharol - 210 Coca-Cola Bottles - Private Collection"],//level 4 Name
["Jackson Pollock - No 5 - Private Collection"],//level 5 Name
["Sandro Botticelli - The Birth of Venus - Uffizi Gallery (Florence)"],//level 6 Name
["Stuart Davis - The Mellow Pad - Brooklyn Museum (New York) "],//level 7 Name
];
$('#levelName').text(levelNameArr[addd1]); //set level 1 


// add descriptions through array
var add1 = 0; // this is the number that select the array according to the level.
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
// for(var i = 0; i < boxes.length; i++) { 

$( "#intro" ).dblclick(function() {
    $('#intro').fadeOut("slow", listenForClick());
  });

function listenForClick(){
// TO REACTIVATE  // runTheTimer()

    $('.boxes').one('click', function() {
      player1Score += this.value;
    $('#player1Score').text(player1Score); // assign scores to scoreboard

// TO REACTIVATE //Sounds when click on the good div  
// var audio = new Audio("win.wav");
// audio.play();   
      if(clickedBoxes.indexOf(this.id) === -1) {  
        clickedBoxes.push(this.id);
        console.log(clickedBoxes);
      }

      if(clickedBoxes.length === boxes.length) {
        level++; 
        changeTheLevel();   
//TODO// add a winning sound : like Bravo ! 
        }
    });
}  

function changeTheLevel(){

  alert("Bravo! Level "+level+" Now");
  uncrossDoneItems ();
        picture.className="level"+ level ; ////change class to level+1: it updates the image which is going to the next level
        itemsPictures.className="level"+ level ;// update the images in item list
        clickedBoxes = []; //boss move // set the array clickedBox back to 0. To be able to store the new clicked box.
        add1++; 
        descriptionBox1.innerHTML=descriptionArr[add1][0]; //win 
        descriptionBox2.innerHTML=descriptionArr[add1][1];
        descriptionBox3.innerHTML=descriptionArr[add1][2];
        descriptionBox4.innerHTML=descriptionArr[add1][3];
        addd1++;
        $('#levelName').text(levelNameArr[addd1]);
        listenForClick();

}

function runTheTimer(){
  var time = 61; //because it will appear 1 sec late.
  var timerId = setInterval(function() {
    time--; 
// TODO // if click on the wrong area in picture area ==> time--;
    console.log(time);
    timer.innerHTML=time; // to place it here instead of a the top is a win 

    if(time === 0) {
      level++;
      alert("Too slow ! Level "+level+" Now");
      picture.className="level"+ level ;
      itemsPictures.className="level"+ level ; 
      clickedBoxes = []; 
      add1++;     
      time=61; 
    }   
  }, 1000);
}

////////////////////////////////////////////////////////////////////////////
//Audio mute 

// console.log($('#backgroundAudio'));
// $( "#musicOn" ).click(function() {
//   console.log(this);
//     // $('#mute').attr('src', 'img/MusicOff.png');
//     if ($(this).attr("id") == "musicOn") {
//          this.src = this.src.replace("img/MusicOn.png","img/MusicOff.png");
//          this.id = "musicOff";
//          console.log(this.id)
//          musicSwitch();
//        } else {
//          this.src = this.src.replace("img/MusicOff.png","img/MusicOn.png");
//          musicSwitch();
//          this.id = "musicOn";
//        }
//        $(this).toggleClass("on");
// });
var audio = document.getElementById('backgroundAudio');
  document.getElementById('mute').addEventListener('click', function (e) { 
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
  }, false);

  function crossDoneItems (){
      $( "#click1" ).click(function() {
        $( "#description1" ).css("text-decoration", "line-through");
      });
      $( "#click2" ).click(function() {
        $( "#description2" ).css("text-decoration", "line-through");
      });
      $( "#click3" ).click(function() {
        $( "#description3" ).css("text-decoration", "line-through");
      });
      $( "#click4" ).click(function() {
        $( "#description4" ).css("text-decoration", "line-through");
      });
    }

  function uncrossDoneItems (){
    console.log ('we want to uncross')
        $( ".description" ).css("text-decoration", "none");
    }

  // listenForClick(); // calling the function so it runs 
  crossDoneItems ();


});