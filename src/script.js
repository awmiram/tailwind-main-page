let navicon = document.getElementById("menu-button"); //naveicon
let navcontent = document.getElementById("nav-content"); //navmenu
navicon.addEventListener("click", (event)=>{
    navcontent.classList.toggle("hidden");
})
