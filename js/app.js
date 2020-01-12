//Build the menu dynamically

let unorderedList = document.getElementById("unordered-list");
let containerCount = document.getElementsByClassName("landing__container")
  .length;

for (i = 1; i < containerCount + 1; i++) {
  let item = "#section" + i + "-title";
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
  let buttonToAdd = document.getElementById(buttonName);

  listTarget.addEventListener("click", function() {
    itemTarget.scrollIntoView();

    buttonToAdd.innerHTML =
      "<button class='section-button' onclick='goToTop()'>Return to Top</button>";
  });
}

function goToTop() {
  document.documentElement.scrollTop = 0;

  for (i = 1; i < containerCount + 1; i++) {
    let elementToCheck = document.getElementById("section" + i);
    let buttonToDelete = document.getElementById("section" + i + "-button");
    buttonToDelete.innerHTML = "";
  }
}

function checkIfSectionInView() {
  let isInViewport = function(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
      bounding.top <= 50 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  for (i = 1; i < containerCount + 1; i++) {
    let sectionInFullView = document.getElementById("section" + i);

    window.addEventListener(
      "scroll",
      function(event) {
        if (isInViewport(sectionInFullView)) {
          sectionInFullView.classList.add("your-active-class");
        } else {
          sectionInFullView.classList.remove("your-active-class");
        }
      },
      false
    );
  }
}
checkIfSectionInView();