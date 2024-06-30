// for loop

for(i=1;i<=10;i++){
    console.log("Aimen the coder girl ",i)
}
// calculate sum from 1 to 5

let sum=0;
for(z=1; z<=5;z++){
    sum=sum+1;
}
console.log("sum=",sum);
console.log("loop has ended")
// calculate sum from 1 to n 

let s=0;
let n=6;
for(u=1; u<=n; u++)
    
    s=s+1;{

}
console.log("sum=" ,sum)
console.log("loop has ended")
//  do while loop

let x=1;
do{
    x++;
    console.log(x)
}
while(x<=10)
    console.log("loop ended")

// while loop

let y=1;
while(y<=10){
    console.log("the programer",y)
        y++;

}
console.log("overlaping")
  
// for-of loop 

// let str ="aimen g";
// let size=0;
// for(let i of str){
//     // console.log(i);
// console.log("string size=",size)

//     size++;
// }
// console.log("string size=",size)

//  for in loop 
let student= {
    name:"Aimen",
    cgpa:3.4,
    age:20,
};
 for (let key in student){
    console.log(key ,student[key])
 }

//  create String

let string ="apnakamkeya";
console.log(string[7]);

// template literals 
 let spstring=`tihs is a template litrals`;
 console.log(typeof spstring)

 let obj={
    item:"pen",
    price:10,
 };

  console.log("the cost of", obj.item, "is", obj.price, "rupees");
  

//   string interpolation

//    console.log(`the cost of ${obj.item} is ${obj.price} rupees`)
let output=(`the cost of ${obj.item} is ${obj.price} rupees`);
console.log(output)

let stri=`this is the template literal ${1+2+3}`
console.log(stri);

// escape character

let strings="aimen\tiqbal";

console.log(strings.length)

// STRINGS METHOD/FUNCTIONS IN JS

let str="aimen "
str= str.replace("a","D")
let str1="23"
console.log(str)
let res= str+str1 +"the coder girl";
console.log(str.toUpperCase(str))
console.log(str.toUpperCase(str))
console.log(str.trim(str))
console.log(str.slice(2,8))
// console.log(str.concat(str1))
console.log(res)
// console.log(str.replace("en","si"))
console.log(str.charAt(4))

// practice q1
// prompt user to enter their full name. generate a username for them based on the input 
// start username with @ followed by their full name and ending with the fullname length

let str2=prompt("Enter your full name with out spaces")
let str3="@"
let str4="2233"
console.log(str3.concat(str2,str4))

// task 13

// Write a program that takes a user's input and calculates the length of the input string 
// using the length property.

let str5="shardha";
console.log(str5.length)

// Create a program that prompts the user for a string and an index. Then, use the charAt()
// method to display the character at that index.


        // // Prompt the user for a string
        // let userString = prompt("Please enter a string:");

        // // Prompt the user for an index
        // let index = prompt("Please enter an index:");

        // // Convert the index to an integer
        // index = parseInt(index);

        // // Check if the index is within the valid range
        // if (index >= 0 && index < userString.length) {
        //     // Get the character at the specified index
        //     let charAtIndex = userString.charAt(index);

        //     // Display the character
        //     document.getElementById("result").textContent = "The character at index " + index + " is: " + charAtIndex;
        // } else {
        //     // Display an error message
        //     document.getElementById("result").textContent = "Invalid index. Please enter an index between 0 and " + (userString.length - 1) + ".";
        // }
   

        // Write a program that takes a string and two indices (start and end). Use the substring()
        // method to extract and display the substring between the given indices.

        let str6="shazinaz";
        
        // console.log(str6.slice(0,5))

// Take a sentence as input and split it into words using the split() method. Count and
// display the number of words in the sentence.

// console.log(str6.split[3]);
const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

// Create a program that takes a sentence and allows the user to search for a word or
// phrase and replace it with another word or phrase using the replace() method.

var str7="i am a good girl";
// console.log(str7.concat("i am pretty"))
var str7= str7.replace("i am a good girl","i am a pretty girl")
console.log(str7)

// Write a program that takes a string and a character as input. Use the indexOf() method
// to find and display the index of the first occurrence of that character in the string.

