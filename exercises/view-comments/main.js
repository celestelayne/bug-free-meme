console.log('this works')

// select link
let link = document.querySelector('a')

// add event listener


function viewComments(event){
  // event.preventDefault()
  document.querySelector("#comments").className = 'show-comments'
}

link.addEventListener('click', viewComments)