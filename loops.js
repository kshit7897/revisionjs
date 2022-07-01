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
//         stars=stars+'* '
//     }
//     console.log(stars);
// }


//==========================================q7================================//



// let num = 5;
// for(let i=num; i>=1;i--){
//     let stars='';
//     for(let j=1; j<=i;j++){
//         stars=stars+'* '
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
// for(let i=num; i>=1;i--){
//     let stars='  ';
//     for(let j=1; j<=i;j++){
//         stars=stars+'* '
//     }
//     console.log(stars);
// }


//============================================assignment question 1 ==========================//




let count = 0;
for(let i=1;i<=5;i++){
    let n='';
    let blank=' ';
    for(let j=1;j<=i;j++){
        count=count+1;
        if(count<=9){
            blank='  '
        }
        n=n+count+blank
    }console.log(n);
}





