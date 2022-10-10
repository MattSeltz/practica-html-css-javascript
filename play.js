const box = document.querySelector(".box");

window.addEventListener("keydown",e => {
    if(e.key == "ArrowUp") {
        box.style.transform += "translateY(-200px)";
    }else if(e.key == "ArrowDown") {
        box.style.transform += "translateY(200px)";
    }else if(e.key == "ArrowLeft") {
        box.style.transform += "translateX(-200px)";
    }else if(e.key == "ArrowRight") {
        box.style.transform += "translateX(200px)";
    }
});

box.addEventListener("click",() => {
    open("index.html");
});