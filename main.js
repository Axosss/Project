$(document).ready(function(){
  console.log("YO");

// Item list: 
var itemsContainer = document.getElementById("item-list");
var image5050 = ["http://www.fillmurray.com/50/50", "http://www.fillmurray.com/40/40", "cup"];
var level = 0;
var itemCount = 2;

for (var i = 0; i < itemCount; i++) {
  itemsContainer.innerHTML +=
  '<div class="img50x50"><img src="'+ image5050[i] +'"></div>' +
  '<div class="itemDescription">Description</div>';
};



//Images Displayed:
var frameLayout = document.getElementById('frame-layout');
var items = ["img/img1.jpg","img/img2.jpg"];
var level = 0;

frameLayout.innerHTML = '<div class="picture"><img src="'+ items[level] +'"></div>';


//Div to be clicked on: 
//Create 3 css style : Each according to the points earned. Each point will be assign a specfiq height and width.

//make them appear on the image div
var frameLayout = document.getElementById('frame-layout');
// how do i do about the positioning ? It is linked to css, i  will have to create a specific css for each div ????????
var invisibleDiv = {
 createDiv: function () {
  frameLayout.innerHTML = '<div id=test" style="height:100px; width:730"></div>';
  invisibleDiv.style.left = x_pos+'px';
  invisibleDiv.style.top = y_pos+'px';
  }
}

createDiv();
// var d = document.getElementById('yourDivId');
// d.style.position = "absolute";
// d.style.left = x_pos+'px';
// d.style.top = y_pos+'px';






























});