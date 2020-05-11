/*var logger = function(output){ 
    console.log(output)
}

export var appName = "ES6 Primer"; 

export var dummyFunction = function(){
    return "I am a dummy function"; 
}
*/

/* Arrow functions illustrations start 
var logger = output => {
    console.log(output) }

export var appName = "ES6 Primer"; 

export var dummyFunction = () => {
    return "I am a dummy function"; }
*/

/* Lexical block scoping */
const logger = output => {
    console.log(output) }

export const appName = "ES6 Primer"; 

export const dummyFunction = () => {
        return "I am a dummy function"; 
}
/* spread operator */
export const genericFunction = () => {
    const languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++'];
    const [firstLang, secondLang, ...otherLanguages] = languages;
    return `First language is ${firstLang}, and the second is ${secondLang} and the rest are ${otherLanguages}`;
}

export const multiplier1 = (a,b=1) =>{
    return(a*b);
}

export const matureMultiplier = (...numbersToMultiply) => {
    if (numbersToMultiply.length < 2){
        throw new Error("Illegal argument count. The number of arguments passed must be greater than 1")
    }

    let product = 1;

    for(let number of numbersToMultiply){
        product = product * number;
    }

    return product;
}

/* Assignment*/
export const coordinateGenerator = (m,c, ...xValues) => {
    //This function returns an array of {x,y} objects for all the x arguments passed to it.
    
    let coordinates = xValues.map(
        (x) => {
        return {'x': x, 'y' : (m*x) + c};
    });

    let output = 'The (x,y) values are as follows: ' 
        for (let coordinate of coordinates){
            let xy = `(${coordinate.x},${coordinate.y})`
            //output = output + xy; // the same as below
            output+=xy; 
        }
    return output;
}

/*Implement class person*/
export class Person{
    constructor(firstName, lastName, gender, height){
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.gender = gender; 
        this.height = height;
    } 
};

/*static methods*/
export class CustomMath{
    static sqrt(a){
        return Math.sqrt(a);
    }
    static pow(a,b){
        return Math.pow(a,b); 
    }
}

/* User*/
export class User extends Person{
    constructor(username, password, firstName, lastName, gender, height){
    super(firstName, lastName, gender, height); 
    this.username = username;
    this.password = password;
    } 
}
    
/*Promises*/
export const timeOut = (milliseconds) => {
    setTimeout(
        () => {
            return logger('Timeout is over');
        },
        milliseconds 
    )
}

export const  timeOutWithPromise = (milliseconds) => {
    return new Promise ((resolve, reject) => {
            setTimeout(
                // first argument is a function to call back when the asynchronous called setTimeout is over 
                () => {
                    resolve ('Timeout is over');
                },
                // second argument is hoe long to timeout in milliseconds
                milliseconds 
            )
        }
    )
}


export default logger;