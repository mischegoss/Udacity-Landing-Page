
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
   
    

    listTarget.addEventListener("click", function(){ 
        itemTarget.scrollIntoView();
        itemTarget.setAttribute("class", "your-active-class");
        
}
    )}

function goToTop() {
    document.documentElement.scrollTop = 0;
    console.log(containerCount)
    for (i = 1; i < (containerCount + 1); i++) {
        let elementToCheck = document.getElementById("section"+i);
        console.log(elementToCheck);
        if (elementToCheck.classList.contains("your-active-class")) {
            elementToCheck.classList.remove("your-active-class");
        }
        let buttonToCheck = document.getElementById("section"+i+ "-button");
        


    }

   
       
  




}
