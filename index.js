var  popupoverlay=document.querySelector(".overlay")
var popupbox = document.querySelector(".popupbox")
var button= document.getElementById("add-content")
var sound1=new Audio();
button.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block";
    sound1.src="./img/WhatsApp Audio 2025-03-26 at 7.19.01 PM.mpeg";
})

var tamil=document.getElementById("cancle")
tamil.addEventListener("click",function(){
    popupbox.style.display="none"
    popupoverlay.style.display="none";
})
