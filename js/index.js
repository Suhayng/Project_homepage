var showImg, nextImg, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16,
n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16;

function fadeInOut(){
   showImg = $(".new1 img:eq(0)");
   s2 = $(".new2 img:eq(0)");
   nextImg = $(".new1 img:eq(1)");
   n2 = $(".new2 img:eq(1)");
   nextImg.addClass("active");
   n2.addClass("active2");
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

}
var timer = setInterval("fadeInOut()",3000);



 
 