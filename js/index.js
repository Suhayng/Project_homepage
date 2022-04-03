var showImg, nextImg, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16,
n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16;

function fadeInOut(){
   showImg = $(".new1 img:eq(0)");
   s2 = $(".new2 img:eq(0)");
   s3 = $(".new3 img:eq(0)");
   s4 = $(".new4 img:eq(0)");
   s5 = $(".new5 img:eq(0)");
   s6 = $(".new6 img:eq(0)");
   s7 = $(".new7 img:eq(0)");
   s8 = $(".new8 img:eq(0)");
   s9 = $(".new9 img:eq(0)");
   s10 = $(".new10 img:eq(0)");
   s11 = $(".new11 img:eq(0)");
   s12 = $(".new12 img:eq(0)");
   s13 = $(".new13 img:eq(0)");
   s14 = $(".new14 img:eq(0)");
   s15 = $(".new15 img:eq(0)");
   s16 = $(".new16 img:eq(0)");

   nextImg = $(".new1 img:eq(1)");
   n2 = $(".new2 img:eq(1)");
   n3 = $(".new3 img:eq(1)");
   n4 = $(".new4 img:eq(1)");
   n5 = $(".new5 img:eq(1)");
   n6 = $(".new6 img:eq(1)");
   n7 = $(".new7 img:eq(1)");
   n8 = $(".new8 img:eq(1)");
   n9 = $(".new9 img:eq(1)");
   n10 = $(".new10 img:eq(1)");
   n11 = $(".new11 img:eq(1)");
   n12 = $(".new12 img:eq(1)");
   n13 = $(".new13 img:eq(1)");
   n14 = $(".new14 img:eq(1)");
   n15 = $(".new15 img:eq(1)");
   n16 = $(".new16 img:eq(1)");

   nextImg.addClass("active");
   n2.addClass("active2");
   n3.addClass("active3");
   n4.addClass("active4");
   n5.addClass("active5");
   n6.addClass("active6");
   n7.addClass("active7");
   n8.addClass("active8");
   n9.addClass("active9");
   n10.addClass("active10");
   n11.addClass("active11");
   n12.addClass("active12");
   n13.addClass("active13");
   n14.addClass("active14");
   n15.addClass("active15");
   n16.addClass("active16");

   nextImg.css("opacity","0")
    .animate({opacity:1},1000, function() {     
         $(".new1").append( showImg );  
      showImg.removeClass("active");  
    });
    n2.css("opacity", "0")
    .animate({opacity:1},1000, function() {     
        $(".new2").append( s2 );  
     s2.removeClass("active2");  
   });
   n3.css("opacity", "0")
   .animate({opacity:1},1000, function() {     
       $(".new3").append( s3 );  
    s3.removeClass("active3");  
  });
  n4.css("opacity", "0")
  .animate({opacity:1},1000, function() {     
      $(".new4").append( s4 );  
   s4.removeClass("active4");  
 });
 n5.css("opacity", "0")
 .animate({opacity:1},1000, function() {     
     $(".new5").append( s5 );  
  s5.removeClass("active5");  
});
n6.css("opacity", "0")
.animate({opacity:1},1000, function() {     
    $(".new6").append( s6 );  
 s6.removeClass("active6");  
});
n7.css("opacity", "0")
.animate({opacity:1},1000, function() {     
    $(".new7").append( s7 );  
 s7.removeClass("active7");  
});
n8.css("opacity", "0")
.animate({opacity:1},1000, function() {     
    $(".new8").append( s8 );  
 s8.removeClass("active8");  
});
n9.css("opacity", "0")
.animate({opacity:1},1000, function() {     
    $(".new9").append( s9 );  
 s9.removeClass("active9");  
});
n10.css("opacity", "0")
.animate({opacity:1},1000, function() {     
    $(".new10").append( s10 );  
 s10.removeClass("active10");  
});
n11.css("opacity", "0")
.animate({opacity:1},1000, function() {     
    $(".new11").append( s11 );  
 s11.removeClass("active11");  
});
n12.css("opacity", "0")
.animate({opacity:1},1000, function() {     
    $(".new12").append( s12 );  
 s12.removeClass("active12");  
});
n13.css("opacity", "0")
.animate({opacity:1},1000, function() {     
    $(".new13").append( s13 );  
 s13.removeClass("active13");  
});
n14.css("opacity", "0")
.animate({opacity:1},1000, function() {     
    $(".new14").append( s14 );  
 s14.removeClass("active14");  
});
n15.css("opacity", "0")
.animate({opacity:1},1000, function() {     
    $(".new15").append( s15 );  
 s15.removeClass("active15");  
});
n16.css("opacity", "0")
.animate({opacity:1},1000, function() {     
    $(".new16").append( s16 );  
 s16.removeClass("active16");  
});

}
var timer = setInterval("fadeInOut()",3000);



 
 