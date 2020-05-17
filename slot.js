let slotAll=document.querySelectorAll(".allSlot");
let images=document.querySelectorAll("img");

let pictures=[

"fruit1.png","fruit2.png","fruit3.png","fruit4.png",
"fruit5.png","fruit6.png","fruit7.png","fruit8.png",
"fruit9.png","fruit10.png"

];

let tickTock=document.querySelector(".tickTock");
let x=0;
let game;
let fresh;

let marked=[2,13,24,35];

let aG=document.querySelectorAll(".aG");
let bG=document.querySelectorAll(".bG");
let cG=document.querySelectorAll(".cG");
let dG=document.querySelectorAll(".dG");

let ai=document.querySelector(".start");

ai.addEventListener("click", startSloting);

function startSloting() {
	
this.removeEventListener("click", startSloting);

game=setInterval(translating1, 1);
fresh=setInterval(stopGame, 1000);

if(tickTock.textContent==2)  {

tickTock.textContent=0;
x=0;

 }

}

function stopSloting() {
	
clearInterval(game);
game=null;
tickTock.textContent=0;

function real1() {
	
for(let i=0; i < 11; i++) {

aG[i].style.animation="";

 }

}

setTimeout(real1,200);

function real2() {
	
for(let i=0; i < 11; i++) {

bG[i].style.animation="";

 }

}

setTimeout(real2,500);

function real3() {
	
for(let i=0; i < 11; i++) {

cG[i].style.animation="";

 }

}

setTimeout(real3,800);

function real4() {
	
for(let i=0; i < 11; i++) {

dG[i].style.animation="";

 }

}

setTimeout(real4,1000);

for(let i=0; i < marked.length; i++) {

slotAll[marked[i]].style.border="1px solid yellow";
slotAll[marked[i]].style.background="yellow";

 }

}


function translating1() {
	
for(let i=0; i < 44; i++) {

slotAll[i].style.animation="up 1s linear infinite";
images[i].src=pictures[Math.floor(Math.random()*pictures.length)];

 }

$(".fruitA").removeClass("fruitA");
$(".fruitB").removeClass("fruitB");
$(".fruitC").removeClass("fruitC");
$(".fruitD").removeClass("fruitD");
$(".fruitE").removeClass("fruitE");
$(".fruitF").removeClass("fruitF");
$(".fruitG").removeClass("fruitG");
$(".fruitH").removeClass("fruitH");
$(".fruitI").removeClass("fruitI");
$(".fruitJ").removeClass("fruitJ");
$(".fruitK").removeClass("fruitK");

}

let counting=parseInt(tickTock.textContent);
let sG=document.querySelectorAll(".sG");

let winning=document.querySelector(".winning");

function stopGame() {
	
if(tickTock.textContent==1) {

ai.addEventListener("click", startSloting);

let addRemove=parseInt(winning.textContent);

function amountSlot() {

if($(".fruitA").length==4 || $(".fruitB").length==4 || $(".fruitC").length==4
	|| $(".fruitD").length==4 || $(".fruitE").length==4 || $(".fruitF").length==4 || $(".fruitG").length==4
	|| $(".fruitH").length==4 || $(".fruitI").length==4 || $(".fruitJ").length==4 || $(".fruitK").length==4) {


winning.textContent=addRemove+amount.textContent;

   } else {


winning.textContent=addRemove-amount.textContent;

   }	

}

setTimeout(amountSlot, 1500);

stopSloting();
clearInterval(fresh);

for(let i=0; i < sG.length; i++) {

if(sG[i].getAttribute("src")==pictures[0]) {

sG[i].classList.add("fruitA");

   }

if(sG[i].getAttribute("src")==pictures[1]) {

sG[i].classList.add("fruitB");

   }

if(sG[i].getAttribute("src")==pictures[2]) {

sG[i].classList.add("fruitC");

   }

if(sG[i].getAttribute("src")==pictures[3]) {

sG[i].classList.add("fruitD");

   }

if(sG[i].getAttribute("src")==pictures[4]) {

sG[i].classList.add("fruitE");

   }

if(sG[i].getAttribute("src")==pictures[5]) {

sG[i].classList.add("fruitF");

   }

if(sG[i].getAttribute("src")==pictures[6]) {

sG[i].classList.add("fruitG");

   }

if(sG[i].getAttribute("src")==pictures[7]) {

sG[i].classList.add("fruitH");

   }

if(sG[i].getAttribute("src")==pictures[8]) {

sG[i].classList.add("fruitI");

   }

if(sG[i].getAttribute("src")==pictures[9]) {

sG[i].classList.add("fruitJ");

   }

if(sG[i].getAttribute("src")==pictures[10]) {

sG[i].classList.add("fruitK");

   }

}


 }



tickTock.textContent=counting+x;
x +=1;

}

let amount=document.querySelector(".amount");
let k10=document.querySelector(".k10");
let k50=document.querySelector(".k50");
let k100=document.querySelector(".k100");

k10.addEventListener("click", add10);
k50.addEventListener("click", add50);
k100.addEventListener("click", add100);

function add10() {

amount.textContent=10000;

}

function add50() {

amount.textContent=50000;

}

function add100() {

amount.textContent=100000;

}

