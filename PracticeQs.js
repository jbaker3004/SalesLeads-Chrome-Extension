// Practicing advanced js button click functions/calling
let box = document.getElementById("box")
box.addEventListener("click", function(){
    console.log("I want to open the box!")
})

// Using arguments/parameters in functions (greeting/name/emoji parameters in below)
const welcomeEl = document.getElementById("welcome-el")
function greetUser(greeting, name, emoji){
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}.`
}
greetUser("Welcome Back", "James Baker", "fire emoji")

// Numbers as functions parameters (create function where 2 numbers passed in are added together)
function add(num1, num2){
    return num1 + num2
}

// Arguments vs Parameters: Arguments are outside of function, parameters are inside. 

// Arrays as parameters
// You can pass whatever you want into a function, including arrays. Below is a function which gets first variable in an array. 
function getFirst(arr){
    return arr[0]
}
getFirst(["James", "Jane", "Bruno"])


// CHALLENGES
// 1. build a function which takes an array as a parameter and returns the whole array when called
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

function courses(myCourses){
    for(let i = 0; i < myCourses.length; i += 1){
        console.log(myCourses[i])
    }
}
courses(myCourses)  // to render the array in console

// 2. Show you can use localStorage
let Fname = "james"
localStorage.setItem("First Name", Fname)
let firstName = localStorage.getItem("First Name")
console.log(firstName)

// 3. Add Event listeners - listening for button clicks and logging out Jane's score from the data array
let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "David",
        score: 41
    }
]

let logScoreBtn = document.getElementById("log-score-btn")
logScoreBtn.addEventListener("click", function(){
    console.log(data[0].score)
})


// 4. Create a sentence generator
let largestCountriesDesc = "largest countries"
let fruitDesc = "best fruit"
let largestCountriesArr = ["China", "India", "USA"]
let fruitArr = ["Apples", "Bananas"]

function generateSentence(desc, arr){
    let baseString = `The ${arr.length} ${desc} are`
    const lastIndex = arr.length - 1
    for(let i = 0; i < arr.length; i += 1){
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "
        }
    }
    return baseString
}