window.onload = function(){
    let Loader = document.querySelectorAll('.loader');
    for(let i=0; i<Loader.length; i++) {
        if(Loader[i].parentElement.clientHeight < Loader[i].parentElement.clientWidth) {
            Loader[i].style["height"] = Loader[i].parentElement.clientHeight + "px";
        }
        else {
            Loader[i].style["width"] = Loader[i].parentElement.clientWidth + "px";
        }
    }
}
