Birr",customer:"Abden


et",status:"Pending"};localStorage.s


e





tItem("newOrder",JSON.



stringify(o


rder));alert("Order sent to se


ller successfully 🚀


");}// ============


================


==



=======// SELLER ORDE

R SYSTEM// 

=====================

==



==============window.addEventListener("load",(


)






=>{let orderBox=document.getElementById(
"newOrder");if(orderBo
x){let order=JSON.parse(localStorage.get



Item("newOrder"));if(order){orderBox


.innerHTML=`🔥 New Order ReceivedProduct: ${order



.product}Cust


omer: ${order.custome

r}Price: ${order.price}${order.s

ta



tus}Accept


 OrderReject`;}}});/

/ =====================


====
============// SELLER
 AI A


SSI
STANT// =================
====


===
=============function resto
ckAI


(){
alert("🤖 AI Business
 Ana


lysis\
n\n" +"Sugar st
ock is 

low.\n" 

+"Demand increased by 30%.\n\n" 
+"Recommende
d restock


: +100 units");}function acceptO
rder()
{alert("✅


 Order

 a


c


c



ept
ed. Customer notified.");}function rejec
tOrder(){alert("❌ Orde
r rejected.");}// ======================


==========// LANGUAGE


 SYSTE

M// ===========================

=====const languageSelect

 = document.getElementById("lang

uage-select");if(languageSelect){

la


n
guageSelect.addEventLis


tener(
"change", function(){let language = th
is


.



value;if(language === "


am"){c
hangeLanguage("am")
;}


e
lse if(language === "om"){changeLan
guage("om");}else{
changeLanguage("en");}});}function 


changeLanguage(lang){const title = document.querySelector(".hero h


1");const descripti


on = document.querySelector(".description");const tag


 = document.querySelector(



".tag");const startBut

ton = document.queryS

e


lector(".primary");const se

llerButton = document

.


query

Selector(".secondary"

)



;if


(



lang==="am"){tag.innerHTML="🤖



 በ AI የሚሰራ የኢትዮጵያ ገበያ";title.innerHTML="በመርካቶ ማንኛ

ውንም ነገር በ AI ያግኙ";description.innerHTML="Mercato AI ገዢዎችን ም

ርቶችን በፍጥነት እንዲያገኙ እና ነጋዴዎችን በ AI ንግዳቸውን እንዲ

ያስተዳድሩ ይረዳል";startButton.innerHTML="መግዛት ጀምር";sellerBut

ton.innerHTML="ሻጭ ሁን";}else if(lang==="om"){tag.innerHTML=





"🤖 Gabaa Itooph


iyaa AI'n hojjetamu";title.innerHTML="Wa


an barbaadde Mer
cato keessatti AI waliin argadhu";descrip



tion.innerHTML="Mercat
o AI bittoota oomisha argachuuf fi daldaltoota hojii isaanii AI fayyadamuun


 bulchuuf gargaara";startButton.i


nnerHTML="Bituu jalqabi";seller


B




utton.innerHTML="Gurg



uraa ta'i";}else{tag.innerHTML="🤖 AI Powered Ethio


pian Marketplace
";title.innerHTML="Find Anything in Mercato with AI";description.i



nnerHTML="Mercato AI h
elps buyers discover products instantly and helps merchants manage their business using Artificial Int


elligence.";startButton.innerHTML='Sta


rt Shopping ';sellerButton.innerHTML="B


e




come 


Seller";}}asyn
c function loadProducts(){    const re


sponse = await f
etch(        "http://localhost:5000/products"   


 );    const products 
= await response.json();    console.log(products);}loadProducts();
