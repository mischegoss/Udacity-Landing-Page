
//Build the menu dynamically

let item;
let itemValue;
let itemText;
let listItem;
let listValue;
let listText;



for (i = 1; i < 8; i++) {
    item = "#section" + i+ "-title"
    itemValue = document.querySelector(item);
    itemText = itemValue.textContent;
    listItem = "#sample-nav-" + i;
    listValue = document.querySelector(listItem);
    listValue.innerText = itemText;   
  }

