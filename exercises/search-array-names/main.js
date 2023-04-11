const people = [
  { name: "adri" },
  { name: "becky" },
  { name: "chris" },
  { name: "dillon" },
  { name: "evan" },
  { name: "frank" },
  { name: "georgette" },
  { name: "hugh" },
  { name: "igor" },
  { name: "jacoby" },
  { name: "kristina" },
  { name: "lemony" },
  { name: "matilda" },
  { name: "nile" },
  { name: "ophelia" },
  { name: "patrick" },
  { name: "quincy" },
  { name: "roslyn" },
  { name: "solene" },
  { name: "timothy" },
  { name: "uff" },
  { name: "violet" },
  { name: "wyatt" },
  { name: "x" },
  { name: "yadri" },
  { name: "zack" }
];

// get search bar element
const searchBar = document.querySelector("input");
const ul = document.querySelector("ul");
const clearButton = document.getElementById('clear')

//---------- RENDER NAMES TO PAGE
function renderNamesToPage(people) {
  for (let i = 0; i < people.length; i++) {
    // creating a li element for each result item
    let list_item = document.createElement("li");
    // adding a class to each item of the results
    list_item.classList.add("result-item");
    // grabbing the name of the current point of the loop and adding the name as the list item's text
    list_item.textContent = people[i].name;
    // appending the result item to the list
    ul.appendChild(list_item);
  }
}
renderNamesToPage(people);

//---------- SEARCH NAMES FOR SPECIFIC NAME
function searchNames(e) {
  const searchString = e.target.value.toLowerCase();
  console.log("line 48: ", searchString);
  
  const searchedName = people.filter(function (person) {
    if (searchString && searchString.trim().length > 0) {
      return person.name.includes(searchString);
    }
  });
  displaySearched(searchedName);
}

searchBar.addEventListener("keyup", searchNames);

function displaySearched(name) {
  console.log("line 57: ", name);
  clearList();
  for (let i = 0; i < name.length; i++) {
    let list_item = document.createElement("li");
    list_item.textContent = name[i].name;
    ul.appendChild(list_item);
  }
}

function clearList() {
  console.log("clear this list first");
  ul.innerHTML = "";
}

function clearSearchForm() {
  searchBar.reset()
}

clearButton.addEventListener('click', clearSearchForm)