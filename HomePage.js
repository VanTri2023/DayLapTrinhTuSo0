const btup=document.querySelector(".bt_up");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
        btup.classList.add("active");
    }else{
        btup.classList.remove("active");
    }
})
$(document).ready(function(){
    /*alert("ok");*/
   $(window).scroll(function () { 
       if($(this).scrollTop()){
          /* $('header').addClass('sticky');*/
        $('header').addClass('sticky');
       }  else
       {
           $('header').removeClass('sticky');
       } 
   });
});
function handelIntoLKG() {
    window.open("LICHKHAIGIANG.html","_selt");
 }
 function handelIntoDKKH() {
    window.open("DANGKY.html","_selt");
 }
 function handelIntoLH() {
    window.open("LIENHE.html","_selt");
 }
 
 //sildebar close js code

$(".navbar .bx-menu").click(function (e) { 
    e.preventDefault();
    document.querySelector(".navigation").style.left="0";      
});
$(".navbar .x-bar").click(function (e) { 
    e.preventDefault();
    document.querySelector(".navigation").style.left="-100%";      
});

// js code arrow click

//js code for gt-arrow
$(".gt-arrow").click(function (e) { 
    e.preventDefault();
    document.querySelector(".navigation").classList.toggle("show1");
});
//js code for khlt-arrow
$(".khlt-arrow").click(function (e) { 
    e.preventDefault();
    document.querySelector(".navigation").classList.toggle("show2");
});
//js code for tl-arrow
$(".tl-arrow").click(function (e) { 
    e.preventDefault();
    document.querySelector(".navigation").classList.toggle("show3");
});




