// Store in variables all the html elements I'll need to work with
let button = document.getElementById('button');
let input = document.getElementById('user');
let text = document.getElementById('text');
let commentsContainer = document.getElementById('comments');

// an array of objects, each object contains the user name and the comment text
// I add some comments already to show when the page loads for the 1st time
let listOfComments = [
  {
    user: 'Marc',
    text: 'really long comment'
  },
  {
    user: 'Luke',
    text: 'I am a dog'
  }
]

// Function in charge of looping over a certain array and return an html with each array element formatted
function createAListOfCommentsFromArray(array) {
  let arrayToHtml = ''
  for (let i = 0; i < array.length; i++) {
    arrayToHtml += `
    <br>
    <h4>${array[i].user} said:</h4>
    <p>${array[i].text}</p>
    <br>
    <hr>
  `
  }
  return arrayToHtml;
}

// code to listen on the click event on the comment button
button.addEventListener('click', function () {
  // I store in those variables the value of the input and the textarea
  let inputValue = input.value;
  let textValue = text.value;
  // Push an object with 2 keys with the values I need to the array of comments
  listOfComments.push({
    user: inputValue,
    text: textValue
  })
  // clear the values for the html
  input.value = '';
  text.value = '';
  // Change the html to show the new comments while calling the fn that is in charge of it
  commentsContainer.innerHTML = createAListOfCommentsFromArray(listOfComments)
})
// loads all the initial comments calling the fn
commentsContainer.innerHTML = createAListOfCommentsFromArray(listOfComments)

