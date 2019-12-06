
//Build the menu dynamically

let item;
let itemValue;
let itemText;
let listItem;
let listValue;
let newLine;
let lineText;
let unorderedList = document.getElementById("unordered-list");

let containerCount =  document.getElementsByClassName("landing__container").length;


for (i = 1; i < (containerCount + 1); i++) {
    item = "#section" + i+ "-title"
    itemValue = document.querySelector(item);
    itemText = itemValue.textContent;
    newLine = document.createElement("li");
    lineText = document.createTextNode(itemText);
    listItem = "sample-nav-" + i;
    newLine.setAttribute("id", listItem);
    newLine.setAttribute("class", "nav-list-item");
    newLine.appendChild(lineText);
    unorderedList.appendChild(newLine)

}

