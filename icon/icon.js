setInterval(()=>{
    let icon = document.querySelectorAll(".card .icon");
    let bi = document.querySelectorAll(".card .icon i");
    for(let i=0; i<icon.length; i++) {
        bi[i].style["font-size"] = icon[i].clientHeight*2 + "%";
    };
});
