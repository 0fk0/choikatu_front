const btn = document.querySelector("#btn");

function send(){
    const MIN = 0;
    const MAX = 4;
    const pram = Math.floor(Math.random() * (MAX + 1 - MIN) + MIN);
    
    window.open().location.href = "result.html?" + pram;
}

btn.addEventListener("click", send);