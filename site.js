jQuery(document).ready(function($) { 
    $(".rolagem").click(function(event){        
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });
   });     
 

jQuery(function () {
jQuery(window).scroll(function () {
if (jQuery(this).scrollTop() > 50) {
// $("#menu").css('background-color', 'rgb(41, 40, 40)');
$("#menu").addClass("mudarCorMenu");
}else{
$("#menu").removeClass("mudarCorMenu");

} 
});
});

jQuery(function () {
wit = screen.width
jQuery(window).resize(function () {
if (jQuery(this).width() < 1200) {
$("#divtexto").removeClass("col-6");
$("#textMaratona").removeClass("col-6");
}else{
$("#divtexto").addClass("col-6");
$("#textMaratona").addClass("col-6");
} 
});
});

jQuery(function () {
wit = screen.width
jQuery(window).resize(function () {
if (jQuery(this).width() < 1000) {
$("#divForm1").removeClass("col-2");
$("#divForm3").removeClass("col-2");
$("#divForm2").removeClass("col-8");
$("#divForm2").addClass("col-12");
}else{
  $("#divForm1").addClass("col-2");
  $("#divForm3").addClass("col-2");
  $("#divForm2").removeClass("col-12");
  $("#divForm2").addClass("col-8");
} 
});
});

jQuery(function () {
wit = screen.width
jQuery(window).resize(function () {
if (jQuery(this).width() < 800) {
$("#quadrado1").removeClass("col-7");
$("#quadrado2").removeClass("col-7");
$("#quadrado3").removeClass("col-7");

$("#quadrado1").addClass("col-9");
$("#quadrado2").addClass("col-9");
$("#quadrado3").addClass("col-9");

$("#qad1").removeClass("col-2");
$("#qad2").removeClass("col-2");
$("#qad3").removeClass("col-2");

$("#qad1").addClass("col-3");
$("#qad2").addClass("col-3");
$("#qad3").addClass("col-3");

}else{
$("#quadrado1").removeClass("col-9");
$("#quadrado2").removeClass("col-9");
$("#quadrado3").removeClass("col-9");

$("#quadrado1").addClass("col-7");
$("#quadrado2").addClass("col-7");
$("#quadrado3").addClass("col-7");

$("#qad1").removeClass("col-3");
$("#qad2").removeClass("col-3");
$("#qad3").removeClass("col-3");

$("#qad1").addClass("col-2");
$("#qad2").addClass("col-2");
$("#qad3").addClass("col-2");

} 
});
});


jQuery(function () {
wit = screen.width
jQuery(window).resize(function () {
if (jQuery(this).width() < 400) {
$("#bt1").removeClass("tamanho1");
$("#bt2").removeClass("tamanho1");
$("#bt3").removeClass("tamanho1");
$("#bt4").removeClass("tamanho1");
$("#bt5").removeClass("tamanho1");


}else{
$("#bt1").addClass("tamanho1");
$("#bt2").addClass("tamanho1");
$("#bt3").addClass("tamanho1");
$("#bt4").addClass("tamanho1");
$("#bt5").addClass("tamanho1");

} 
});
});