
function menuOpen (){
    let header = document.querySelector(".header");
    let btn = document.querySelector(".btn-content"); 
    let close = document.querySelector(".close")

    header.style.visibility="visible";
    close.style.visibility="visible";
    btn.style.visibility="hidden";
}
function menuClose (){
    let header = document.querySelector(".header");
    let btn = document.querySelector(".btn-content"); 
    let close = document.querySelector(".close")

    header.style.visibility="hidden";
    close.style.visibility="hidden";
    btn.style.visibility="visible";
}
function tab1(){
    let txt1 = document.getElementById("txt1");
    let text = document.getElementsByClassName("text-container");
    let img = document.getElementById("cat-img");

    for (let i = 0; i < text.length; i++) {
        text[i].style.display = "none";
    }
    txt1.style.display="block";
    img.src="cat12.png";
}
function tab2(){
    let txt2 = document.getElementById("txt2");
    let text = document.getElementsByClassName("text-container");
    let img = document.getElementById("cat-img");

    for (let i = 0; i < text.length; i++) {
        text[i].style.display = "none";
    }
    txt2.style.display="block";
    img.src="cat31.png";
}
function tab3(){
    let txt3 = document.getElementById("txt3");
    let text = document.getElementsByClassName("text-container");
    let img = document.getElementById("cat-img");

    for (let i = 0; i < text.length; i++) {
        text[i].style.display = "none";
    }
    txt3.style.display="block";
    img.src="cat21.png";
}
function tab4(){
    let txt4 = document.getElementById("txt4");
    let text = document.getElementsByClassName("text-container");
    let img = document.getElementById("cat-img");

    for (let i = 0; i < text.length; i++) {
        text[i].style.display = "none";
    }
    txt4.style.display="block";
    img.src="cat41.png";
}