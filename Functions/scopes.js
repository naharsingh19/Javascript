//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);  //can access username //closure
    }
     //console.log(website);  //can not access from two()

     two()

}

 one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
         //console.log(username + website);
    }
    // console.log(website); //cannot access
}

 // console.log(username); //cannot access


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))   //hoisting
                           
function addone(num){
    return num + 1
}



addTwo(5)  //error because of the expression declaration of the function
const addTwo = function(num){
    return num + 2
}