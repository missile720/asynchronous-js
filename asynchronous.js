//Udemy section on asynchronous
/*
Thread of execution
    -JavaScript is a single-threaded language
    -Single sequential flow of control
    -JavaScript is a synchronous language with asynchronous capabilities
    -A thread has a call stack & memory

setTimeout & clearTimeout
    -executes after the end of the stack and only once
    --even with zero seconds doesnt start until end of stack

setInterval & clearInterval
    -repeats every set time

callbacks
    -when used doesnt mean its always asynchronous

HTTP
    -HyperText Transfer Protocol
    -Is a client/server protocol
    -fetch API is used mostly for HTTP requests
    -GET request retrieves data from the server
    -POST request sends data to the server
    -PUT request updates data on a server
    -Delete request deletes data from the server

AJAX & XHR Object
    -readyState has 5 possible values

Callback Hell
    -occurs when there are multiple nested callbacks
    -callbacks are nested within each other and can get messy when you have too many
    -this is where promises help

Promises
    -An object that represents the eventual completion or failure of a asynchronous operation
    -When creating a promise you pass in two functions resolve and reject
    -To access what is passed into resolve use .then
    -To access what is passed into reject use .catch
    -.finally runs whether the promise is resolved or rejected

Promises vs Callback Hell
    -Using .then to return the next call for getting data and repeating .then instead of having nested callbacks

Promise.all()
    -more concise way of passing promises
    -can add new promises with little change
*/

//Udemy section on Fetch API & Async Await
/*
Fetch Basics
    -fetch()
*/
    //fetching a JSON file
    fetch('./movies.json')
        .then((response) => response.json())
        .then((data) => console.log(data));

    //fetching a text file
    fetch('./test.txt')
        .then((response) => response.text())
        .then((data) => console.log(data));

    //fecthing from an API
    fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((data) => console.log(data));
/*
*/


//Mozilla
/*
Introducing asynchronous JavaScript
    -Gives the ability to run other tasks while a current long task is still running
    -For example a sychronous program that finds prime numbers is unresponsive until the prime numbers are determined
    -Asynchronous program works by sending requests and the rest of the program can still run
    -When the request is completed the event handler will be called
    -Callbacks is a function that is passed into another function and the callback will be called at the appropriate time
    -When there are too many callbacks it can become mesy and nested
    -This is called callback hell and error handling becomes very hard
    -You will have to check each level of the pyramid for errors instead of just checking on the top level


    What is the primary difference between synchronous and asynchronous programming in JavaScript?
        -Synchronous programming goes step by step waiting for the last step to finish before continuing
        -Asynchronous can occur while another part is running so both can be run at the same time
    Why is this useful?
        -For long programs that take time it is useful to be able to still interact with the program will it is running another feature
    What problems does it solve?
        -Solves the issue where programs are unresponsive due to waiting on long tasks to finish

How to Use Promises
    -Is an object that is returned by asynchronous functions that represents the current state of the operation
    -A promise can be in one of three states
        -pending: promise is created and the function hasnt succeeded or failed yet. This is the state when it's returned from a call to fetch() and the request is still being made
        -fullfilled: then() handler is called
        -rejected: the function failed the catch() handler is called
    -promise.all() takes in an array of promises and returns a single promise
        -then() only runs when all promises are fullfilled
        -catch() runs when even one promise is rejected
    -promise.any() works similiar to .all() except it is fullfilled if any one promise is fullfilled
        -Can't be certain which fetch request will finish first in this case
    -async keyword added to a function makes the function asynchronous
    -await used inside the function waits for the promise to be settled before running
        -await can only be used inside a async function or JavaScript module

How to implement a promise-based API
    -The promise constructor takes a single function as an argument called the executor
    -The executor function takes two arguments that are functions: resolve and reject
    -If succeeds you call resolve otherwise call reject
    -If the executor function throws an error reject is called automatically
    -Only a single parameter can be passed into resolve and reject
    */
    function alarm(person, delay) {
        //syntax for creating a new promise
        return new Promise((resolve, reject) => {
          if (delay < 0) {
            //if error is thrown reject is called automatically
            throw new Error('Alarm delay must not be negative');
          }
          setTimeout(() => {
            //if it works call resolve with parameter that is being sent
            resolve(`Wake up, ${person}!`);
          }, delay);
        });
      }
    /*
Introducing workers
    -Allows to run some tasks in a separate thread of execution
    -Bugs might occur if both the worker thread and main code thread access the same variables. 
      -Varaibles might change unexpectedly
    -Avoid by having the two not have direct access to each others variables
    -workers can't access the DOM
    -three types of workers: dedicated, shared and service workers
    -worker constructor is used and passes the URL of the worker script
    -send message to the worker via worker.postMessage()
    -Inside the worker script it checks via event listener for the message then after the work is done it returns a message via postMessage()
    -Dedicated workers are used by a single script instance
    -Shared workers are used by multiple script instances
    -Service workers act like proxy servers: Key component for Progressive Web Apps
*/