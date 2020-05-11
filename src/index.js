/*
//Note: Slide page _ .Modularity
import logger from './tools'; 

logger("Welcome! We are now having fun with modularity");
*/


//
import logger, {appName, dummyFunction, genericFunction, multiplier1, matureMultiplier, coordinateGenerator, 
    Person, CustomMath, User, timeOut, timeOutWithPromise,} from './tools';
import fetch from 'node-fetch';
logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction());


//Template Literals
//import logger, {appName, dummyFunction} from './tools';
logger(`Welcome! The application name is '${appName}'. There is a function that returns '${dummyFunction()}'`)

logger(genericFunction());

logger(multiplier1(2,4));

try{
    //logger(matureMultiplier(5));
    const firstNum = 15;
    const secondNum = 6;
    let result = `The product of ${firstNum} and ${secondNum} is ${matureMultiplier(firstNum,secondNum)}`
    logger(result);
}catch(error){
    logger(error.message);
}

//coordinateGenerator

const coordinatesGenerated =  coordinateGenerator(6,9, 2,3,4,5,6,7.5);
logger(coordinatesGenerated);

// class person

let person1 = new Person("Pius", "Onobhayedo", "Male",1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);
logger(`Person 1 is ${person1.firstName} whose height is ${person1.height}. Person 2 is ${person2.firstName} whose height is ${person2.height}`);

// static

logger(CustomMath.sqrt(100));

// User

let user1 = new User("myusername","mypassword","Pius","Onobhayedo","Male",undefined); 
logger(`The username of ${user1.firstName} is ${user1.username}`)

/*Promises*/
/*
setTimeout(
    () => {
        return logger('Timeout is over');
    },
    6000
)

logger('Just a string after call to setTimeout');
*/

timeOut(4000);

timeOutWithPromise(3000).then((data) => {
    logger(`The Promise resolve with message ${data}`);
}).catch((error) =>{
    logger(`The Promise returned reject with messsage ${error}`);
})

// at this point, install node-fetch fir further illustration

let usersUrl = 'http://jsonplaceholder.typicode.com/users/';


fetch(usersUrl).then((response) => {
    response.json().then((data) => {
        logger(data);
    }).catch((error) => {
        logger(error);
    })
}).catch((error) => {
    logger(error);
})

let url = 'http://jsonplaceholder.typicode.com/users/2';
fetch(url)
    .then(response => response.json()) //convert data returned to json
    .then(data => logger(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data 
    .catch(error => logger(`Error: ${error}`));

  
let fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json()) 
let fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json()) 
let fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())
Promise.all([fetch1,fetch2,fetch3])//get the data for the three calls in an array. 
.then((data)=>{
logger(`User1 = ${data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}`);//display data from array 
})


/* Async/Await*/
// get the data of remote user one at a time
usersUrl = 'http://jsonplaceholder.typicode.com/users/';
/*
const getUserById = async (userId) =>{

    const url = usersUrl + userId;
    const response = await fetch(url);
    const data = await response.json();
    logger(`The data returned by getUserById is ${data.name}`)
}

getUserById (12);
*/

const getUserById = async (userId) => {
    const url = usersUrl + userId
    try{
        const response = await fetch(url);
        const data = await response.json();
        if(response.status >= 200 && response.status < 300){
            logger(data.name)
        }else{
            throw Error(response.status);
        } 

    }catch(error){
        logger(`Error:  ${error}`); 
    }
}

getUserById(2);

/*const getUserById = async (userId) => {
    const url = usersUrl + userId;
    try{
        const response = await fetch(url);
        const data = await 
    }
}*/