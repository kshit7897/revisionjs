

//===============================array parctice==============================//

// let treatment = ['qswitch', 'fractional', 'peeling'];
// console.log(treatment.length);

// let treatment = ['qswitch', 'fractional', 'peeling'];
// console.log(treatment[0]);

// let treatment = ['qswitch', 'fractional', 'peeling'];
// console.log(treatment[1]);

// let treatment = ['qswitch', 'fractional', 'peeling'];
// console.log(treatment[2]);



// let rajuDatail = {
//   name : 'raju',
//   age : '25',
//   locatioan : 'bardoli',
//   status : "singal ready to mingal",
//   futurewife : {
//     name : 'manju',
//     age : '25',
//     location : 'navsari'
//   }
// }
// console.log(rajuDatail);



// let elements = ['Bike', 'Scooter', 'Car', 'Truck', 'JCB' , 'Helicopter'];
// console.log(elements[4])

// function isDuplicate(arr){
//     let str=[];
//       for(let i=0;i<arr.length;i++){
//         let element=arr[i];
//         if(str.indexOf(element)!==-1){
//           return true;
//         }
//         str.push(element);
//       }
//       return false
//     }
//     console.log(isDuplicate([1, 2, 3, 3, 5]))
//     exports.isDuplicate = isDuplicate

// function goodManager(arr){
//     let newArr=arr.map(value=>value+1000);
//     return newArr
//   }
//   console.log(goodManager([1000,2000, 3000]))
//   exports.goodManager = goodManager


// function order(menu){
//   for(let i=0;i<menu.length;i++){
//     if(menu[i].includes('Paneer') &&! menu[i].includes('Rice')){
//       console.log(menu[i]) 
//     }
//   }
// }
// console.log(order(['panner Fried Rice','CheckenBiryani','Paneer Paratha','Cold Coffee']))





// function binary_search(arr){
//   for(let i=0;i<=arr.length;i++){
//     if(arr[i+1] && arr[i+1]>=arr[i]){
      
//     } else if(arr[i+1] && arr[i+1]<=arr[i]){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(binary_search([1, 5, 7, 8]))
// exports.binary_search = binary_search



// function isArray(arr1, arr2){
//   if(arr1.length !== arr2.length) return false;
//   for(let i=0;i<arr1.length;i++){
//     if(arr1[i]==arr2[i])return true;
//   }
//   return false;
// }
// console.log(isArray([1, 5, 7, 8],[5, 8, 7, 1]))
// exports.isArray = isArray




function find_min_max(arr){
  let maximum=arr.indexOf(Math.max(...arr))+1;
  let minimum=arr.indexOf(Math.min(...arr))+1;
  return [maximum,minimum]
}
console.log(find_min_max([2,5,7,4,1]))
exports.find_min_max = find_min_max