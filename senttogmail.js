const scriptURL = 'https://script.google.com/macros/s/AKfycbzhFITtBOPdVEL7mOn-n6ZRYaz4t34TxVDUDAiTXgv79QX2NjW9JM-M-12AmfvvGYhw/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Cảm ơn!Bạn Đã Đăng Ký Thành Công" ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
function emailsend(){
    var name=document.getElementById("fullname_ID").value;
    var phone=document.getElementById("dienthoai_ID").value;
    var email=document.getElementById("email_ID").value;
    var adress=document.getElementById("diachi_ID").value;
    var course=document.getElementById("khoahoc_ID").value;
    var thongtin="Xin Chào Bạn!"+"<br/>"+"Đây là thông tin email đến từ Dạy Lập Trình Từ Số 0. Bạn đã đăng ký thành công Khóa học:"+course+"<br/>";
    var xacnhan="Bạn vui lòng kiểm tra lại thông tin bên dưới. Nếu có sai sót vui lòng liên hệ SDT:0358.777.120 (Mr.Thành, Zalo)!<br/>*********************************<br/>";
    var camon="<br/>*********************************<br/> Chân Thành Cảm Ơn Bạn!<br/> <br/>Admin Website daylaptrinhtuso0"
    var body_email=thongtin+xacnhan+"Name: "+ name + "<br/> PhoneNumber: "+phone+ "<br/> Email: "+email+"<br/> Adress: "+adress+"<br/> Course: "+course+camon;
console.log(body_email);
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "adaylaptrinh@gmail.com",
        Password : "728F0891FACA5C6D6B98114B8906BD166C1A",
        To : 'adaylaptrinh@gmail.com,tranvantri2012@gmail.com'+","+email,
        From : "adaylaptrinh@gmail.com",
        Subject : "Thông Tin Đăng Ký Khóa Học",
        Body : body_email
    }).then(
      message => alert("Đã gửi Email!Nếu không nhận được->Vui lòng kiểm tra lại email trong Spam (Thử rác)")
    );
}

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




