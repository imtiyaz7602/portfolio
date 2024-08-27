let tablinks=document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
let clos=document.querySelector(".fa-times");
let opn=document.querySelector(".fa-solid");
let sidemenu=document.querySelector("#sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-230px";
}