// ● Create a function that get the current date and print only the month name 
// ● Create a function that generate a random number between 1-10.
// If the number is 5 or higher → the function will return the number multiple by 2
// If the number is less than 5 → the function will return the number itself
// ● Create a function that receive 2 strings 
// If 1 of them is part of the other string → the function will return true
// If not → the function will return false
// The check should include lowercase and uppercase 

function dateMonth(date){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    console.log(month[new Date().getMonth()])
}
dateMonth()

function random1(){
    let randomNumber = Math.random()*10
    randomNumber >= 5 ? console.log(randomNumber * 2) : console.log(randomNumber) ;}
random1()

function strings(){
    str1 = 'hello everyone'
    str2= 'Hello'
    str1.includes(str2) ? console.log(true) : console.log(false)
    str1.toLowerCase().includes(str2.toLowerCase()) ? console.log(true) : console.log(false)
    str1.toUpperCase().includes(str2.toUpperCase()) ? console.log(true) : console.log(false)
}

strings()




