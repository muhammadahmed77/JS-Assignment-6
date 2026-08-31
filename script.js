// CHAPTER 21-25

// Q1
// var firstName = prompt("Enter your First Name")
// var LastName = prompt("Enter your lat Name")

// document.write("Welcome " + firstName + " " + LastName + ".")

// Q2
// var favPhone = prompt("Enter you fav Mobile Phone")
// var stringLength = favPhone.length

// document.write("My Fav phone is : " + favPhone + "<br>")
// document.write("String Length : " + stringLength)

// Q3
// var word = "Pakistan";
// var Index = word.indexOf('n');

// document.write("String : " + word + "<br>");
// document.write("Index of 'n' : " + Index );

// Q4
// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");

// document.write("String: " + word + "<br>");
// document.write("Last index of 'l': " + lastIndex);

// Q5
// var word = "Pakistani";
// var character = word.charAt(3);

// document.write("String: " + word + "<br>");
// document.write("Last index of 'l': " + character);

// Q6
// var firstName = prompt("Enter your First Name")
// var LastName = prompt("Enter your lat Name")
// document.write("Hello " + firstName.concat(" " + LastName + "."))

// Q7
// var city= "Hyderabad";
// var updateCity = city.replace("Hyder", "Islam")
// document.write("City : " + city + "<br>")
// document.write("After replacement : " + updateCity)

// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var updateMessege = message.replace(/and/g, "&")
// document.write(updateMessege)

// Q9
// var strNum = "472";
// var convertedNum = Number(strNum);
// document.write("Value : " + strNum + "<br>Type : " + typeof strNum + "<br>")
// document.write("Value : " + strNum + "<br>Type : " + typeof convertedNum)

// Q10
// var input = "Peanut";
// var inputtop = input.toUpperCase()
// document.write("Input : " + input + "<br>")
// document.write("Uppercase : " + inputtop + "<br>")

// Q11
// var UserInput = prompt("Enter")
// var ChangingtoUppercase = UserInput.charAt(0).toUpperCase() + UserInput.slice(1).toLowerCase();
// document.write("User Input: " + UserInput + "<br>")
// document.write("Upper Case: " + ChangingtoUppercase)

// Q12
// var num = 35.35
// var UpdatedNum = num.toString().replace(".","")
// document.write("Number : " + num + "<br>")
// document.write("String : " + UpdatedNum)

// Q13
// var username = prompt("Enter your username:");
// var containsSpecial;

// for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i);
// if(charCode == 33 || charCode == 44 || charCode == 46 || charCode == 64){
//     containsSpecial = true
//     break
// }
// }
// if(containsSpecial){
//     alert("Please enter a valid Username")
// }else{
//     alert("Username is Correct")
// }

// Q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")

// var searchItem = userInput.toLowerCase()

// var found = false;

// for (var i = 0; i < A.length ; i++) {
// if ( A[i].toLowerCase() === searchItem ){
//    found = true;
//    break;
//   }
// }
// if(found){
//     document.write("Sir " + userInput+ " is at index " + i)
// }else{ 
//     document.write("Sorry Sir "+ userInput +" is not available ")
// }

// Q15
// var password = prompt("Enter you password")
// var hasnumbers;
// var hasAlphabet;
// var starwithNumbers;


// if (password.length <= 6) {
//     alert("Password must at least 6 characters long")
// }
// var firstchar = password.slice(0,1)
// if(firstchar >= 1 && firstchar <=9){
//     starwithNumbers = true
// }
// if(starwithNumbers){
//     alert("Password can not begin with a number.\nPlease enter a valid password.")
// }
// for( var i = 0 ; i < password.length ; i++ ){
//    var char = password.slice(i,i + 1)

//    if(char >= 0 || char <= 9){
//     hasnumbers = true
//    }else if( char >= a || char <=z){
//     hasAlphabet = true
//    }else if( char >= A || char <= Z){
//     hasAlphabet = true
// }
// }
// if(!hasAlphabet || !hasnumbers){
//    alert("Password must contain both alphabets and numbers.\nPlease enter a valid password.");
// } else {
//     alert("Password accepted!");
// }

// Q16

// var university = "University of Karachi"
// var arr = university.split("");

// for( var i = 0 ; i < arr.length ; i++){
//     document.write(arr[i] + "<br>")
// }

// Q17

// var userInput = prompt("Input")
// var lastChar = userInput.slice(-1)

// document.write("User Input : " + userInput + "<br>")
// document.write("Last character of User Input : " + lastChar)

// Q18
// var text = "The quick brown fox jumps over the lazy dog";
// var updatedtext = text.split("")

// for (var i = 0; i < updatedtext.length; i++) {
//     document.write(i + "<br>")
    
// }

// CHAPTER 26-30

// Q1

// var userInput = prompt("Enter value")
// var num = Number(userInput)

// var round = Math.round(num)
// var ciel = Math.ceil(num)
// var floor = Math.floor(num)

// document.write("number: " + num + "<br>");
// document.write("round off value: " + round + "<br>");
// document.write("floor value: " + floor + "<br>");
// document.write("ceil value: " + ciel + "<br>");

// Q2

// var userInput = prompt("Enter Negative floating point")
// var num = Number(userInput)

// var round = Math.round(num)
// var ciel = Math.ceil(num)
// var floor = Math.floor(num)

// document.write("number: " + num + "<br>");
// document.write("round off value: " + round + "<br>");
// document.write("floor value: " + floor + "<br>");
// document.write("ceil value: " + ciel + "<br>");

// Q3
//  var userInput = +prompt("Enter a Number")
// var absValue = userInput * -1

//  if( userInput < 0){
//   document.write("The absolute value of " + userInput + " is " + absValue);
//  }

// Q4
// var diceValue = Math.floor(Math.random() * 6) + 1;

// document.write("random dice value: " + diceValue);

// Q5
// var diceValue = Math.floor(Math.random() * 2) + 1;

// document.write("random dice value: " + diceValue);

// Q6
// var diceValue = Math.floor(Math.random() * 100) + 1;

// document.write("random dice value: " + diceValue);

// Q7
// var userInput = prompt("Enter your weight in kilograms:");

// var weight = parseFloat(userInput);
// document.write("The weight of user is " + weight + " kilograms");

// Q8
// var userValue = +prompt("Enter a Number between 1 to 10")

// var secretNumber = Math.floor(Math.random() * 10) + 1;

// if(userValue == secretNumber){
//     alert("Contratulations")
// }