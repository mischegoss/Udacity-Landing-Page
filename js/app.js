
//Build the menu dynamically


let unorderedList = document.getElementById("unordered-list");
let containerCount =  document.getElementsByClassName("landing__container").length;


for (i = 1; i < (containerCount + 1); i++) {
    let item = "#section" + i+ "-title";
    let itemValue = document.querySelector(item);
    let itemText = itemValue.textContent;
    let newLine = document.createElement("li");
    let lineText = document.createTextNode(itemText);
    let listItem = "sample-nav-" + i;
    newLine.setAttribute("id", listItem);
    newLine.setAttribute("class", "nav-list-item");
    newLine.appendChild(lineText);
    unorderedList.appendChild(newLine);

    
    let itemTarget = document.getElementById("section" + i);
    let listTarget = document.getElementById(listItem);
    let buttonName = "section" + i + "-button";
    let buttonToAdd = document.getElementById(buttonName)

    listTarget.addEventListener("scroll", function() {
        itemTarget.setAttribute("style", "border: 10px dotted green")
    })

    listTarget.addEventListener("click", function(){ 
        itemTarget.scrollIntoView();
        itemTarget.setAttribute("class", "your-active-class");
        
        buttonToAdd.innerHTML = "<button class='section-button' onclick='goToTop()'>Return to Top</button>"
        

        
}
    )}

function goToTop() {
    document.documentElement.scrollTop = 0;
    console.log(containerCount)
    for (i = 1; i < (containerCount + 1); i++) {
        let elementToCheck = document.getElementById("section"+i);
        let buttonToDelete = document.getElementById("section" + i + "-button");
        buttonToDelete.innerHTML = "";

        if (elementToCheck.classList.contains("your-active-class")) {
        elementToCheck.classList.remove("your-active-class");
    } 

       

        
        }
    }

    
// When the user scrolls the page, execute myFunction
window.onscroll = function() {this.addStickyOnOffset()};

// Get the header
var header = document.getElementById("header");
console.log(header)

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addStickyOnOffset() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}