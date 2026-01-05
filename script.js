const heartbeat = document.getElementById("heartbeat");
const birthdayMusic = document.getElementById("birthdayMusic");

window.addEventListener("click",()=>{
heartbeat.volume=0.25;
birthdayMusic.volume=0.3;
heartbeat.play();
birthdayMusic.play();
},{once:true});

// Reel autoplay
const videos=document.querySelectorAll("video");
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.play();
}else{
entry.target.pause();
}
});
},{threshold:0.6});

videos.forEach(v=>observer.observe(v));

// Final typing
const text="Suraiya, May every moment of your life be filled with smiles and happiness. You are the precious soul in my life, and every memory with you will forever remain in my heart. My prayer for you is that joy, peace, and love never leave your side. May today be as special for you as you are to me. ❤️";
let i=0;
function typeText(){
if(i<text.length){
document.getElementById("finalText").innerHTML+=text.charAt(i);
i++;
setTimeout(typeText,80);
}
}
window.addEventListener("scroll",()=>{
const f=document.querySelector(".final").getBoundingClientRect();
if(f.top<window.innerHeight-100){
typeText();
}
});
