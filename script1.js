const candleBtn = document.getElementById('candleBtn');
const cutBtn = document.getElementById('cutBtn');
const giftBtn = document.getElementById('giftBtn');
const candle = document.getElementById('candle');
const cake = document.querySelector('.cake');

let candleLit = false;
let cakeCut = false;

// 🍰 Step 1: Light Candle
candleBtn.addEventListener('click', ()=>{
    if(!candleLit){
        candle.querySelector('.flame').style.background = 'orange';
        candle.querySelector('.flame').style.display = 'block';
        candleLit = true;
        candleBtn.classList.add('vanish');
        setTimeout(()=>{candleBtn.style.display='none'; cutBtn.style.transform='translateY(-50px)';},500);
    }
});

// 🍰 Step 2: Cut Cake
cutBtn.addEventListener('click', ()=>{
    if(!cakeCut){
        cake.style.transform = 'rotateX(-20deg) rotateY(20deg)'; // 3D cut illusion
        cakeCut = true;
        cutBtn.classList.add('vanish');
        setTimeout(()=>{cutBtn.style.display='none'; giftBtn.style.transform='translateY(-50px)';},500);
    }
});

// 🍰 Step 3: Open Gift
giftBtn.addEventListener('click', ()=>{
    // place holder link, তুমি এখানে অন্য site link দিতে পারবে
    window.location.href = "https://your-gift-link.com";
});
