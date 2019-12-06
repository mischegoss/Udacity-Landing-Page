
//Build the menu dynamically

let item;
let itemValue;
let itemText;
let listItem;
let listValue;
let listText;

let containerCount =  document.getElementsByClassName("landing__container").length;


for (i = 1; i < (containerCount + 1); i++) {
    item = "#section" + i+ "-title"
    itemValue = document.querySelector(item);
    itemText = itemValue.textContent;
    listItem = "#sample-nav-" + i;
    listValue = document.querySelector(listItem);
    listValue.innerText = itemText;   
  }

