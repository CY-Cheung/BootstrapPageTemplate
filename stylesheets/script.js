setInterval(()=>{
    let li = document.querySelectorAll(".card ul li");
    for(let i=0; i<li.length; i++) {
        if(screen.width < 500) {
            li[i].style["width"] = "25%";
        }
        if(screen.width >= 500 && screen.width < 800) {
            li[i].style["width"] = "20%";
        }
        if(screen.width >= 800) {
            li[i].style["width"] = "12%";
        }
    };
    let HH = document.querySelectorAll(".HeaderHeight");
    for(let i=0; i<HH.length; i++) {
        HH[i].style["height"] = document.querySelector("header").clientHeight*1.1 + "px";
    }
    let header = document.querySelector("header");
    header.innerHTML = `
        Home Page
        <div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated"></div></div>
    `
});
window.onload = function() {
    let HH = document.querySelectorAll(".HeaderHeight");
    for(let i=0; i<HH.length; i++) {
        HH[i].style["height"] = document.querySelector("header").clientHeight*1.1 + "px";
    }
    let header = document.querySelector("header");
    header.innerHTML = `
        Home Page
        <div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated"></div></div>
    `
}
