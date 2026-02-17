// function outer(){
//     let n=1
//     function inner(){
//         return n++;
//     }
//     return inner;
// }

// const counter = outer()
// console.log(counter())
// console.log(counter())


//-----------------------------------------------


function user(){
    let password="1234"
    function checkPassword(inputpassword){
        return password===inputpassword
    }
    return checkPassword
}

const checkpassword=user()
console.log(checkpassword("1234"))