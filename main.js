$(document).ready(function(){
  console.log("YO");

var itemsContainer = document.getElementById("item-list");
var items = ["http://www.fillmurray.com/50/50", "http://www.fillmurray.com/40/40", "cup"];
var level = 0;
var itemCount = 2;

for (var i = 0; i < itemCount; i++) {
  itemsContainer.innerHTML +=
  '<div class="img50x50"><img src="'+ items[i] +'"></div>' +
  '<div class="itemDescription">Description</div>';
}



































});