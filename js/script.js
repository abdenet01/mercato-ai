// =====================================
// MERCATO AI JAVASCRIPT
// =====================================


// =====================================
// LANDING PAGE
// =====================================


// Navbar scroll effect

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (navbar && window.scrollY > 50) {

        navbar.style.background = "rgba(255,255,255,0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";

    } else if (navbar) {

        navbar.style.background = "rgba(255,255,255,0.8)";
        navbar.style.boxShadow = "none";

    }

});



// Buttons

const startButton = document.querySelector(".start-btn");
const primaryButton = document.querySelector(".primary");
const sellerButton = document.querySelector(".secondary");



if (startButton) {

    startButton.onclick = () => {
        alert("Welcome to Mercato AI 🚀");
    };

}



if (primaryButton) {

    primaryButton.onclick = () => {
        goBuyer();
    };

}



if (sellerButton) {

    sellerButton.onclick = () => {
        goSeller();
    };

}




// AI typing effect

const aiText = document.querySelector(".ai");


const message =
    "I found 5 nearby sellers. Best price: 38,500 Birr";


let index = 0;


function typingEffect() {

    if (aiText && index < message.length) {

        aiText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typingEffect, 50);

    }

}



window.addEventListener("load", () => {

    if (aiText) {

        aiText.innerHTML = "";
        typingEffect();

    }

});





// =====================================
// PAGE NAVIGATION
// =====================================


function goBuyer() {

    window.location.href = "buyer.html";

}


function goSeller() {

    window.location.href = "seller.html";

}


function goLogin() {

    window.location.href = "login.html";

}


function goRegister() {

    window.location.href = "register.html";

}





// =====================================
// REGISTER SYSTEM
// =====================================


let selectedRole = "Buyer";



function selectRole(element) {


    let roles = document.querySelectorAll(".role");


    roles.forEach(role => {

        role.classList.remove("active");

    });


    element.classList.add("active");


    selectedRole =
        element.querySelector("h3").innerText;


    localStorage.setItem(
        "userRole",
        selectedRole
    );


}




function registerUser() {


    localStorage.setItem(
        "userRole",
        selectedRole
    );


    alert("Account created successfully 🚀");


    window.location.href = "login.html";


}





// =====================================
// LOGIN SYSTEM
// =====================================


function loginUser() {


    let role = localStorage.getItem("userRole");


    alert("Login successful 🚀");



    if (role === "Seller") {


        window.location.href = "seller.html";


    } else {


        window.location.href = "buyer.html";


    }


}





// =====================================
// AI CHAT
// =====================================


function openChat() {


    let chat = document.getElementById("chatBox");


    if (chat) {

        chat.style.display = "block";

    }

}



function closeChat() {


    let chat = document.getElementById("chatBox");


    if (chat) {

        chat.style.display = "none";

    }

}





// =====================================
// BUYER AI SEARCH
// =====================================


function searchAI() {


    let input = document.getElementById("aiInput");

    let result = document.getElementById("aiResult");



    if (!input || !result) {

        return;

    }



    if (input.value === "") {

        alert("Please enter what you need");

        return;

    }



    result.style.display = "block";


    result.innerHTML =
    `
    🤖 AI is analyzing market data...
    <br>
    Searching sellers near you...
    `;



    setTimeout(() => {


        result.innerHTML =
        `
        🤖 AI Recommendation
        
        <br><br>

        📱 Samsung Galaxy S21+
        <br>
        Seller: Abebe Electronics
        <br>
        Location: Mercato
        <br>
        Price: 38,500 Birr
        
        <br><br>

        📱 Samsung Galaxy S22
        <br>
        Seller: Tech Market
        <br>
        Location: Addis Ababa
        <br>
        Price: 42,000 Birr
        
        `;


    },2000);


}





// =====================================
// PRODUCT SYSTEM
// =====================================


function openProduct() {

    window.location.href = "product.html";

}



function buyProduct() {


    let order = {

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


    let orderBox =
    document.getElementById("newOrder");



    if(orderBox){


        let order =
        JSON.parse(
            localStorage.getItem("newOrder")
        );



        if(order){


            orderBox.innerHTML =
            `
            🔥 New Order Received
            
            <br><br>

            Product:
            ${order.product}

            <br>

            Customer:
            ${order.customer}

            <br>

            Price:
            ${order.price}

            <br>

            Status:
            ${order.status}

            <br><br>

            <button onclick="acceptOrder()">
            Accept Order
            </button>

            <button onclick="rejectOrder()">
            Reject
            </button>
            
            `;


        }


    }


});





// =====================================
// SELLER AI ASSISTANT
// =====================================


function restockAI(){


alert(
`
🤖 AI Business Analysis

Sugar stock is low.

Demand increased by 30%.

Recommended restock:
+100 units
`
);


}



function acceptOrder(){

    alert("✅ Order accepted. Customer notified.");

}



function rejectOrder(){

    alert("❌ Order rejected.");

}





// =====================================
// LANGUAGE SYSTEM
// =====================================


const languageSelect =
document.getElementById("language-select");



if(languageSelect){


languageSelect.addEventListener(
"change",
function(){


let language=this.value;


changeLanguage(language);


});


}




function changeLanguage(lang){



const title =
document.querySelector(".hero h1");


const description =
document.querySelector(".description");


const tag =
document.querySelector(".tag");



const startButton =
document.querySelector(".primary");


const sellerButton =
document.querySelector(".secondary");




if(lang==="am"){



tag.innerHTML =
"🤖 በ AI የሚሰራ የኢትዮጵያ ገበያ";


title.innerHTML =
"በመርካቶ ማንኛውንም ነገር በ AI ያግኙ";


description.innerHTML =
"Mercato AI ገዢዎችን ምርቶችን በፍጥነት እንዲያገኙ እና ነጋዴዎችን AI በመጠቀም ንግዳቸውን እንዲያስተዳድሩ ይረዳል";


startButton.innerHTML =
"መግዛት ጀምር";


sellerButton.innerHTML =
"ሻጭ ሁን";



}



else if(lang==="om"){



tag.innerHTML =
"🤖 Gabaa Itoophiyaa AI'n hojjetamu";


title.innerHTML =
"Waan barbaadde Mercato keessatti AI waliin argadhu";


description.innerHTML =
"Mercato AI bittoota oomisha argachuuf fi daldaltoota hojii isaanii AI fayyadamuun bulchuuf gargaara";


startButton.innerHTML =
"Bituu jalqabi";


sellerButton.innerHTML =
"Gurguraa ta'i";



}



else {



tag.innerHTML =
"🤖 AI Powered Ethiopian Marketplace";


title.innerHTML =
"Find Anything in Mercato with AI";


description.innerHTML =
"Mercato AI helps buyers discover products instantly and helps merchants manage their business using Artificial Intelligence.";


startButton.innerHTML =
"Start Shopping";


sellerButton.innerHTML =
"Become Seller";


}


}





// =====================================
// BACKEND PRODUCT API
// =====================================


async function loadProducts() {

    try {

        const response = await fetch("http://localhost:5000/products");
        const products = await response.json();

        const container = document.getElementById("productContainer");

        if (!container) return;

        container.innerHTML = "";

        products.forEach(product => {

            container.innerHTML += `
                <div class="product-card">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <button onclick="buyProduct('${product.name}','${product.price}')">
                        Buy Now
                    </button>
                </div>
            `;

        });

    } catch (error) {

        console.log(error);

    }

}

loadProducts();