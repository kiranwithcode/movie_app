// Store the wallet amount to your local storage with key "amount"
var total = 0;
let amount_add =JSON.parse(localStorage.getItem("amount"))||[];
function addMoney(){
    
//   var cardData = JSON.parse(localStorage.getItem("cart"))||[];
    let enter_amount = document.querySelector("#amount").value;
    // let wallet = document.querySelector("#wallet").innerHTML=enter_amount;
    // console.log(enter_amount)
    data = {
        price : Number(enter_amount)
    }

    amount_add.push(data)
    localStorage.setItem("amount",JSON.stringify(amount_add))
    window.location.reload()
}

let data = JSON.parse(localStorage.getItem("amount"));
total = data.reduce(function(sum,elem,index,arr){
    return sum+elem.price;
},0)
var length = data.length;
console.log(length)
document.querySelector("#wallet").innerText=total;









   