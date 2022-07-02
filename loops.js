//===========================q1========================================//


// let num=5;
// for(let i=1; i<=5; i++)(
//     console.log(i)
// )

//=========================q2============================================//


// let num=5;
// for(let i=5;i>=1; i--){
//     console.log(i);
// }

//===============================q3====================================//


// let num=5;
// for(let i=1; i<=5;i++){
//     for(j=1; j<=i; j++){

//     }
//     console.log(i,j);
// }


//====================================q4===================================//



// let num = 5;
// for(let i=1;i<=num;i++){
//     let stars='';
//     for(let j=1;j<=num;j++){
//         stars=stars+'*'
        
//     }console.log(stars);
// }


//==========================================q5==================================//

// let num = 5;
// for(let i=1;i<=num;i++){
//     let stars='';
//     for(let j=1;j<=i;j++){
//         stars=stars+'*'
//     }
//     console.log(stars);
// }

//==========================================q6===================================//

// let num = 5;
// for(let i=1;i<=num;i++){
//     let stars='';
//     for(let j=1;j<=i;j++){
//         stars=stars+j
//     }
//     console.log(stars);
// }


//==========================================q7================================//



// let num = 5;
// for(let i = num; i>=1;i--){
//     let stars="";
//     for(j=i;j<=num;j++){
//       stars=stars+j;
//     }
//     console.log(stars);
// }


//========================================q8==============================//


// let num=5;
// let stars='';
// let count=1;
// for(let i=1;i<=num;i++){
//     for (j=1;j<=i;j++){
//     stars += count;
//     count++;
//     }
//     stars +='\num'
// }
// console.log(stars);



// let num = 5;
// for(let i=1; i>=num;i--){
//     let stars='  ';
//     for(let j=num; j>=i;j--){
//         // stars=stars+i
//     }
//     console.log(stars+" ");
// }


//============================================assignment question 1 ==========================//




// let count = 0;
// for(let i=1;i<=5;i++){
//     let n='';
//     let blank=' ';
//     for(let j=1;j<=i;j++){
//         count=count+1;
//         if(count<=9){
//             blank='  '
//         }
//         n=n+count+blank
//     }console.log(n);
// }


// let num=parseInt(process.argv[2]);
// let even=0;
// while(num>0){
//     let rem= Math.floor(num%10);
//     sum=sum*10+rem;
//     // num=Math.floor(num/10);
// }
// console.log(sum)


// function evenDigits(n){
//     for(let i=1; i<=n;i++){
//       if(i%2==0){
//         return(i)
//       } 
//     }
//   }console.log(evenDigits(123456789))
 

// let num=5
// for(var i = num; i >= 1 ; i--){
//     var str = ''
//     for(var j = i; j >= 1; j--){
//        str += j
//     }
//     console.log(str)
// }


// let num=5
// for(i=5; i>=1; i--){
//     for(j=i; j<=5; j++){
//         console.log(i);
//     }
    
// }


// var i, j;
// for(i=5; i>=1; i--)
// {
//  for(j=i; j<=5; j++){

//  }
//   console.log();(j);
// }


// function pattern(n){
//   let sum = 0;
//   for(let i = n; i>=1;i--){
//     let stars="";
//     for(j=i;j<=n;j++){
//       stars=stars+j;
//       sum=sum+j
//     }
//   }console.log(stars);
// }
// // console.log(pattern(5))


// let num = 5;
// for(let i = num; i>=1;i--){
//     let stars="";
//     for(j=i;j<=num;j++){
//       stars=stars+`${j} `;
//     }
//     console.log(stars);
// }

// for(i=1; i<=5; i++)
// {
//  for(j=i; j<=5; j++)
 
//  for(k=i; k>1; k--)
//   console.log(k-1);
// } console.log(j);


// let num = 6
// for(let i = 1; i < num; i++){
//     stars='';
//     for(let j = 1; j < num; j++){
//         stars+=j
//     }
//     console.log(stars);
// }

// let num=5;
// for(let i=1;i<=num;i++){
//   let stars='';
//   for(let j=1;j<=i;j++){
//     if((i+j)%3===0){
//       stars+=1
//     }else{
//       stars+=0
//     }
//   }
//   console.log(stars)
// }


let num = 5;
count =1;
for(let i=1;i<=num;i++){
    let stars='';
    for(let j=1;j<=i;j++){
        stars+=j;
        
    }console.log(stars);
}
