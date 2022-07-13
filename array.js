

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

function goodManager(arr){
    let newArr=arr.map(value=>value+1000);
    return newArr
  }
  console.log(goodManager([1000,2000, 3000]))
  exports.goodManager = goodManager