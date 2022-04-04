setInterval(()=>{
    let button = document.querySelectorAll("button");
    for(let i=0; i<button.length; i++) {
        button[i].style["font-size"] = button[i].clientHeight/3 + "px";
    };
});