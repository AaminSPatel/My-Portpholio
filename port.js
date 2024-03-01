$("document").ready(function(){
  document.documentElement.style.setProperty('--col1', "#14213d");
  document.documentElement.style.setProperty('--colw1', "#14213d");
  document.documentElement.style.setProperty('--colh1', "#2a325a");
  document.documentElement.style.setProperty('--cols1', "#14213d");
  document.documentElement.style.setProperty('--cols12', "#14213d");
  document.documentElement.style.setProperty('--s2', "#14213d");
  document.documentElement.style.setProperty('--s3', "#14213d");
  document.documentElement.style.setProperty('--s4', "#14213d");
  document.documentElement.style.setProperty('--s5', "#14203d");
  document.documentElement.style.setProperty('--s6', "#14213d");
  document.documentElement.style.setProperty('--c2', "#f48a60");
  document.documentElement.style.setProperty('--s7', "#14213d");
  document.documentElement.style.setProperty('--fot', "#14253e");
})

$("#cont").hide();
function qqq() {
  // var w= $("body").innerWidth();
  $("#www").addClass("wcc");
  $("#rre").addClass("wee");
  $(".logon").addClass("lof");
  $(".list-logo").addClass("listi");
  $("#he").addClass("ha");
  $("#job").show();
  $("#sidc").addClass("btnpo");
  $("#sidc").removeClass("btnpo1");
  $(".imgii").addClass("imgi");
  $("#sidc").attr("onclick", "ppp()");
  $('#he').css('font-size','25px');
}
function ppp() {
  // var w= $("body").innerWidth();
  $("#www").removeClass("wcc");
  $("#rre").removeClass("wee");
  $(".logon").removeClass("lof");
  $(".list-logo").removeClass("listi");
  $("#he").removeClass("ha");
  $("#job").hide();
  $("#sidc").removeClass("btnpo");
  $("#sidc").addClass("btnpo1");
  $(".imgii").removeClass("imgi");
  $("#sidc").attr("onclick", "qqq()");
  $('#he').css('font-size','15px');
}
function myfun(x) {
  if (x.matches) {
    ppp();
  } else {
    qqq();
  }
}
var x = window.matchMedia("(max-width:820px)");

myfun(x);
x.addEventListener("change", function () {
  myfun(x);
  
});

// back to top button 
$('#top').on('click',function(){
  document.documentElement.scrollTop =0;
});


// js for sidebar list selection effects

  $('.list-logo').on('click',function(){
    for(let numm=0;numm<6;numm++){
      $('.list-logo:eq('+ numm +')').removeClass('list-active');
      $('.list-logo:eq('+ numm +')').removeClass('list-up');
      $('.list-logo:eq('+ numm +')').removeClass('list-dw');
    }
    $('.list-logo:eq('+ listnum +')').toggleClass('list-active');
    if(listnum==0){
      $('.list-logo:eq('+ (listnum + 1) +')').addClass('list-dw');
    }
    else if(listnum==5){
      $('.list-logo:eq('+ (listnum -1) +')').addClass('list-up');
    }
    else{
      $('.list-logo:eq('+ (listnum - 1) +')').addClass('list-up');
      $('.list-logo:eq('+ (listnum + 1) +')').addClass('list-dw');  
    }
   })

/*
function myf(y) {
  if (y.matches) {
    
  } else {
    
  }
}

var y = window.matchMedia("(max-width:1150px)");

myf(y);
setTimeout(myf,2000);

y.addEventListener("change", function () {
  myf(y);
});
*/


// for more projects button 
$("#mow").hide();
$("#mow1").hide();
function more() {
  $("#mow1").toggle();
  $("#mow").toggle();
}


// When the user scrolls down from the top of the document\

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
//this if condition checks window width
  if($('body').width()>720){
 
  //for header
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $('.head1').height(50);
  } else {
    $('.head1').height(80);
  }
// for section 1
 if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
  $('.s-1-1,.s-1-2').css({"transform":"translate(0px)","filter":"opacity(1)"});
  }
   else {
    $('.s-1-1').css({"transform":"translate(-500px)","filter":"opacity(0)"});
    $('.s-1-2').css({"transform":"translate(500px)","filter":"opacity(0)"});
  }

  //for section 2 part 1
if(document.body.scrollTop > 730 || document.documentElement.scrollTop > 730){
 $('.s-2-2-1,.s-2-2-3').css({"transform": "translate(0px)","filter":"opacity(1)"});
}
else{
  $('.s-2-2-3').css({"transform":"translate(500px)","filter":"opacity(0)"});
  $('.s-2-2-1').css({"transform":"translate(-500px)","filter":"opacity(0)"});
}

// for section 2 part 2
 if(document.body.scrollTop > 930 || document.documentElement.scrollTop > 930){
 $('.s-2-2-2,.s-2-2-4').css({"transform": "translate(0px)","filter":"opacity(1)"});
}
else{
  $('.s-2-2-4').css({"transform":"translate(500px)","filter":"opacity(0)"});
  $('.s-2-2-2').css({"transform":"translate(-500px)","filter":"opacity(0)"});
}
  
//  SCROLL EFFECTS FOR SECTION SECTION 3
if(document.body.scrollTop > 1460 || document.documentElement.scrollTop > 1460){
  $('.sa, .sb, .sc').css({"transform": "translatey(0px) scale(1)","filter":"opacity(1)"});
 
 }
 else{
   $('.sa, .sb, .sc').css({"transform": "scale(2)","filter":"opacity(0)"});
   $('.sa').css("transform", "translatex(-300px)");
   $('.sb').css("transform", "translatey(300px)");
   $('.sc').css("transform", "translatex(300px)");
 }
 // SCROLL EFFECT FOR SECTION 4
 if(document.body.scrollTop > 1860 || document.documentElement.scrollTop > 1860){
  $('.s-4 ul li').css({"filter":"opacity(1)","margin":"0 20px"});
  $('#top').show();
} 
else{
  $('.s-4 ul li').css({"filter":"opacity(0)","margin":" 0 50%"});
  $('#top').hide();
}

// SECTION 5 TABLE
if(document.body.scrollTop > 2220 || document.documentElement.scrollTop > 2220){
  $('#d2').css({"filter":"opacity(1)","transform":"translatex(0px)"});
} 
else{
  $('#d2').css({"filter":"opacity(0)","transform":"translatex(-200px)"});
}

if(document.body.scrollTop > 2450 || document.documentElement.scrollTop > 2450){
  $('#d1').css({"filter":"opacity(1)","transform":"translatex(0px)"});
} 
else{
  $('#d1').css({"filter":"opacity(0)","transform":"translatex(200px)"});
}

if(document.body.scrollTop > 2720 || document.documentElement.scrollTop > 2720){
  $('#d3').css({"filter":"opacity(1)","transform":"translatex(0px)"});
} 
else{
  $('#d3').css({"filter":"opacity(0)","transform":"translatex(-200px)"});
}
 if(document.body.scrollTop > 2930 || document.documentElement.scrollTop > 2930){
  $('#d4').css({"filter":"opacity(1)","transform":"translatex(0px)"});
 }
 else{
  $('#d4').css({"filter":"opacity(0)","transform":"translatex(200px)"});
 }
 
 if(document.body.scrollTop > 3400 || document.documentElement.scrollTop > 3400){
  $('.s-6-21:eq(0) .s61:eq(0), .s-6-21:eq(0) .s61:eq(1)').css({"filter":"opacity(1)","transform":"translatex(0px)"});
 }
 else{  
  $('.s-6-21:eq(0) .s61:eq(0)').css({"filter":"opacity(0)","transform":"translatex(-200px)"});
  $('.s-6-21:eq(0) .s61:eq(1)').css({"filter":"opacity(0)","transform":"translatex(200px)"});
}
if(document.body.scrollTop > 3900 || document.documentElement.scrollTop > 3900){
  $('.s-6-21:eq(1) .s61:eq(0), .s-6-21:eq(1) .s61:eq(1)').css({"filter":"opacity(1)","transform":"translatex(0px)"});
 }
 else{  
  $('.s-6-21:eq(1) .s61:eq(0)').css({"filter":"opacity(0)","transform":"translatex(-200px)"});
  $('.s-6-21:eq(1) .s61:eq(1)').css({"filter":"opacity(0)","transform":"translatex(200px)"});
}
if(document.body.scrollTop > 4500 || document.documentElement.scrollTop > 4500){
  $('.s-6-21:eq(2) .s61:eq(0), .s-6-21:eq(2) .s61:eq(1)').css({"filter":"opacity(1)","transform":"translatex(0px)"});
 }
 else{  
  $('.s-6-21:eq(2) .s61:eq(0)').css({"filter":"opacity(0)","transform":"translatex(-200px)"});
  $('.s-6-21:eq(2) .s61:eq(1)').css({"filter":"opacity(0)","transform":"translatex(200px)"});
}
if(document.body.scrollTop > 5150 || document.documentElement.scrollTop > 5150){
  $('.foot1, .foot3').css({"filter":"opacity(1)","transform":"translatex(0px)"});
  document.documentElement.style.setProperty('--scl', "1.8");
 }
 else{  
  $('.foot1').css({"filter":"opacity(0)","transform":"translatex(-200px)"});
  $('.foot3').css({"filter":"opacity(0)","transform":"translatex(200px)"});
  //$('footer::before').css({"filter":"opacity(0)","transform":"scale(1.9)"});
  document.documentElement.style.setProperty('--scl', "1");
}
if(document.body.scrollTop > 5250 || document.documentElement.scrollTop > 5250){
  $('.foot2').css({"filter":"opacity(1)","transform":"translatex(0px)"});
 }
 else{  
  $('.foot2').css({"filter":"opacity(0)","transform":"translatey(200px)"});
}
  }
   else{
  //for header
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $('.head1').height(50);
  } else {
    $('.head1').height(80);
  }
// for section 1
 if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
  $('.s-1-1').css({"transform":"translate(0px)","filter":"opacity(1)"});
  }
   else {
    $('.s-1-1').css({"transform":"translate(-500px)","filter":"opacity(0)"});
  }
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
  $('.s-1-2').css({"transform":"translate(0px)","filter":"opacity(1)"});
  }
   else {
    $('.s-1-2').css({"transform":"translate(500px)","filter":"opacity(0)"});
  }
if(document.body.scrollTop > 1350 || document.documentElement.scrollTop > 1350){
 $('.s-2-2-1,.s-2-2-3').css({"transform": "translate(0px)","filter":"opacity(1)"});
}
else{
  $('.s-2-2-3').css({"transform":"translate(500px)","filter":"opacity(0)"});
  $('.s-2-2-1').css({"transform":"translate(-500px)","filter":"opacity(0)"});
}
 if(document.body.scrollTop > 1450 || document.documentElement.scrollTop > 1450){
 $('.s-2-2-2,.s-2-2-4').css({"transform": "translate(0px)","filter":"opacity(1)"});
}
else{
  $('.s-2-2-4').css({"transform":"translate(500px)","filter":"opacity(0)"});
  $('.s-2-2-2').css({"transform":"translate(-500px)","filter":"opacity(0)"});
}
  
//  SCROLL EFFECTS FOR SECTION SECTION 3
if(document.body.scrollTop > 2020 || document.documentElement.scrollTop > 2020){
  $('.sa').css({"transform": "translatey(0px) scale(1)","filter":"opacity(1)"});
 
 }
 else{
   //$('.s-22').css("transform", "translate(500px)");
   $('.sa').css({"transform": "scale(2)","filter":"opacity(0)"});
   $('.sa').css("transform", "translatex(-300px)");
 }

if(document.body.scrollTop > 2420 || document.documentElement.scrollTop > 2420){
  $('.sb').css({"transform": "translatey(0px) scale(1)","filter":"opacity(1)"});
 
 }
 else{
   //$('.s-22').css("transform", "translate(500px)");
   $('.sb').css({"transform": "scale(2)","filter":"opacity(0)"});
   $('.sb').css("transform", "translatex(300px)");
 }
if(document.body.scrollTop > 2920 || document.documentElement.scrollTop > 2920){
  $('.sc').css({"transform": "translatey(0px) scale(1)","filter":"opacity(1)"});
 
 }
 else{
   //$('.s-22').css("transform", "translate(500px)");
   $('.sc').css({"transform": "scale(2)","filter":"opacity(0)"});
   $('.sc').css("transform", "translatex(-300px)");
 }

 // SCROLL EFFECT FOR SECTION 4
 if(document.body.scrollTop > 3300 || document.documentElement.scrollTop > 3300){
  $('.s-4 ul li').css({"filter":"opacity(1)","margin":"0 20px"});
  $('#top').show();
} 
else{
  $('.s-4 ul li').css({"filter":"opacity(0)","margin":" 0 50%"});
  $('#top').hide();
}
// SECTION 5 TABLE
if(document.body.scrollTop > 3600 || document.documentElement.scrollTop > 3600){
  $('#d2').css({"filter":"opacity(1)","transform":"translatex(0px)"});
} 
else{
  $('#d2').css({"filter":"opacity(0)","transform":"translatex(-200px)"});
}
if(document.body.scrollTop > 3800 || document.documentElement.scrollTop > 3800){
  $('#d1').css({"filter":"opacity(1)","transform":"translatex(0px)"});
} 
else{
  $('#d1').css({"filter":"opacity(0)","transform":"translatex(200px)"});
}

if(document.body.scrollTop > 4100 || document.documentElement.scrollTop > 4100){
  $('#d3').css({"filter":"opacity(1)","transform":"translatex(0px)"});
} 
else{
  $('#d3').css({"filter":"opacity(0)","transform":"translatex(-200px)"});
}
 if(document.body.scrollTop > 4300 || document.documentElement.scrollTop > 4300){
  $('#d4').css({"filter":"opacity(1)","transform":"translatex(0px)"});
 }
 else{
  $('#d4').css({"filter":"opacity(0)","transform":"translatex(200px)"});
 }
 // 1st web image
 if(document.body.scrollTop > 4900 || document.documentElement.scrollTop > 4900){
  $('.s-6-21:eq(0) .s61:eq(0)').css({"filter":"opacity(1)","transform":"translatex(0px)"});
 }
 else{  
  $('.s-6-21:eq(0) .s61:eq(0)').css({"filter":"opacity(0)","transform":"translatex(-200px)"});
}
//2nd web image
if(document.body.scrollTop > 5430 || document.documentElement.scrollTop > 5420){
  $(' .s-6-21:eq(0) .s61:eq(1)').css({"filter":"opacity(1)","transform":"translatex(0px)"});
 }
 else{  
  $('.s-6-21:eq(0) .s61:eq(1)').css({"filter":"opacity(0)","transform":"translatex(200px)"});
}
// 3rd web image
if(document.body.scrollTop > 6000 || document.documentElement.scrollTop > 6000){
  $('.s-6-21:eq(1) .s61:eq(0)').css({"filter":"opacity(1)","transform":"translatex(0px)"});
 }
 else{  
  $('.s-6-21:eq(1) .s61:eq(0)').css({"filter":"opacity(0)","transform":"translatex(-200px)"});
}
// 4rd web image
if(document.body.scrollTop > 6600 || document.documentElement.scrollTop > 6600){
  $(' .s-6-21:eq(1) .s61:eq(1)').css({"filter":"opacity(1)","transform":"translatex(0px)"});
 }
 else{  
  $('.s-6-21:eq(1) .s61:eq(1)').css({"filter":"opacity(0)","transform":"translatex(200px)"});
}
//5th web image
if(document.body.scrollTop > 7150 || document.documentElement.scrollTop > 7150){
  $('.s-6-21:eq(2) .s61:eq(0) ').css({"filter":"opacity(1)","transform":"translatex(0px)"});
 }
 else{  
  $('.s-6-21:eq(2) .s61:eq(0)').css({"filter":"opacity(0)","transform":"translatex(-200px)"});
}
//6th web image
if(document.body.scrollTop > 7750 || document.documentElement.scrollTop > 7750){
  $('.s-6-21:eq(2) .s61:eq(1) ').css({"filter":"opacity(1)","transform":"translatex(0px)"});
 }
 else{  
  $('.s-6-21:eq(2) .s61:eq(1)').css({"filter":"opacity(0)","transform":"translatex(200px)"});
}

if(document.body.scrollTop > 8350 || document.documentElement.scrollTop > 8350){
  $('.foot1').css({"filter":"opacity(1)","transform":"translatex(0px)"});
  document.documentElement.style.setProperty('--scl', "1.8");
 }
 else{  
  $('.foot1').css({"filter":"opacity(0)","transform":"translatex(-200px)"});
  //$('footer::before').css({"filter":"opacity(0)","transform":"scale(1.9)"});
  document.documentElement.style.setProperty('--scl', "1");
}
if(document.body.scrollTop > 8650 || document.documentElement.scrollTop > 8650){
  $('.foot2').css({"filter":"opacity(1)","transform":"translatey(0px)"});
 }
 else{  
  $('.foot2').css({"filter":"opacity(0)","transform":"translatey(200px)"});
}

if(document.body.scrollTop > 9050 || document.documentElement.scrollTop > 9050){
  $('.foot3').css({"filter":"opacity(1)","transform":"translatex(0px)"});
 }
 else{  
  $('.foot3').css({"filter":"opacity(0)","transform":"translatex(200px)"});
}
  }
}

