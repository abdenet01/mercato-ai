// =====================================
// MERCATO AI JAVASCRIPT
// =====================================



// =====================================
// LANDING PAGE
// =====================================


// Navbar scroll effect

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{

    if(navbar && window.scrollY > 50){

        navbar.style.background="rgba(255,255,255,0.95)";
        navbar.style.boxShadow="0 10px 30px rgba(0,0,0,0.12)";

    }

    else if(navbar){

        navbar.style.background="rgba(255,255,255,0.8)";
        navbar.style.boxShadow="none";

    }

});



// Buttons

const startButton = document.querySelector(".start-btn");
const primaryButton = document.querySelector(".primary");
const sellerButton = document.querySelector(".secondary");



if(startButton){

startButton.onclick=()=>{

alert("Welcome to Mercato AI 🚀");

}

}



if(primaryButton){

primaryButton.onclick=()=>{

goBuyer();

}

}



if(sellerButton){

sellerButton.onclick=()=>{

goSeller();

}

}




// AI typing effect

const aiText = document.querySelector(".ai");


const message =
"I found 5 nearby sellers. Best price: 38,500 Birr";


let index=0;


function typingEffect(){

if(aiText && index < message.length){

aiText.innerHTML += message.charAt(index);

index++;

setTimeout(typingEffect,50);

}

}



window.addEventListener("load",()=>{

if(aiText){

aiText.innerHTML="";

typingEffect();

}

});





// =====================================
// PAGE NAVIGATION
// =====================================



function goBuyer(){

window.location.href="buyer.html";

}



function goSeller(){

window.location.href="seller.html";

}



function goLogin(){

window.location.href="login.html";

}



function goRegister(){

window.location.href="register.html";

}





// =====================================
// REGISTER SYSTEM
// =====================================



let selectedRole="Buyer";



function selectRole(element){


let roles=document.querySelectorAll(".role");


roles.forEach(role=>{

role.classList.remove("active");

});


element.classList.add("active");



selectedRole = element.querySelector("h3").innerText;



localStorage.setItem(
"userRole",
selectedRole
);


}




function registerUser(){


localStorage.setItem(
"userRole",
selectedRole
);


alert("Account created successfully 🚀");


window.location.href="login.html";


}





// =====================================
// LOGIN SYSTEM
// =====================================



function loginUser(){


let role = localStorage.getItem("userRole");


alert("Login successful 🚀");



if(role==="Seller"){


window.location.href="seller.html";


}

else{


window.location.href="buyer.html";


}


}





// =====================================
// AI CHAT
// =====================================



function openChat(){


let chat=document.getElementById("chatBox");


if(chat){

chat.style.display="block";

}

}



function closeChat(){


let chat=document.getElementById("chatBox");


if(chat){

chat.style.display="none";

}

}





// =====================================
// BUYER AI SEARCH
// =====================================



function searchAI(){



let input=document.getElementById("aiInput");


let result=document.getElementById("aiResult");



if(!input || !result){

return;

}



if(input.value===""){


alert("Please enter what you need");


return;


}



result.style.display="block";


result.innerHTML=`

<h3>
🤖 AI is analyzing market data...
</h3>

<p>
Searching sellers near you...
</p>

`;



setTimeout(()=>{


result.innerHTML=`

<h3>
🤖 AI Recommendation
</h3>


<div class="ai-product">

<strong>
Samsung Galaxy S21+
</strong>

<br>

Abebe Electronics 📍 Mercato

<br>

38,500 Birr

</div>


<div class="ai-product">

<strong>
Samsung Galaxy S22
</strong>

<br>

Tech Market 📍 Addis Ababa

<br>

42,000 Birr

</div>


`;


},2000);



}





// =====================================
// PRODUCT SYSTEM
// =====================================



function openProduct(){


window.location.href="product.html";


}





function buyProduct(){



let order={


product:"Samsung Galaxy S21+",


price:"38,500 Birr",


customer:"Abdenet",


status:"Pending"


};



localStorage.setItem(

"newOrder",

JSON.stringify(order)

);



alert("Order sent to seller successfully 🚀");


}






// =====================================
// SELLER ORDER SYSTEM
// =====================================



window.addEventListener("load",()=>{


let orderBox=document.getElementById("newOrder");



if(orderBox){


let order=JSON.parse(

localStorage.getItem("newOrder")

);



if(order){


orderBox.innerHTML=`

<div class="new-order">


<h3>
🔥 New Order Received
</h3>


<p>
Product: ${order.product}
</p>


<p>
Customer: ${order.customer}
</p>


<p>
Price: ${order.price}
</p>


<span>
${order.status}
</span>

<br><br>

<button onclick="acceptOrder()">
Accept Order
</button>


<button onclick="rejectOrder()">
Reject
</button>


</div>

`;


}


}



});
// =====================================
// SELLER AI ASSISTANT
// =====================================


function restockAI(){


alert(

"🤖 AI Business Analysis\n\n" +

"Sugar stock is low.\n" +

"Demand increased by 30%.\n\n" +

"Recommended restock: +100 units"

);


}
function acceptOrder(){


alert(
"✅ Order accepted. Customer notified."
);


}



function rejectOrder(){


alert(
"❌ Order rejected."
);


}