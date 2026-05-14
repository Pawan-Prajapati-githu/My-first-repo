// let arr=[1,2,3,4,5];
// let rotate=(k)=>{
//   let last=0;
//   for(let i=1;i<=k;i++){
//     last = arr.pop();
//     arr.unshift(last);
//   }
//   return arr;
// }
// console.log(rotate(2));

// 1. 🔢 Two Sum
// Given an array and a target number, return the indices of two numbers that add up to the target.
// Js
// 2. 🔁 Find the Missing Number
// Given an array of n numbers from 0 to n with one missing, find the missing one.
// Js
// 3. 📦 Valid Parentheses
// Given a string of brackets, check if they are properly opened and closed. (Uses a Stack)
// Js
// 4. 🔍 Find All Duplicates
// Return an array of all elements that appear more than once.
// Js
// 5. 🔢 Fibonacci Sequence
// Return the nth Fibonacci number. Try both a loop and recursion!

//solution 1;
// let arr =[1,2,3,4,5,6];
// let target=6;
// let result=[];
// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]+arr[j]===target){
//       result.push({i,j});
      
//     }
//   }
// }
// console.log(result);

//solution 2;

// let findTheMissing=(arr)=>{
//   let result=[];
//   for(let i=0;i<arr.length;i++){
//     if(!arr.includes(arr[i]+1)){
//       result.push(arr[i]+1);
//     }
//   }
//   return result;
// }
// console.log(findTheMissing([0, 2, 1, 3, 4, 5]));

//solution 3;

// let validParentheses=(str)=>{
  
// }

//solution 4 

// let findDuplicate=(arr)=>{
//   let duplicate =[];
//   for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]===arr[j])
//       if(!duplicate.includes(arr[i])) {
//         duplicate.push(arr[i]);
//       }

//   }
// }
//or

// let findDuplicate=(arr)=>{
//   let seen=new Set();
//   let duplicate=new Set();
//   for(let value of arr){
//     if(seen.has(value))duplicate.add(value);
//     else seen.add(value);
//   }
//   return [...duplicate];
// }
// console.log(findDuplicate([1,2,3,4,5,1,2]))

// solution 5;

// let nextFibonaccinumber=(arr)=>{
//   for(let i=2;i<arr.length;i++){
//     if(!arr[i]===arr[i-1]+arr[i-2]){
//         return "Given data is not Fibonacci"
//       }

    
//   }
//         arr.push(arr[arr.length-1]+arr[arr.length-2]);
//         return arr;
// }
// console.log(nextFibonaccinumber([0,1,1,2,3,5,8]))
//and

// let findNthfibonacci=(n)=>{
//   let arr=[0,1];
  
//   switch(n){
//     case 1:
//     return 0;
//     break;
//     case 2:
//     return 1;
//     break
//     default:
//     for(let i=3;i<=n;i++){
//       arr.push(arr[arr.length-1]+arr[arr.length-2]);
//     }
//     return arr.pop();
    
//   }
// }
// console.log(findNthfibonacci(10));

