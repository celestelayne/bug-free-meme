console.log('this works');

// dataset 
const flowers = [
  {
    name: "Tulip",
    color: "yellow",
    image:
      "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
  },
  {
    name: "Daffodil",
    color: "yellow",
    image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
  },
  {
    name: "Sunflower",
    color: "yellow",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
  },
  {
    name: "Bluebell",
    color: "blue",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
  },
  {
    name: "Rose",
    color: "red",
    image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
  }
];

const dropzone = document.querySelector('.right');
const ul = document.querySelector("ul");

//---------- RENDER NAMES TO PAGE

function renderFlowersToPage(flowers) {
  for (let i = 0; i < flowers.length; i++) {
    let list_item = document.createElement("li");
    list_item.classList.add(flowers[i].color, "card");
    list_item.style.position = "relative";
    // ad id
    list_item.setAttribute('id', `flower-${i}`)
    // add the draggable attribute
    list_item.setAttribute('draggable', true);
    list_item.setAttribute('data-item', i);
    // add flower name
    let title = document.createElement("h3");
    title.textContent = flowers[i].name;
    // add flower color
    let color = document.createElement("p");
    color.classList.add(flowers[i].color);
    color.textContent = flowers[i].color;

    let image = document.createElement("img");
    image.setAttribute("src", flowers[i].image);
    // append created elements to page
    ul.appendChild(list_item);
    list_item.appendChild(title);
    list_item.appendChild(color);
    list_item.appendChild(image);
  }
}
renderFlowersToPage(flowers);


function dragStartHandler(event){
  let style = getComputedStyle(event.target, null);
  event.dataTransfer.setData('text/plain', (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.getAttribute('data-item'))
  event.currentTarget.style.backgroundColor = 'yellow'
}

function dragOverHandler(event){
  event.preventDefault();
  return false
}

function dropHandler(event){
  
  let offset = event.dataTransfer.getData("text/plain").split(',')
  console.log(offset)
  let elements = document.getElementsByClassName('card')
  // for (var i = 0; i < elements.length; i++) {
    elements[parseInt(offset[2])].style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    elements[parseInt(offset[2])].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px'
    // dropzone.appendChild(elements[offset[2]])
    // console.log(elements[offset[2]])
    // dropzone.appendChild(document.getElementById(offset[2]));
    event.preventDefault();
    return false
    
  // }
}

// get the cards
let cards = document.getElementsByClassName('card');
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('dragstart', dragStartHandler, false);
  document.body.addEventListener('dragover', dragOverHandler, false);
  document.body.addEventListener('drop', dropHandler, false);
}