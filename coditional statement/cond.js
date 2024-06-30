// if else statment

// let color;
// let mode="light";
// if (mode === "dark") {
//   color = "black";
// }
// else{
//   color="white"
// }
// console.log(color);


// let age=27;
// if(age<26){
//   console.log(age)
// }
// else{
//   console.log("age is not valid")
// }

// odd or even

// let num=12;

// if(num%2===0)
// {
//   console.log("even")
// }
// else{
//   console.log("odd")
  
// }

// else if statment

// let mode="light";
// let color;
// if (mode==="dark"){
//   color = "black";
// }
// else if(mode==="blue"){
//   color = "blue";
// }
//  else if(mode==="pink"){
//   color = "pink";
// }
// else{
//   color="white";
// }
// console.log(color);

// let age=16;
// if(age<18){
//   console.log("junior");
// }
// else if(age>60)
//   {
//     console.log("elder");
//   }
//   else{
//     console.log("middle")
//   }

// turnery operator

// let age=16;
// let result = age<18?"adult":"not adult";
// console.log(result)

// promet command

// let num = prompt("enter a number:");
 
// if(num%5===0){
//   console.log(num, "is multiple of 5")
// }else{
//   console.log(num,"is NOT a multiple of 5")
// }

// switch statment

// let day =6;
// switch(day){
//   case 0:
//     console.log("saturday");
//     break;
//     case 1:
//     console.log("sunday");
//     break;
//     case 2:
//     console.log("monday");
//     break;
//     case 3:
//     console.log("tuesday");
//     break;
//     case 4:
//     console.log("wednesday");
//     break;
//     case 5:
//     console.log("thursday");
//     break;
//     case 6:
//     console.log("friday");
//     break;
//     default:
//       console.log("invalid day")
//       break;
// }

// let month =6;
// switch(month){
//   case 1:
//     console.log("january");
//     break;
//     case 2:
//     console.log("febrauray");
//     break;
//     case 3:
//     console.log("march");
//     break;
//     case 4:
//     console.log("april");
//     break;
//     case 5:
    // console.log("may");
    // break;
    // case 6:
    // console.log("june");
    // break;
    // case 7:
    // console.log("july");
    // break;
    // case 8:
    //   console.log("august");
    //   break; 
    //   case 9:
    //   console.log("september");
    //   break;
    //    case 10:
    //   console.log("october");
    //   break;
    //    case  11:
    //   console.log("november");
    //   break;
    //   case  12:
    //   console.log("december");
    //   break;
    // default:
//       console.log("invalid day")
//       break;
// }

// let Name= prompt("hello");
// console.log(Name)

// write a code which can give grades to students according to their scores

let score = 61;
let grade;
if (score>=80){
     grade= "A";
  }
  else if(score>=70){
    grade = "B";
   }
    else if(score>=60){
     grade = "C";
   }
   else if(score>=50){
     grade="D";}
     else if(score>=0){
        grade="F"}
      else{
      "invelid data"
      }
  
  //  console.log(grade)
   console.log("Score: " + score + ", Grade: " + grade);