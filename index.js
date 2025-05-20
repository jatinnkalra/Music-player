const play = document.querySelector(".fa-play");
const audioplaying = document.querySelector("#myAudio");
const pause = document.querySelector(".fa-pause");
const playingimg = document.querySelector(".playingimg");
playingimg.hidden = true;
audioplaying.src = "Cielo - Huma-Huma.mp3";
play.addEventListener("click" , ()=>{
    playingimg.hidden=false;
     audioplaying.play();
})

pause.addEventListener("click" , ()=>{
    audioplaying.pause();
    playingimg.hidden=true;
})



const song1 = document.querySelector(".song1")

song1.addEventListener("click" , ()=>{
    audioplaying.src= song1.textContent+".mp3";
    audioplaying.play();
    playingimg.hidden=false;
})


const song2 = document.querySelector(".song2")

song2.addEventListener("click" , ()=>{
    audioplaying.src= song2.textContent+".mp3";
    audioplaying.play();
    playingimg.hidden=false;
})


const song3 = document.querySelector(".song3")

song3.addEventListener("click" , ()=>{
    audioplaying.src= song3.textContent+".mp3";
    audioplaying.play();
    playingimg.hidden=false;
})


const song4 = document.querySelector(".song4")

song4.addEventListener("click" , ()=>{
    audioplaying.src= song4.textContent+".mp3";
    audioplaying.play();
    playingimg.hidden=false;
})

const song5 = document.querySelector(".song5")

song5.addEventListener("click" , ()=>{
    audioplaying.src= song5.textContent+".mp3";
    audioplaying.play();
    playingimg.hidden=false;
})

// const song6 = document.querySelector(".song6")

// song6.addEventListener("click" , ()=>{
//     audioplaying.src= song6.textContent+".mp3";
//     audioplaying.play();
//     playingimg.hidden=false;
// })