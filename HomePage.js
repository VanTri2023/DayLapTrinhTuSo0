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
//Xử lý nút đăng ký
$("#MainForm_ID").submit(function (e) { 
    e.preventDefault();
   // alert("Bạn vừa nhấn đăng ký đó");
    //Lấy dữ liệu nhập vào từng biến
    var hoten_input =$("#fullname_ID").val();
    var sdt_input =$("#dienthoai_ID").val();
    var email_input =$("#email_ID").val();
    var diachi_input =$("#diachi_ID").val();
    var khoahoc_input =$("#khoahoc_ID").val();
    //lưu dữ liệu vào 1 đối tượng
    var nguoi_dangKy ={
        ho_ten:hoten_input,
        sdt:sdt_input,
        email:email_input,
        diachi:diachi_input,
        khoahoc:khoahoc_input
    };
    //reset gia tri tren input
    document.getElementById("fullname_ID").value="";
    document.getElementById("dienthoai_ID").value="";
    document.getElementById("email_ID").value="";
    document.getElementById("diachi_ID").value="";
    document.getElementById("khoahoc_ID").value="";
    console.log("Thông Tin Đăng Ký: ",nguoi_dangKy);
    //thong bao dang ky thanh cong
    alert("Cảm ơn bạn đã đăng ký thành công!");
    

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




