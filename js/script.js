$(document).ready(function(){
    //Adjust slider height
    var winH= $(window).height(),
        NavH= $('.navbar').innerHeight();
     $('.slider,.carousel-item').height( winH-NavH);
    $('.patient').height(winH);
    
 });



$('.navbar ul li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    });