//access elements in the document
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

//function generates joke from api
const generateJoke = () => {
    //initialize XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    //run open method that takes in the type of the request and second the link of the api or file
    xhr.open("GET", 'https://api.chucknorris.io/jokes/random');

    //readyState has 5 possible values
    // - 0: request no initialized
    // - 1: server connection established
    // - 2: request received
    // - 3: processing request
    // - 4: request finished and response is ready
    xhr.onreadystatechange = function () {
        //check if response is ready
        if(this.readyState === 4) {
            //check if status is 200
            if(this.status === 200){
                jokeEl.innerHTML = JSON.parse(this.responseText).value;
            }
            //if status is not 200 
            else{
                jokeEl.innerHTML = "Something Went Wrong (Not Funny)";
            }
        }
    }

    //sends the request
    xhr.send();
};

//event listener that runs when button is clicked
jokeBtn.addEventListener('click', generateJoke);
//event listener that runs once when the document is first loaded
document.addEventListener("DOMContentLoaded", generateJoke);