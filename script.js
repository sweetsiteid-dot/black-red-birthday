/* =========================
   PIN SYSTEM
========================= */

let pin = "";

function addPin(num){

if(pin.length >= 4) return;

pin += num;

document.getElementById("pinInput").value =
"●".repeat(pin.length);

}

function clearPin(){

pin = pin.slice(0,-1);

document.getElementById("pinInput").value =
"●".repeat(pin.length);

}

function checkPin(){

if(pin === "1907"){

document.getElementById("pinScreen")
.style.display="none";

document.getElementById("website")
.classList.remove("hidden");

document.getElementById("music")
.play().catch(()=>{});

}else{

alert("Wrong PIN ❤️");

pin="";

document.getElementById("pinInput")
.value="";

}

}

function openHeart(){

document.getElementById("bottleSection")
.classList.remove("hidden");

document.getElementById("bottleSection")
.scrollIntoView({
behavior:"smooth"
});

}

/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML =
["❤️","🖤","✨"][
Math.floor(Math.random()*3)
];

heart.style.position="fixed";

heart.style.left =
Math.random()*100 + "vw";

heart.style.top="-30px";

heart.style.fontSize =
(Math.random()*20+15)+"px";

heart.style.opacity=".8";

heart.style.pointerEvents="none";

heart.style.animation =
`fall ${Math.random()*4+6}s linear`;

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,700);

const style =
document.createElement("style");

style.innerHTML = `

@keyframes fall{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(120vh);
opacity:0;
}

}

@keyframes flowerBurst{

0%{
opacity:1;
transform:
translate(0,0)
scale(.5);
}

100%{
opacity:0;
transform:
translate(var(--x),var(--y))
scale(1.5)
rotate(360deg);
}

}

`;

document.head.appendChild(style);

/* =========================
   BOTTLE BREAK
========================= */

let bottleOpened = false;

function breakBottle(){

if(bottleOpened) return;

bottleOpened = true;

const bottle =
document.getElementById("bottle");

bottle.innerHTML = "💥";

createFlowerBurst();

setTimeout(()=>{

bottle.style.display="none";

document.getElementById(
"letterContainer"
).style.display="block";

typeLetter();

},1500);

}

function createFlowerBurst(){

const flowers =
document.getElementById("flowers");

const emojis = [
"❤️",
"🖤",
"✨",
"⭐"
];

for(let i=0;i<18;i++){

const flower =
document.createElement("div");

flower.innerHTML =
emojis[
Math.floor(
Math.random()*emojis.length
)
];

flower.style.position =
"absolute";

flower.style.left = "0px";
flower.style.top = "0px";

flower.style.fontSize =
(Math.random()*10+20)+"px";

flower.style.setProperty(
"--x",
(Math.random()*700-350)+"px"
);

flower.style.setProperty(
"--y",
(-Math.random()*450-50)+"px"
);

flower.style.animation =
"flowerBurst 2.5s forwards";

flower.style.willChange =
"transform, opacity";

flowers.appendChild(flower);

setTimeout(()=>{
flower.remove();
},2500);

}

}

/* =========================
   LETTER
========================= */

const message = `

Happy Birthday, Ibra.

Another year older.

Another year stronger.

Today is your day,
and I hope you know
how appreciated you are.

Thank you for all the memories,
all the laughter,
and all the moments
that made life more fun.

Not everyone gets lucky enough
to meet people who leave
a positive mark on their life.

I'm grateful that
you're one of those people.

`;

const message2 = `

I hope this year brings you
good health,
peace of mind,
and success in everything
you work hard for.

May every dream you have
slowly become reality.

May every obstacle
make you stronger.

And may happiness always
find its way back to you.

Never stop believing
in yourself.

You are capable of
more than you think.

`;

const message3 = `

Keep moving forward.

Keep growing.

Keep becoming
the best version of yourself.

No matter where life takes you,

I will always wish
the very best for you.

Happy Birthday once again.

May this be your
best year yet.

❤️

- Peter

`;

function typeLetter(){

const target =
document.getElementById("letterText");

target.innerHTML="";

const fullMessage =
message +
message2 +
message3;

let i = 0;

const typing =
setInterval(()=>{

target.innerHTML +=
fullMessage.charAt(i);

i++;

if(i >= fullMessage.length){

clearInterval(typing);

}

},5);

}

/* =========================
   QUIZ
========================= */

let currentQuestion = 0;

const questions =
document.querySelectorAll(".question");

function checkAnswer(button,correct){

if(!correct){

alert("Try Again ❤️");
return;

}

questions[currentQuestion]
.classList.remove("active");

currentQuestion++;

if(currentQuestion < questions.length){

questions[currentQuestion]
.classList.add("active");

}else{

document.getElementById("quizSuccess")
.classList.remove("hidden");

createConfetti();

document.getElementById("quizSuccess")
.scrollIntoView({
behavior:"smooth"
});

}

}

/* =========================
   SPECIAL PHOTO EFFECT
========================= */

function createConfetti(){

for(let i=0;i<80;i++){

const confetti =
document.createElement("div");

confetti.innerHTML =
["❤️","🖤","✨","⭐"][
Math.floor(Math.random()*4)
];

confetti.style.position =
"fixed";

confetti.style.left =
Math.random()*100 + "vw";

confetti.style.top =
"-20px";

confetti.style.fontSize =
(Math.random()*20+15)+"px";

confetti.style.animation =
`fall ${Math.random()*3+3}s linear`;

confetti.style.pointerEvents =
"none";

document.body.appendChild(
confetti
);

setTimeout(()=>{

confetti.remove();

},6000);

}

}
