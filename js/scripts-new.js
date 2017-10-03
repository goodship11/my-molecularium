/*var navigationnow = false;*/

$(document).ready(function() {

var jash = window.location.hash;



$('.hash-link').click(function() {
       window.location.hash = $(this).attr("href");
       
         if(jash != window.location.hash) {
      hash_navigation(window.location.hash);
    }
    jash = window.location.hash;
        return false;
    });
    
    
    /* SET DIV SIZES */

/*    $('.main').width(ancho);
    $(".main").height(alto);
    $(".max-container").width(ancho);
    $(".max-container").height(alto);
    $(".mailing-overlay").width(ancho);
    $(".mailing-overlay").height(alto);
    $(".riding-trailer-overlay").width(ancho);
    $(".riding-trailer-overlay").height(alto);
    $(".m2m-trailer-overlay").width(ancho);
    $(".m2m-trailer-overlay").height(alto);
    
         $(".mailing-max").width(ancho);
    $(".mailing-max").height(alto);
    $(".about-container").width(ancho);
    $(".about-container").height(alto);
    $(".press-container").width(ancho);
    $(".press-container").height(alto);
    $(".sponsors-container").width(ancho);
    $(".sponsors-container").height(alto);
    $(".educators-container").width(ancho);
    $(".educators-container").height(alto);
        $(".nanospace-container").width(ancho);
    $(".nanospace-container").height(alto);
    
        $(".riding-container").width(ancho);
    $(".riding-container").height(alto);
    
    $(".mailing-riding").width(ancho);
    $(".mailing-riding").height(alto);
    
        $(".kidssite-container").width(ancho);
    $(".kidssite-container").height(alto);
    
    */
    /*
    $(".about-container").css({'left':anchofour});
    $(".about-container").css({'top':altotwo});*/
   // $(".max-container").css({'left':anchotwo});
   // $(".max-container").css({'top':altotwo});
    

    /*$(".nanospace-container").css({"left": "-" +ancho });
    $(".nanospace-container").css({'top':altofour});*/
    //$(".nanospace-container").css({"left": "0"  });
    //$(".nanospace-container").css({'top':"0"});

   // $(".riding-container").css({"left": "-" +ancho });
   //$(".riding-container").css({'top':altosix});

    
//$(".kidssite-container").css({"left": "-" +ancho });
 // $(".kidssite-container").css({'top':altosix});



    var easing = 'linear';

$('.educators-container').bind('touchmove',function(e){
   $('.educators-container').scrollTop();

});
    
    
    
/* HASH NAVIGATION */

var hash_navigation = function(jash) {
/*navigationnow = true;*/


   if(jash != '#press' ){

   $('.nav-home-press').removeClass("menu-top-about-selected");


   }


    /* PRESS */
   if(jash == '#press'){
  loop_home_cards = false;
  $('.container').fadeOut();
    $('.nav-home-press').addClass("menu-top-about-selected");
  $('.main').fadeOut();
	$('.logo-project a').addClass("nav-about-back");
  $('.logo-container').fadeIn();
	$('.press-container').fadeIn();
   }
   
   
   
   if(jash != '#educators' && jash != '#educators-intro' && jash != '#educators-resources' && jash != '#educators-guide'){

   $('.educators-menu').removeClass("menu-top-educators-selected");

   }
   
   
       if(jash == '#riding-kidssite'){

 $('.logo-container').fadeOut();
	$('.logo-project a').removeClass("nav-nanospace-back");
   }
   
      if(jash != '#riding-kidssite'){

 $('.removekidssite').remove();

   }
   
   /* Educators */

   if(jash == '#educators'){
  loop_home_cards = false;
  $('.educators-menu').addClass("menu-top-educators-selected");
  $('.container').fadeOut();
  $('.main').fadeOut();
  $('.educators-paginator').animate({ left:'0', }, 900, "easeOutBack");
  $(".menu .educatorshome").addClass("selected");
  $('.menu .resources').removeClass("selected");
  $('.menu .guidetonanospace').removeClass("selected");
	$('.logo-project a').addClass("nav-about-back");
  /*$('.tab').fadeIn()*/
  $('.logo-container').fadeIn();
  $('.educators-container').fadeIn() ;
  }
   
   
   
    /* Educators - Intro */
   
    if(jash == '#educators-intro'){
    $('.educators-menu').addClass("menu-top-educators-selected");
    loop_home_cards = false;
    $('.container').fadeOut();
    $('.main').fadeOut();
	  $('.logo-project a').addClass("nav-about-back");
    $('.logo-container').fadeIn();
    $('.educators-container').fadeIn();
    $('.educators-paginator').animate({ left:'0', }, 900, "easeOutBack");
    $(".menu .educatorshome").addClass("selected");
    $('.menu .guidetonanospace').removeClass("selected");
    $('.menu .resources').removeClass("selected");
    }
   
      /* Educators - Resources */
      
    if(jash == '#educators-resources'){
    $('.educators-menu').addClass("menu-top-educators-selected");
    loop_home_cards = false;
    $('.container').fadeOut();
    $('.main').fadeOut();
	  $('.logo-project a').addClass("nav-about-back");
    $('.logo-container').fadeIn();
    $('.educators-container').fadeIn();
    $('.educators-paginator').animate({ left:'-1020', }, 900, "easeOutBack");
    $(".menu .educatorshome").removeClass("selected");
    $('.menu .guidetonanospace').removeClass("selected");
    $('.menu .resources').addClass("selected");
    }
   
   
    /* Educators - Guide */
      
   if(jash == '#educators-guide'){
   $('.educators-menu').addClass("menu-top-educators-selected");
   loop_home_cards = false;
   $('.container').fadeOut();
   $('.main').fadeOut();
   $('.logo-project a').addClass("nav-about-back");
   $('.logo-container').fadeIn();
	 $('.educators-container').fadeIn();
   $('.educators-paginator').animate({ left:'-2040', }, 900, "easeOutBack");
   $(".menu .educatorshome").removeClass("selected");
   $('.menu .guidetonanospace').addClass("selected");
   $('.menu .resources').removeClass("selected");
   }
   

  /*Sponsors */

   if(jash == '#sponsors'){
     sponsors();
   }
   
 function sponsors(){
 loop_home_cards = false;

  $('.container').fadeOut();
   $('.riding-container').fadeOut() ;
   $('.max-container').fadeOut() ;
  $('.main').fadeOut();
  $('.main-container').animate({ "left":"0", "top":"0"}, 0, "easeOutExpo", function() {  });
	$('.logo-project a').addClass("nav-about-back");
  $('.sponsors-container').fadeIn() ;
  $('.logo-container4').delay(600).fadeIn();
  

  }

/*home */


   if(jash == '#home'){
     loop_home_cards = false;
       
      $('.logo-container').fadeOut();
     $('.card2').css("display","none");
   $('.card1').css("display","block");
    $('.card3').css("display","none");
   
 $('.main-container').animate({ "left":"0", "top":"0"}, 0, "easeOutExpo", function() {
$('.container').fadeIn();
$('.main').fadeIn();
	  /*navigationnow = false;*/
  });
 $('.about-container').fadeOut();
  $('.press-container').fadeOut();
  $('.sponsors-container').fadeOut();
  $('.educators-container').fadeOut();
   window.location.hash = "#home";
   }
   
   /* About */

    if(jash != '#about' && jash != '#about-science' && jash != '#about-creativeteam' && jash != '#about-about' && jash != '#about-project'){

   $('.nav-about').removeClass("menu-top-about-selected");

   }
   
   if(jash == '#about'){
  loop_home_cards = false;
  $('.logo-project a').removeClass("nav-nanospace-back");
  $('.logo-project a').removeClass("nav-kidssite-back");
  $('.logo-project a').addClass("hash-link");
 $('.main-container').animate({ "left":"0", "top":"0"}, 0, "easeOutExpo");
   $('.nav-about').addClass("menu-top-about-selected");
  $('.container').fadeOut();
  $('.main').fadeOut();
	$('.logo-project a').addClass("nav-about-back");
   $('.logo-container').fadeIn();
	 $('.about-container').fadeIn();
$('.section-container').animate({ left:'0', }, 900, "easeOutBack");
 $(".menu ul li").removeClass("selected");
 $('.menu .aboutli').addClass("selected");
   }
   
    /*ABOUT - About */
   
         if(jash == '#about-about'){
       aboutabout();
    }
   
   function aboutabout(){
   $('.main-container').animate({ "left":"0", "top":"0"}, 0, "easeOutExpo");
   $('.nav-about').addClass("menu-top-about-selected");
   loop_home_cards = false;
   $('.container').fadeOut();
   $('.main').fadeOut();
	 $('.logo-project a').addClass("nav-about-back");
   $('.logo-container').fadeIn();
 	 $('.about-container').fadeIn();
   $('.section-container').animate({ left:'0', }, 900, "easeOutBack");
   $(".menu ul li").removeClass("selected");
   $('.menu .aboutli').addClass("selected");
 }
   
   
   /*ABOUT - Creative Team */
   
   
      if(jash == '#about-creativeteam'){
      aboutcreative();
       }
   
   
   function aboutcreative(){
 $('.main-container').animate({ "left":"0", "top":"0"}, 0, "easeOutExpo");
    $('.nav-about').addClass("menu-top-about-selected");
       loop_home_cards = false;
       $('.container').fadeOut();
       $('.main').fadeOut();
	     $('.logo-project a').addClass("nav-about-back");
       $('.logo-container').fadeIn();
	     $('.about-container').fadeIn();
       $('.section-container').animate({ left:'-3300', }, 900, "easeOutBack");
       $(".menu ul li").removeClass("selected");
       $('.menu .techli').addClass("selected");
       }
              
              
      /* ABOUT - Science */
   
   
      if(jash == '#about-science'){
      aboutscience();
       }
       
       function aboutscience(){
     $('.main-container').animate({ "left":"0", "top":"0"}, 0, "easeOutExpo");
        $('.nav-about').addClass("menu-top-about-selected");
       loop_home_cards = false;
       $('.container').fadeOut();
       $('.main').fadeOut();
	     $('.logo-project a').addClass("nav-about-back");
       $('.logo-container').fadeIn();
	     $('.about-container').fadeIn();
       $('#science').load('science.html');
       $('.section-container').animate({ left:'-2200', }, 900, "easeOutBack");
       $(".menu ul li").removeClass("selected");
       $('.menu .scienceli').addClass("selected");
       }
   
   /*ABOUT - Project */
   
         if(jash == '#about-project'){
        aboutproject();
    }
    
    function aboutproject(){
 $('.main-container').animate({ "left":"0", "top":"0"}, 0, "easeOutExpo");
      $('.nav-about').addClass("menu-top-about-selected");
      loop_home_cards = false;
      $('.container').fadeOut();
      $('.main').fadeOut();
	    $('.logo-project a').addClass("nav-about-back");
      $('.logo-container').fadeIn();
      $('.about-container').fadeIn();
      $('.section-container').animate({ left:'-1100', }, 900, "easeOutBack");
      $(".menu ul li").removeClass("selected");
      $('.menu .projectli').addClass("selected");
 }
    
        /* Nanospace */
   
   
   if(jash != '#nanospace'){
     $('.removenano').remove();
     $('.nanospace-container').fadeOut();
    }


         if(jash == '#nanospace'){
       nanospace();
    }
    function nanospace(){
  loop_home_cards = false;
$('.main-container').css('background-image', 'url(" images/starbackground.png ")');
$('.container').fadeOut();
$('.main').fadeOut();
$('.iframenanospace').load('nanospace.html', function() {
$('.logo-container2').fadeIn();
$('.nanospace-container').fadeIn();
$('.logo-project a').addClass("nav-nanospace-back");
    });}
    
      
   
   /*RIDING*/

   if(jash == '#riding'){
    loop_home_cards = false;
$('.main-container').css('background-image', 'url(" images/starbackground.png ")');
$('#slideshowdos').load('riding-slideshow.html', function() {});

$('.container').fadeOut();
$('.main').fadeOut();
$('.logo-container').fadeOut();
 /* $('.ani2-move').animate({ "top": altotwo}, 5000);*/
$('.main-container').animate({ "top":"-"  + altofour,}, 1800, "easeInOutSine", function() {
$('.main-container').delay(600).animate({ "top":"-"  + altosix,}, 850, "easeInOutSine", function() {
$('.riding-container').fadeIn();
/*navigationnow = false;*/
});
});
}



 /* RIDING - Home */

   if(jash == '#riding-home'){
    loop_home_cards = false;
$('.main-container').css('background-image', 'url(" images/starbackground.png ")');
$('#slideshowdos').load('riding-slideshow.html', function() {});
$('.tab-riding-about').removeClass("riding-about-selected");
$('.tab-riding-indomes').removeClass("riding-indomes-selected");
$('.container').fadeOut();
$('.main').fadeOut();
 $('.logo-container').fadeIn();

$('.main-container').delay(600).animate({ "top":"-"  + altosix,}, 850, "easeInOutSine", function() {
$('.riding-container').fadeIn();
$('.tab-riding-home').fadeOut();
$('.riding-mask').animate({ left:'0', }, 900, "easeOutBack");

});


}


 /*RIDING - ABOUT*/

   if(jash == '#riding-main'){
    loop_home_cards = false;
$('.main-container').css('background-image', 'url(" images/starbackground.png ")');
$('#slideshowdos').load('riding-slideshow.html', function() {});
$('.tab-riding-about').addClass("riding-about-selected");
$('.tab-riding-indomes').removeClass("riding-indomes-selected");
$('.container').fadeOut();
$('.main').fadeOut();
 $('.logo-container').fadeIn();
 /* $('.ani2-move').animate({ "top": altotwo}, 5000);*/

$('.riding-container').fadeIn();
$('.tab-riding-home').fadeIn();
$('.riding-mask').animate({ left:'-1100', }, 900, "easeOutBack");
$('.riding-submask-move').animate({ top:'0', }, 900, "easeOutBack");
    $('.tab-riding-submenu-intro').addClass("tab-riding-submenu-intro-selected");
     $('.tab-riding-submenu-crew').removeClass("tab-riding-submenu-crew-selected");
      $('.tab-riding-submenu-synopsis').removeClass("tab-riding-submenu-synopsis-selected");
       $('.tab-riding-submenu-credits').removeClass("tab-riding-submenu-credits-selected");
        $('.tab-riding-submenu-behind').removeClass("tab-riding-submenu-behind-selected");

}


 if(jash == '#riding-kidsite'){
  loop_home_cards = false;
$('.container').fadeOut();
$('.main').fadeOut();
$('.riding-container').fadeOut();
$('.iframekidssite').load('kidssite.html', function() {
$('.kidssite-container').fadeIn();
$('.logo-container3').fadeOut();
$('.logo-project a').addClass("nav-kidssite-back");
});
}

 /*RIDING - INDOMES*/

   if(jash == '#riding-indomes'){
    loop_home_cards = false;

$('#slideshowdos').load('riding-slideshow.html', function() {});
$('.tab-riding-indomes').addClass("riding-indomes-selected");
$('.tab-riding-about').removeClass("riding-about-selected");
$('.container').fadeOut();
$('.main').fadeOut();
 $('.logo-container').fadeIn();
$('.riding-container').fadeIn();
$('.tab-riding-home').fadeIn();
$('.riding-mask').animate({ left:'-2200', }, 900, "easeOutBack");


}


   /*m2m*/

   if(jash == '#m2m'){
  loop_home_cards = false;
$('.container').fadeOut();
$('#slideshow').load('m2m-slideshow.html', function() {});
$('.credits-m2m-box').load('credits-m2m.html', function() {});
$('.gallery-paginator').load('gallery-m2m.html',function() {
   $('.preloader-gallery').fadeOut('slow');
        });

$('.main').fadeOut();
$('.max-home-logo').hide();
$('.main-container').animate({ "left":"-"  + anchotwo,}, 2500, "easeInOutExpo", function() {
  
	
 $('.main-container').animate({ "top":"-"  + altotwo,}, 1750, "easeOutBack", function() {
 $('.logo-container').fadeOut();
 $('.max-container').fadeIn();
	 	 $('.max-pages').animate({
     left: '0'
     }, 800, function() { });
  });
  });
}

   
   
   /* M2M - functions */
   
   function m2mabout(){
     loop_home_cards = false;
   $('.container').fadeOut();
   $('.main').fadeOut();

   $('.logo-container').fadeOut();
   $('.max-home-logo').fadeIn();
   $('.max-container').fadeIn();
   $(".menu-max-left ul li a").removeClass("sub-selected");
   $(".about-m2m-introlink").addClass("sub-selected");
   $('.link-maxpage1').css('background-color', '#E93C28');
   $('.link-maxpage2').css('background-color', '#06539A');
   $('.link-maxpage3').css('background-color', '#06539A');
   $('.link-maxpage4').css('background-color', '#06539A');
   $('.paginator-about-m2m').animate({  top: '0' }, 100, function() { });
   $('#slideshow').load('m2m-slideshow.html', function() {});
   $('.credits-m2m-box').load('credits-m2m.html', function() {});
   $('.max-container').css('background-image', 'url("images/max-bg2.jpg")');
	 $('.max-pages').animate({ left: '-1300' }, 600, function() { });

    
   }
   
   
   function m2mcharacters(){  
   loop_home_cards = false;

   $('.container').fadeOut();
     
   $('.main').fadeOut();

     $('.logo-container').fadeOut();
   $('.max-home-logo').fadeIn();
   $('.max-container').fadeIn();
   $('.link-maxpage1').css('background-color', '#06539A');
   $('.link-maxpage2').css('background-color', '#E93C28');
   $('.link-maxpage3').css('background-color', '#06539A');
   $('.link-maxpage4').css('background-color', '#06539A');
   
   $('.max-container').css('background-image', 'url("images/max-bg5.jpg")');
   $('.max-pages').animate({  left: '-2600' }, 600, function() { });

    
   }
   
   
   function m2mgallery(){  
   loop_home_cards = false;
   $('.container').fadeOut();
   $('.main').fadeOut();

   $('.logo-container').fadeOut();
   $('.max-home-logo').fadeIn();
   $('.max-container').fadeIn();
   $('.link-maxpage1').css('background-color', '#06539A');
   $('.link-maxpage2').css('background-color', '#06539A');
   $('.link-maxpage3').css('background-color', '#E93C28');
   $('.link-maxpage4').css('background-color', '#06539A');
    $('.gallery-paginator').load('gallery-m2m.html',function() {
   /*$('.preloader-gallery').fadeOut('slow');*/
        });
   $('.max-container').css('background-image', 'url("images/max-bg3.jpg")');
   $('.max-pages').animate({  left: '-3900' }, 600, function() { });

    
   }
   
   
      function m2mtheaters(){  
   loop_home_cards = false;
   $('.container').fadeOut();
   $('.main').fadeOut();

   $('.logo-container').fadeOut();
   $('.max-home-logo').fadeIn();
   $('.max-container').fadeIn();
   $('.link-maxpage1').css('background-color', '#06539A');
   $('.link-maxpage2').css('background-color', '#06539A');
   $('.link-maxpage3').css('background-color', '#06539A');
   $('.link-maxpage4').css('background-color', '#E93C28');
    $('.gallery-paginator').load('gallery-m2m.html',function() {
   /*$('.preloader-gallery').fadeOut('slow');*/
        });
    $('.max-container').css('background-image', 'url("images/12.jpg")');
    $('.max-pages').animate({ left: '-5200' }, 500, function() { });

    
   }
   
   
   
   
   /* M2M - About*/
   if(jash == '#m2m-about'){
   m2mabout();
   }

   /* M2M - characters*/
   if(jash == '#m2m-characters'){
   m2mcharacters();
   }

   /* M2M - Gallery */
   if(jash == '#m2m-gallery'){
   m2mgallery();
   }

   /* M2M - Theaters*/
   if(jash == '#m2m-theaters'){
   m2mtheaters();
   }

}


if(jash && jash != '#') {
  hash_navigation(jash);
}


$(window).bind('hashchange', function() {
    if(jash != window.location.hash ) {
         hash_navigation(window.location.hash);
            
    }
    jash = window.location.hash;
 
});



  /* main nav */
  
 	var fadeloop = function() {
	 $('.card1').fadeIn(1000, function () {
	  $('.card1').delay(7000).fadeOut(1000, function () {
      $('.card2').fadeIn(1000, function(){
			$('.card2').delay(7000).fadeOut(1000, function () {
			$('.card3').fadeIn(1000, function () {
			$('.card3').delay(7000).fadeOut(1000);
		   }); 
		  }); 
			});
          }); 	
		   }); 	
			window.setTimeout(fadeloop, 28500, true);
  }
  fadeloop();

 



 $('.ridfloat').hover(
  function () {
    $(this).animate({
	 top:-10,
	 easing:easing,
	  }, 500, function() {  });
  }, 
  function () {
   $(this).animate({
	 top:10,
	 easing:easing,
	  }, 500, function() {  });
  }
);

 $('.molfloat').hover(
  function () {
    $(this).animate({
	 top:-10,
	 easing:easing,
	  }, 500, function() {  });
  }, 
  function () {
   $(this).animate({
	 top:10,
	 easing:easing,
	  }, 500, function() {  });
  }
);
 
  $('.nanofloat').hover(
  function () {
    $(this).animate({
	 top:-10,
	 easing:easing,
	  }, 500, function() {  });
  }, 
  function () {
   $(this).animate({
	 top:10,
	 easing:easing,
	  }, 500, function() {  });
  }
);

  $('.nanospace-new-m2m').hover(
  function () {
    $(this).animate({
	 top:240,
	 easing:easing,
	  }, 500, function() {  });
  }, 
  function () {
   $(this).animate({
	 top:250,
	 easing:easing,
	  }, 500, function() {  });
  }
);

       $('.show-mailing').click(function() {
  	 $('.mailing-overlay').fadeIn()
   });

       $('.show-mailing-riding').click(function() {
$('.mailing-riding').fadeIn()    });

       $('.show-mailing-max').click(function() {
$('.mailing-max').fadeIn() 
   });
   
   $('.cancel-mailing').click(function() {
	 $('.mailing-overlay').fadeOut()
 $('.mailing-max').fadeOut()
 $('.mailing-riding').fadeOut() });
  
  /* play trailer */
  
  $('.playtrailer').click(function() {
	 $('.riding-trailer-overlay').fadeIn()
     $('iframe#videorinding').attr('src','http://player.vimeo.com/video/38119424?title=0&byline=0&portrait=0&autoplay=true');
  
  });
   
        $('.riding-trailer-overlay, .close-m2m-video').click(function() {
	 $('.riding-trailer-overlay').fadeOut();
  $('iframe#videorinding').attr('src','');              
      
 });
   
   $('.play-m2m-video').click(function() {
	 $('.m2m-trailer-overlay').fadeIn() 
   $('.max-home-logo').show();
  
   $('iframe#videom2m').attr('src','http://player.vimeo.com/hubnut/album/1986372?color=44bbff&amp;background=000000&amp;slideshow=0&amp;video_title=0&amp;video_byline=0&amp;autoplay=true');
  
   });
   
   $('.m2m-trailer-overlay, .close-m2m-video').click(function() {
	 $('.m2m-trailer-overlay').fadeOut();
   $('iframe#videom2m').attr('src','');  
 });

    
   
   /*gotopress */
  
  
     $('.gotopress').click(function() {
    $('.riding-container').fadeOut();

$('.container').fadeIn();
$('.main').fadeOut();	  

 $('.about-container').fadeOut();
  $('.press-container').fadeIn();
  $('.educators-container').fadeOut();
   window.location.hash = "#press";});
  
   
  
  /*gotoeducators */
  
  
     $('.gotoeducators').click(function() {
   $('.riding-container').fadeOut();

$('.container').fadeIn();
$('.main').fadeOut();
	
 $('.about-container').fadeOut();
  $('.press-container').fadeOut();
  $('.educators-container').fadeIn();
   window.location.hash = "#educators";});
  

   /*gotoabout */
  
   $('.gotoabout').click(function() {
     $('.riding-container').fadeOut();

$('.container').fadeIn();
$('.main').fadeOut();

 $('.about-container').fadeIn();
  $('.press-container').fadeOut();
  $('.educators-container').fadeOut();
   window.location.hash = "#about";});
  
  
  $('.nav-about-logo').click(function() {
window.location.hash = "#about";
loop_home_cards = false;
$('.container').fadeOut();
$('.main').fadeOut();
	$('.logo-project a').addClass("nav-about-back");

     $('.section-container').animate({ left:'0', }, 900, "easeOutBack");
 $(".menu ul li").removeClass("selected");
 $('.menu .aboutli').addClass("selected");
  $('.logo-container').fadeIn();
	 $('.about-container').fadeIn() });
  
$('.nav-about').click(function() {
window.location.hash = "#about";
loop_home_cards = false;
$('.container').fadeOut();
$('.main').fadeOut();

	$('.logo-project a').addClass("nav-about-back");
  /*$('.tab').fadeIn()*/
     $('.section-container').animate({ left:'0', }, 900, "easeOutBack");
 $(".menu ul li").removeClass("selected");
 $('.menu .aboutli').addClass("selected");
  $('.logo-container').fadeIn();
	 $('.about-container').fadeIn() });

   
   
 $('.nav-inabout-press').click(function() {
     window.location.hash = "#press";
loop_home_cards = false;
	 $('.logo-container').fadeIn();
	 $('.about-container').fadeOut();
   $('.educators-container').fadeOut();
   	 $('.press-container').fadeIn() });
   
   
    $('.nav-inabout-educators').click(function() {
    window.location.hash = "#educators";
loop_home_cards = false;
$('.educators-paginator').animate({ left:'0', }, 900, "easeOutBack");
 $(".menu .educatorshome").addClass("selected");
 $('.menu .resources').removeClass("selected");
 $('.menu .guidetonanospace').removeClass("selected");
 $('.logo-container').fadeIn();
	 $('.about-container').fadeOut() ;
   $('.educators-container').fadeIn() });
   
   $('.nav-home-press').click(function() {
   window.location.hash = "#press";
loop_home_cards = false;
$('.container').fadeOut();
$('.main').fadeOut();
	$('.logo-project a').addClass("nav-about-back");
  /*$('.tab').fadeIn()*/
  $('.logo-container').fadeIn();
	 $('.press-container').fadeIn() });
   
      $('.nav-home-sponsors').click(function() {
      window.location.hash = "#sponsors";
loop_home_cards = false;
$('.container').fadeOut();
$('.main').fadeOut();
	$('.logo-project a').addClass("nav-about-back");
  /*$('.tab').fadeIn()*/
  $('.logo-container').fadeIn();
	 $('.sponsors-container').fadeIn() });
   
   
   
   $('.nav-home-educators').click(function() {
   window.location.hash = "#educators";
loop_home_cards = false;
$('.educators-paginator').animate({ left:'0', }, 900, "easeOutBack");
 $(".menu .educatorshome").addClass("selected");
 $('.menu .resources').removeClass("selected");
 $('.menu .guidetonanospace').removeClass("selected");
$('.container').fadeOut();
$('.main').fadeOut();
	$('.logo-project a').addClass("nav-about-back");
  /*$('.tab').fadeIn()*/
  $('.logo-container').fadeIn();
	 $('.educators-container').fadeIn() });
   
   /*
$('.main-container').animate({ "left":"-"  + anchotwo,}, 3500, "easeInOutExpo", function() {
 $('.ani1-move').animate({ "left": anchotwo}, 6000);
$('.main-container').animate({ "left":"-"  + anchofour,}, 3500, "easeInOutExpo", function() {
 $('.logo-container').fadeIn();
    $('.rotate-demo').animate({ rotate:'90deg', }, 350, "easeInCirc", function() {
    $('.main-container').animate({ "top":"-"  + altotwo,}, 1750, "easeOutBack", function() {
    

  });
  });  });

  }); */
  
  
  
  
    $('.nav-press-back').click(function() {
    window.location.hash = "#home";
      $('.card2').css("display","none");
   $('.card1').css("display","none");
    $('.card3').css("display","none");
        
   $('.press-container').fadeOut();
    $('.container').fadeIn();
     $('.main').fadeIn();

});

    $('.nav-sponsors-back').click(function() {
     window.location.hash = "#home";
      $('.card2').css("display","none");
   $('.card1').css("display","none");
    $('.card3').css("display","none");
          
   $('.sponsors-container').fadeOut();
    $('.container').fadeIn();
     $('.main').fadeIn();

});


    $('.nav-educators-back').click(function() {
     window.location.hash = "#home";
      $('.card2').css("display","none");
   $('.card1').css("display","none");
    $('.card3').css("display","none");
      
   $('.educators-container').fadeOut();
    $('.container').fadeIn();
     $('.main').fadeIn();

});
  
  $('.nav-about-back').click(function() {
   $('.about-container').fadeOut();
   $('.main-container').animate({ "left":"0", "top":"0"}, 1000, "easeOutExpo", function() { });
      $('.card2').css("display","none");
   $('.card1').css("display","none");
    $('.card3').css("display","none");
        
      
  $('.press-container').fadeOut();
  $('.educators-container').fadeOut();
   $('.about-container').fadeOut();
  $('.press-container').fadeOut();
  $('.educators-container').fadeOut();
    $('.container').fadeIn();
     $('.main').fadeIn();
      window.location.hash = "#home";
	
});
  
  
  
   $('.nav-mol-back').click(function() {

    $('.card2').css("display","none");
   $('.card1').css("display","none");
    $('.card3').css("display","none");
     
		 $('.max-container').fadeOut();
     $('.main-container').animate({ "top":"0",}, 2500, "easeInOutExpo", function() {
  
	
 $('.main-container').animate({ "left":"0",}, 1750, "easeOutExpo", function() {
$('.container').fadeIn();
$('.main').fadeIn();
	     window.location.hash = "#home";
  });
  });

});

  
  $('.nav-m2m').click(function() {
  window.location.hash = "#m2m";
  loop_home_cards = false;
$('.container').fadeOut();
$('#slideshow').load('m2m-slideshow.html', function() {});
$('.credits-m2m-box').load('credits-m2m.html', function() {});
$('.gallery-paginator').load('gallery-m2m.html', function() {});

$('.main').fadeOut();
$('.max-home-logo').hide();
$('.main-container').animate({ "left":"-"  + anchotwo,}, 2500, "easeInOutExpo", function() {
  	
 $('.main-container').animate({ "top":"-"  + altotwo,}, 1750, "easeOutBack", function() {
 $('.logo-container').fadeIn();
 $('.max-container').fadeIn();
	 
  });
  });
    });

/*$('.nav-nanospace').click(function() {
  loop_home_cards = false;
$('.main-container').css('background-image', 'url(" images/starbackground.png ")');
$('.container').fadeOut();
$('.main').fadeOut();
$('.iframenanospace').load('nanospace.html', function() {
$('.nanospace-container').fadeIn();
$('.logo-container').fadeIn();
$('.logo-project a').addClass("nav-nanospace-back");

  });

});*/


$('.tab-kidssite').click(function() {
  loop_home_cards = false;
$('.container').fadeOut();
$('.main').fadeOut();
$('.riding-container').fadeOut();
$('.iframekidssite').load('kidssite.html', function() {
$('.kidssite-container').fadeIn();
$('.logo-container').fadeOut();
/*$('.logo-project a').addClass("nav-kidssite-back");*/
});
});


$('.nav-nanospace-m2m').click(function() {
  loop_home_cards = false;
$('.main-container').css('background-image', 'url(" images/starbackground.png ")');
$('.container').fadeOut();
$('.main').fadeOut();
$('.max-container').fadeOut();
$('.main-container').animate({ "top":"0", "left":"0"}, 1500, "easeInOutExpo", function() {
$('.iframenanospace').load('nanospace.html', function() {
$('.nanospace-container').fadeIn();
  });  });
$('.logo-container').fadeIn();
$('.logo-project a').addClass("nav-nanospace-m2m-back");

  });

$('.nav-nanospace-m2m-back').click(function() {
  loop_home_cards = false;
      $('.card2').css("display","none");
   $('.card1').css("display","none");
    $('.card3').css("display","none");
   
$('.nanospace-container').fadeOut();
$('.removenano').remove();
$('.container').fadeIn();
$('.main').fadeIn();
$('.logo-container').fadeOut();

});


$('.nav-nanospace-back').click(function() {
  loop_home_cards = false;
      $('.card2').css("display","none");
   $('.card1').css("display","none");
    $('.card3').css("display","none");
  
$('.nanospace-container').fadeOut();
$('.removenano').remove();
$('.container').fadeIn();
$('.main').fadeIn();
$('.logo-container').fadeOut();

});



$('.nav-riding').click(function() {
loop_home_cards = false;
$('.main-container').css('background-image', 'url(" images/starbackground.png ")');
$('#slideshowdos').load('riding-slideshow.html', function() {});
$('.container').fadeOut();
$('.main').fadeOut();
 $('.logo-container').fadeIn();
 /* $('.ani2-move').animate({ "top": altotwo}, 5000);*/
$('.main-container').animate({ "top":"-"  + altofour,}, 1800, "easeInOutSine", function() {
$('.main-container').delay(600).animate({ "top":"-"  + altosix,}, 850, "easeInOutSine", function() {
$('.riding-container').fadeIn();

   /*  $('.rotate-demo').animate({ rotate:'90deg', }, 1200, "easeInCirc", function() {
	 $('.nanospace-container').fadeIn() 
   $('.main-container').animate({ "left":"+"  + anchotwo,}, 1750, "easeOutBounce", function() {
    $('.tab').fadeIn() });
  });*/
});
});
window.location.hash = "#riding";
});
  
  
  
$('.nav-riding-back').click(function() {

 $('.card2').css("display","none");
   $('.card1').css("display","none");
    $('.card3').css("display","none");
  
$('.riding-container').fadeOut();
$('.main-container').animate({ "top":"0",}, 1250, "easeInOutSine", function() {
$('.container').fadeIn();
$('.main').fadeIn();
 window.location.hash = "#home";
});






}); 
 
  
  
/*$('.logos').slideToggle('slow', function() { 
$('.riding').animate({ left:'-2500', top:'-2500',}, 4000, "easeOutBounce");
$('.m2m').animate({ left:'0px', top:'0px',}, 4000, "easeOutBack"); });




$('.nav-riding').click(function() {
$('.container').fadeOut();/*
$('.logos').slideToggle('slow', function() {
$('.m2m').animate({ left:'2500', top:'2500',}, 4000, "easeOutBounce"); });
$('.riding').animate({ left:'0', top:'0',}, 4000, "easeOutBack");
$('.nanospace').animate({ left:'-2500', top:'-2500',}, 4000, function(){
$('.nanospace').load('nanospace2.html');
});

});*/


/* links page project history */

$(".link-projectpage1").click(function() {
$(".link-projectpage1 p").addClass("select");
$(".link-projectpage2 p").removeClass("select");
$(".link-projectpage3 p").removeClass("select");
$(".link-projectpage4 p").removeClass("select");
$(".link-projectpage6 p").removeClass("select");
$(".link-projectpage5 p").removeClass("select");
$(".link-projectpage7 p").removeClass("select");
$(".link-projectpage8 p").removeClass("select");
$(".link-projectpage9 p").removeClass("select");
$('.projecthistory-pages').animate({
     left: '0'
     }, 800, function() { });
  
});

$(".link-projectpage2").click(function() {
$(".link-projectpage2 p").addClass("select");
$(".link-projectpage1 p").removeClass("select");
$(".link-projectpage3 p").removeClass("select");
$(".link-projectpage4 p").removeClass("select");
$(".link-projectpage6 p").removeClass("select");
$(".link-projectpage5 p").removeClass("select");
$(".link-projectpage7 p").removeClass("select");
$(".link-projectpage8 p").removeClass("select");
$(".link-projectpage9 p").removeClass("select");
  $('.projecthistory-pages').animate({
     left: '-1100'
     }, 800, function() {  });
  
});

$(".link-projectpage3").click(function() {
$(".link-projectpage3 p").addClass("select");
$(".link-projectpage1 p").removeClass("select");
$(".link-projectpage2 p").removeClass("select");
$(".link-projectpage4 p").removeClass("select");
$(".link-projectpage6 p").removeClass("select");
$(".link-projectpage5 p").removeClass("select");
$(".link-projectpage7 p").removeClass("select");
$(".link-projectpage8 p").removeClass("select");
$(".link-projectpage9 p").removeClass("select");
  $('.projecthistory-pages').animate({
     left: '-2200'
     }, 800, function() { });
  
});

$(".link-projectpage4").click(function() {
$(".link-projectpage4 p").addClass("select");
$(".link-projectpage1 p").removeClass("select");
$(".link-projectpage2 p").removeClass("select");
$(".link-projectpage3 p").removeClass("select");
$(".link-projectpage6 p").removeClass("select");
$(".link-projectpage5 p").removeClass("select");
$(".link-projectpage7 p").removeClass("select");
$(".link-projectpage8 p").removeClass("select");
$(".link-projectpage9 p").removeClass("select");
  $('.projecthistory-pages').animate({
     left: '-3300'
     }, 800, function() { });
  
});

$(".link-projectpage5").click(function() {
$(".link-projectpage5 p").addClass("select");
$(".link-projectpage1 p").removeClass("select");
$(".link-projectpage2 p").removeClass("select");
$(".link-projectpage3 p").removeClass("select");
$(".link-projectpage4 p").removeClass("select");
$(".link-projectpage6 p").removeClass("select");
$(".link-projectpage7 p").removeClass("select");
$(".link-projectpage8 p").removeClass("select");
$(".link-projectpage9 p").removeClass("select");
  $('.projecthistory-pages').animate({
     left: '-4400'
     }, 800, function() { });
  
});

$(".link-projectpage6").click(function() {
$(".link-projectpage6 p").addClass("select");
$(".link-projectpage1 p").removeClass("select");
$(".link-projectpage2 p").removeClass("select");
$(".link-projectpage3 p").removeClass("select");
$(".link-projectpage4 p").removeClass("select");
$(".link-projectpage5 p").removeClass("select");
$(".link-projectpage7 p").removeClass("select");
$(".link-projectpage8 p").removeClass("select");
$(".link-projectpage9 p").removeClass("select");
  $('.projecthistory-pages').animate({
     left: '-5500'
     }, 800, function() { });
  
});

$(".link-projectpage7").click(function() {
$(".link-projectpage7 p").addClass("select");
$(".link-projectpage1 p").removeClass("select");
$(".link-projectpage2 p").removeClass("select");
$(".link-projectpage3 p").removeClass("select");
$(".link-projectpage4 p").removeClass("select");
$(".link-projectpage5 p").removeClass("select");
$(".link-projectpage6 p").removeClass("select");
$(".link-projectpage8 p").removeClass("select");
$(".link-projectpage9 p").removeClass("select");
  $('.projecthistory-pages').animate({
     left: '-6600'
     }, 800, function() { });
  
});

$(".link-projectpage8").click(function() {
$(".link-projectpage7 p").removeClass("select");
$(".link-projectpage1 p").removeClass("select");
$(".link-projectpage2 p").removeClass("select");
$(".link-projectpage3 p").removeClass("select");
$(".link-projectpage4 p").removeClass("select");
$(".link-projectpage5 p").removeClass("select");
$(".link-projectpage6 p").removeClass("select");
$(".link-projectpage9 p").removeClass("select");
$(".link-projectpage8 p").addClass("select");
  $('.projecthistory-pages').animate({
     left: '-7700'
     }, 800, function() { });
  
});

$(".link-projectpage9").click(function() {
$(".link-projectpage7 p").removeClass("select");
$(".link-projectpage1 p").removeClass("select");
$(".link-projectpage2 p").removeClass("select");
$(".link-projectpage3 p").removeClass("select");
$(".link-projectpage4 p").removeClass("select");
$(".link-projectpage5 p").removeClass("select");
$(".link-projectpage6 p").removeClass("select");
$(".link-projectpage8 p").removeClass("select");
$(".link-projectpage9 p").addClass("select");
  $('.projecthistory-pages').animate({
     left: '-8800'
     }, 800, function() { });
  
});

/* links page project history */

$(".link-sciencepage1").click(function() {
$(".link-sciencepage1 p").addClass("select");
$(".link-sciencepage2 p").removeClass("select");
$(".link-sciencepage3 p").removeClass("select");
$(".link-sciencepage4 p").removeClass("select");
$(".link-sciencepage5 p").removeClass("select");
$('.science-pages').animate({
     left: '0'
     }, 800, function() { });
  
});

$(".link-sciencepage2").click(function() {
$(".link-sciencepage2 p").addClass("select");
$(".link-sciencepage1 p").removeClass("select");
$(".link-sciencepage3 p").removeClass("select");
$(".link-sciencepage4 p").removeClass("select");
$(".link-sciencepage5 p").removeClass("select");

  $('.science-pages').animate({
     left: '-1100'
     }, 800, function() {  });
  
});

$(".link-sciencepage3").click(function() {
$(".link-sciencepage3 p").addClass("select");
$(".link-sciencepage1 p").removeClass("select");
$(".link-sciencepage2 p").removeClass("select");
$(".link-sciencepage4 p").removeClass("select");
$(".link-sciencepage5 p").removeClass("select");
  $('.science-pages').animate({
     left: '-2200'
     }, 800, function() { });
  
});

$(".link-sciencepage4").click(function() {
$(".link-sciencepage4 p").addClass("select");
$(".link-sciencepage1 p").removeClass("select");
$(".link-sciencepage2 p").removeClass("select");
$(".link-sciencepage3 p").removeClass("select");
  $('.science-pages').animate({
     left: '-3300'
     }, 800, function() { });
  
});

$(".link-sciencepage5").click(function() {
$(".link-sciencepage5 p").addClass("select");
$(".link-sciencepage1 p").removeClass("select");
$(".link-sciencepage2 p").removeClass("select");
$(".link-sciencepage3 p").removeClass("select");
$(".link-sciencepage4 p").removeClass("select");
  $('.science-pages').animate({
     left: '-4400'
     }, 800, function() { });
  
});



/* gallery paginator */

$(".gallery-next-link").click(function() {
$("a.gallery-back-link").html("<img src='images/arrow-back-on.png' />");
$("a.gallery-next-link").html("<img src='images/arrow-next-off.png' />");
  $('.gallery-paginator').animate({
     left: '-1000'
     }, 800, function() { });
  
});


$(".gallery-back-link").click(function() {
$("a.gallery-back-link").html("<img src='images/arrow-back.png' />");
$("a.gallery-next-link").html("<img src='images/arrow-next.png' />");
  $('.gallery-paginator').animate({
     left: '0'
     }, 800, function() { });
  
});



/* max pages */

$(".link-maxpage0").click(function() {
$('.max-home-logo').fadeOut();
$('.link-maxpage1').css('background-color', '#06539A');
$('.link-maxpage2').css('background-color', '#06539A');
$('.link-maxpage3').css('background-color', '#06539A');
$('.link-maxpage4').css('background-color', '#06539A');
$('.max-pages').animate({ left: '0' }, 800, function() { });
    window.location.hash = "#m2m";
});


$('.nav-nanospace').click(function() {
$('.container').fadeOut();
});

/*
$('.logos').slideToggle('slow', function() {
$('.nanospace').load('nanospace.html', function() {
$('.m2m').animate({ left:'2500', top:'2500',}, 4000, "easeOutBounce"); });
$('.riding').animate({ left:'-2500', top:'-2500',}, 4000, "easeOutBack");
$('.nanospace').animate({ left:'0', top:'0',}, 4000, "easeOutBack");
});*/

  $(".switch").click(function() {
  $('.message-board').slideToggle('slow', function() {
    
  });
});

/*
$(function(){
    $('.submenu a.click').click(function(){
        $('embed').remove();
        $('body').append('<embed src="click.mp3" autostart="true" hidden="true" loop="false">');
    });
 
    $('.submenu a.teachers').mouseover(function(){
        $('embed').remove();
		$('.imghover').fadeIn();
        $('body').append('<embed src="hey.mp3" autostart="true" hidden="true" loop="false">');
    });
	 $('.submenu a.teachers').mouseout(function(){
       
		$('.imghover').fadeOut();
       
    });
});
*/


$(".link-box1").click(function() {
$(".link-box1 div").addClass("select");
$(".link-box2 div").removeClass("select");
$(".link-box3 div").removeClass("select");
  $('.boxes-container').animate({
     left: '0'
     }, 800, function() {
   
  });
  
});

$(".link-box2").click(function() {
$(".link-box2 div").addClass("select");
$(".link-box1 div").removeClass("select");
$(".link-box3 div").removeClass("select");
  $('.boxes-container').animate({
     left: '-1100'
     }, 800, function() {
   
  });
  
});

$(".link-box3").click(function() {
$(".link-box3 div").addClass("select");
$(".link-box1 div").removeClass("select");
$(".link-box2 div").removeClass("select");
  $('.boxes-container').animate({
     left: '-2200'
     }, 800, function() {
   
  });
  
});




/* links riding-about */

$(".link-boxriding1").click(function() {
$(".link-boxriding1 div").addClass("select-riding");
$(".link-boxriding2 div").removeClass("select-riding");
$(".link-boxriding3 div").removeClass("select-riding");
  $('.boxes-container').animate({
     left: '0'
     }, 800, function() {
   
  });
  
});

$(".link-boxriding2").click(function() {
$(".link-boxriding2 div").addClass("select-riding");
$(".link-boxriding1 div").removeClass("select-riding");
$(".link-boxriding3 div").removeClass("select-riding");
  $('.boxes-container').animate({
     left: '-675'
     }, 800, function() {
   
  });
  
});

$(".link-boxriding3").click(function() {
$(".link-boxriding3 div").addClass("select-riding");
$(".link-boxriding1 div").removeClass("select-riding");
$(".link-boxriding2 div").removeClass("select-riding");
  $('.boxes-container').animate({
     left: '-1350'
     }, 800, function() {
   
  });
  
});

/*
$(".message-link").click(function() {
$(".message-board").slideToggle("slow");
  });*/


  
  
/* Navigation Riding */


$('.tab-riding-home').click(function() {
$('.tab-riding-home').hide();
$('.tab-riding-about').removeClass("riding-about-selected");
$('.tab-riding-indomes').removeClass("riding-indomes-selected");
$('.riding-mask').animate({ left:'0', }, 900, "easeOutBack");
window.location.hash = "#riding-home";
});


$('.tab-riding-about').live("click", function(){
$('.tab-riding-home').show();
$('.tab-riding-about').addClass("riding-about-selected");
$('.tab-riding-indomes a').removeClass();
$('.tab-riding-kidssite a').removeClass();
    $('.tab-riding-submenu-intro').addClass("tab-riding-submenu-intro-selected");
     $('.tab-riding-submenu-crew').removeClass("tab-riding-submenu-crew-selected");
      $('.tab-riding-submenu-synopsis').removeClass("tab-riding-submenu-synopsis-selected");
       $('.tab-riding-submenu-credits').removeClass("tab-riding-submenu-credits-selected");
        $('.tab-riding-submenu-behind').removeClass("tab-riding-submenu-behind-selected");

$('.riding-mask').animate({ left:'-1100', }, 900, "easeOutBack");
$('.riding-submask-move').animate({ top:'0', }, 900, "easeOutBack");
window.location.hash = "#riding-main";
});

$('.tab-riding-indomes').click(function() {
$('.tab-riding-home').show();
$('.tab-riding-about a').css('background-image', 'url("images/riding-about.png")');
$('.tab-riding-indomes a').css('background-image', 'url("images/riding-indomes-hover.png")');
$('.tab-riding-kidssite a').css('background-image', 'url("images/riding-kids.png")');
window.location.hash = "#riding-indomes";
$('.riding-mask').animate({ left:'-2200', }, 900, "easeOutBack");

});
  
  
  
  /* production paginator */
  
        $('.link-navproductionm2m1').click(function() {
$('.production-paginator').animate({ left:'0', }, 900, "easeOutBack");
$(".link-navproductionm2m1 div").addClass("select-m2m");
$(".link-navproductionm2m2 div").removeClass("select-m2m");
$(".link-navproductionm2m3 div").removeClass("select-m2m");
$(".link-navproductionm2m4 div").removeClass("select-m2m");
$(".link-navproductionm2m5 div").removeClass("select-m2m");
$(".link-navproductionm2m6 div").removeClass("select-m2m");
$(".link-navproductionm2m7 div").removeClass("select-m2m");
$(".link-navproductionm2m8 div").removeClass("select-m2m");
});
  
        $('.link-navproductionm2m2').click(function() {
$('.production-paginator').animate({ left:'-738', }, 900, "easeOutBack");
$(".link-navproductionm2m2 div").addClass("select-m2m");
$(".link-navproductionm2m1 div").removeClass("select-m2m");
$(".link-navproductionm2m3 div").removeClass("select-m2m");
$(".link-navproductionm2m4 div").removeClass("select-m2m");
$(".link-navproductionm2m5 div").removeClass("select-m2m");
$(".link-navproductionm2m6 div").removeClass("select-m2m");
$(".link-navproductionm2m7 div").removeClass("select-m2m");
$(".link-navproductionm2m8 div").removeClass("select-m2m");
});


    $('.link-navproductionm2m3').click(function() {
$('.production-paginator').animate({ left:'-1477', }, 900, "easeOutBack");
$(".link-navproductionm2m3 div").addClass("select-m2m");
$(".link-navproductionm2m2 div").removeClass("select-m2m");
$(".link-navproductionm2m1 div").removeClass("select-m2m");
$(".link-navproductionm2m4 div").removeClass("select-m2m");
$(".link-navproductionm2m5 div").removeClass("select-m2m");
$(".link-navproductionm2m6 div").removeClass("select-m2m");
$(".link-navproductionm2m7 div").removeClass("select-m2m");
$(".link-navproductionm2m8 div").removeClass("select-m2m");
});


    $('.link-navproductionm2m4').click(function() {
$('.production-paginator').animate({ left:'-2215', }, 900, "easeOutBack");
$(".link-navproductionm2m4 div").addClass("select-m2m");
$(".link-navproductionm2m2 div").removeClass("select-m2m");
$(".link-navproductionm2m3 div").removeClass("select-m2m");
$(".link-navproductionm2m1 div").removeClass("select-m2m");
$(".link-navproductionm2m5 div").removeClass("select-m2m");
$(".link-navproductionm2m6 div").removeClass("select-m2m");
$(".link-navproductionm2m7 div").removeClass("select-m2m");
$(".link-navproductionm2m8 div").removeClass("select-m2m");
});

  
     $('.link-navproductionm2m5').click(function() {
$('.production-paginator').animate({ left:'-2952', }, 900, "easeOutBack");
$(".link-navproductionm2m5 div").addClass("select-m2m");
$(".link-navproductionm2m2 div").removeClass("select-m2m");
$(".link-navproductionm2m3 div").removeClass("select-m2m");
$(".link-navproductionm2m4 div").removeClass("select-m2m");
$(".link-navproductionm2m1 div").removeClass("select-m2m");
$(".link-navproductionm2m6 div").removeClass("select-m2m");
$(".link-navproductionm2m7 div").removeClass("select-m2m");
$(".link-navproductionm2m8 div").removeClass("select-m2m");
});


     $('.link-navproductionm2m6').click(function() {
$('.production-paginator').animate({ left:'-3690', }, 900, "easeOutBack");
$(".link-navproductionm2m5 div").removeClass("select-m2m");
$(".link-navproductionm2m6 div").addClass("select-m2m");
$(".link-navproductionm2m2 div").removeClass("select-m2m");
$(".link-navproductionm2m3 div").removeClass("select-m2m");
$(".link-navproductionm2m4 div").removeClass("select-m2m");
$(".link-navproductionm2m1 div").removeClass("select-m2m");
$(".link-navproductionm2m7 div").removeClass("select-m2m");
$(".link-navproductionm2m8 div").removeClass("select-m2m");
});

     $('.link-navproductionm2m7').click(function() {
$('.production-paginator').animate({ left:'-4425', }, 900, "easeOutBack");
$(".link-navproductionm2m7 div").addClass("select-m2m");
$(".link-navproductionm2m2 div").removeClass("select-m2m");
$(".link-navproductionm2m3 div").removeClass("select-m2m");
$(".link-navproductionm2m4 div").removeClass("select-m2m");
$(".link-navproductionm2m1 div").removeClass("select-m2m");
$(".link-navproductionm2m5 div").removeClass("select-m2m");
$(".link-navproductionm2m6 div").removeClass("select-m2m");
$(".link-navproductionm2m8 div").removeClass("select-m2m");
});

  $('.link-navproductionm2m8').click(function() {
$('.production-paginator').animate({ left:'-5165', }, 900, "easeOutBack");
$(".link-navproductionm2m8 div").addClass("select-m2m");
$(".link-navproductionm2m2 div").removeClass("select-m2m");
$(".link-navproductionm2m3 div").removeClass("select-m2m");
$(".link-navproductionm2m4 div").removeClass("select-m2m");
$(".link-navproductionm2m1 div").removeClass("select-m2m");
$(".link-navproductionm2m5 div").removeClass("select-m2m");
$(".link-navproductionm2m6 div").removeClass("select-m2m");
$(".link-navproductionm2m7 div").removeClass("select-m2m");
});

  
    /*submenu m2m about */
  
  
      $('.about-m2m-introlink').click(function() {
       
     $(".menu-max-left ul li a").removeClass("sub-selected");
     $(".about-m2m-introlink").addClass("sub-selected");
$('.paginator-about-m2m').animate({ top:'0', }, 900, "easeOutBack");
});
  
    $('.about-m2m-synopsislink').click(function() {
    
     $(".menu-max-left ul li a").removeClass("sub-selected");
     $(".about-m2m-synopsislink").addClass("sub-selected");
$('.paginator-about-m2m').animate({ top:'-365', }, 900, "easeOutBack");
});

  $('.about-m2m-productionlink').click(function() {
   
     $(".menu-max-left ul li a").removeClass("sub-selected");
     $(".about-m2m-productionlink").addClass("sub-selected");
$('.paginator-about-m2m').animate({ top:'-730', }, 900, "easeOutBack");
});

  $('.about-m2m-creditslink').click(function() {
   
     $(".menu-max-left ul li a").removeClass("sub-selected");
     $(".about-m2m-creditslink").addClass("sub-selected");
$('.paginator-about-m2m').animate({ top:'-1095', }, 900, "easeOutBack");
});
  
    $('.about-m2m-behindlink').click(function() {
     
     $(".menu-max-left ul li a").removeClass("sub-selected");
     $(".about-m2m-behindlink").addClass("sub-selected");
$('.paginator-about-m2m').animate({ top:'-1470', }, 900, "easeOutBack");
});
  
  
  /*submenu riding about */
  
  
    $('.tab-riding-submenu-intro').click(function() {
    $('.tab-riding-submenu-intro').addClass("tab-riding-submenu-intro-selected");
     $('.tab-riding-submenu-crew').removeClass("tab-riding-submenu-crew-selected");
      $('.tab-riding-submenu-synopsis').removeClass("tab-riding-submenu-synopsis-selected");
       $('.tab-riding-submenu-credits').removeClass("tab-riding-submenu-credits-selected");
        $('.tab-riding-submenu-behind').removeClass("tab-riding-submenu-behind-selected");
$('.riding-submask-move').animate({ top:'0', }, 900, "easeOutBack");
});

    $('.tab-riding-submenu-crew').click(function() {
        $('.tab-riding-submenu-intro').removeClass("tab-riding-submenu-intro-selected");
     $('.tab-riding-submenu-crew').addClass("tab-riding-submenu-crew-selected");
      $('.tab-riding-submenu-synopsis').removeClass("tab-riding-submenu-synopsis-selected");
       $('.tab-riding-submenu-credits').removeClass("tab-riding-submenu-credits-selected");
        $('.tab-riding-submenu-behind').removeClass("tab-riding-submenu-behind-selected");
$('.riding-submask-move').animate({ top:'-900', }, 900, "easeOutBack");
});
  
  $('.tab-riding-submenu-synopsis').click(function() {
         $('.tab-riding-submenu-intro').removeClass("tab-riding-submenu-intro-selected");
     $('.tab-riding-submenu-crew').removeClass("tab-riding-submenu-crew-selected");
      $('.tab-riding-submenu-synopsis').addClass("tab-riding-submenu-synopsis-selected");
       $('.tab-riding-submenu-credits').removeClass("tab-riding-submenu-credits-selected");
        $('.tab-riding-submenu-behind').removeClass("tab-riding-submenu-behind-selected");
$('.riding-submask-move').animate({ top:'-425', }, 900, "easeOutBack");
});

  $('.tab-riding-submenu-credits').click(function() {
         $('.tab-riding-submenu-intro').removeClass("tab-riding-submenu-intro-selected");
     $('.tab-riding-submenu-crew').removeClass("tab-riding-submenu-crew-selected");
      $('.tab-riding-submenu-synopsis').removeClass("tab-riding-submenu-synopsis-selected");
       $('.tab-riding-submenu-credits').addClass("tab-riding-submenu-credits-selected");
        $('.tab-riding-submenu-behind').removeClass("tab-riding-submenu-behind-selected");
$('.riding-submask-move').animate({ top:'-1350', }, 900, "easeOutBack");
});

  $('.tab-riding-submenu-behind').click(function() {
         $('.tab-riding-submenu-intro').removeClass("tab-riding-submenu-intro-selected");
     $('.tab-riding-submenu-crew').removeClass("tab-riding-submenu-crew-selected");
      $('.tab-riding-submenu-synopsis').removeClass("tab-riding-submenu-synopsis-selected");
       $('.tab-riding-submenu-credits').removeClass("tab-riding-submenu-credits-selected");
        $('.tab-riding-submenu-behind').addClass("tab-riding-submenu-behind-selected");
$('.riding-submask-move').animate({ top:'-1800', }, 900, "easeOutBack");
});



/* characters paginator */


$(".character-back1").live("click", function(){
$('.characters-paginator').animate({ left:'0', }, 900, "easeOutBack");
 $(".characters-back a").removeClass("character-back1");
 $('.characters-back a').css('background-image', 'url(" images/arrow-back.png ")');
   $(".characters-next a").removeClass("character-next2");
 $(".characters-next a").addClass("character-next1");
});

$(".character-back2").live("click", function(){
$('.characters-paginator').animate({ left:'-700', }, 900, "easeOutBack");
 $(".characters-back a").removeClass("character-back2");
 $(".characters-back a").addClass("character-back1");
  $(".characters-next a").removeClass("character-next3");
 $(".characters-next a").addClass("character-next2");
});


$(".character-back3").live("click", function(){
$('.characters-paginator').animate({ left:'-1500', }, 900, "easeOutBack");
 $(".characters-back a").removeClass("character-back3");
 $(".characters-back a").addClass("character-back2");
  $(".characters-next a").removeClass("character-next4");
 $(".characters-next a").addClass("character-next3");
});

$(".character-back4").live("click", function(){
$('.characters-paginator').animate({ left:'-2220', }, 900, "easeOutBack");
 $(".characters-back a").removeClass("character-back4");
 $(".characters-back a").addClass("character-back3");
  $(".characters-next a").removeClass("character-next5");
 $(".characters-next a").addClass("character-next4");
    $('.characters-next a').css('background-image', 'url(" images/arrow-next.png ")');
});

$(".character-next1").live("click", function(){
$('.characters-paginator').animate({ left:'-700', }, 900, "easeOutBack");
$('.characters-back a').css('background-image', 'url(" images/arrow-back-on.png ")');
 $(".characters-back a").addClass("character-back1");
 $(".characters-next a").removeClass("character-next1");
 $(".characters-next a").addClass("character-next2");
});


$(".character-next2").live("click", function(){
$('.characters-paginator').animate({ left:'-1500', }, 900, "easeOutBack");
  $(".characters-next a").removeClass("character-next2");
  $(".characters-next a").addClass("character-next3");
   $(".characters-back a").removeClass("character-back1");
   $(".characters-back a").addClass("character-back2");
});

$(".character-next3").live("click", function(){
$('.characters-paginator').animate({ left:'-2220', }, 900, "easeOutBack");
  $(".characters-next a").removeClass("character-next3");
  $(".characters-next a").addClass("character-next4");
   $(".characters-back a").removeClass("character-back2");
   $(".characters-back a").addClass("character-back3");
});



$(".character-next4").live("click", function(){
$('.characters-paginator').animate({ left:'-3020', }, 900, "easeOutBack");
  $(".characters-next a").removeClass("character-next4");
  $(".characters-next a").addClass("character-next5");
   $(".characters-back a").removeClass("character-back3");
   $(".characters-back a").addClass("character-back4");
   $('.characters-next a').css('background-image', 'url(" images/arrow-next-off.png ")');
});



/* educators menu 


$('.intro-link').click(function() {
$('.educators-paginator').animate({ left:'0', }, 900, "easeOutBack");
 $(".menu .educatorshome").addClass("selected");
 $('.menu .resources').removeClass("selected");
 $('.menu .guidetonanospace').removeClass("selected");
  window.location.hash = "#educators-intro";
});


$('.resources-link').click(function() {
$('.educators-paginator').animate({ left:'-1020', }, 900, "easeOutBack");
 $(".menu .educatorshome").removeClass("selected");
  $('.menu .guidetonanospace').removeClass("selected");
 $('.menu .resources').addClass("selected");
   window.location.hash = "#educators-resources";
});


$('.guide-link').click(function() {
$('.educators-paginator').animate({ left:'-2040', }, 900, "easeOutBack");
 $(".menu .educatorshome").removeClass("selected");
  $('.menu .guidetonanospace').addClass("selected");
 $('.menu .resources').removeClass("selected");
   window.location.hash = "#educators-guide";
});*/

/* Navigation About */

/*
$('.tab-science').click(function() {
window.location.hash = "#about-science";
$('.tab-riding-home').show();
$('#science').load('science.html');
$('.section-container').animate({ left:'-1100', }, 900, "easeOutBack");
 $(".menu ul li").removeClass("selected");
 $('.menu .scienceli').addClass("selected");
});


$('.tab-tech').click(function() {
window.location.hash = "#about-creativeteam";
$('.tab-riding-home').show();
$('.section-container').animate({ left:'-2200', }, 900, "easeOutBack");
 $(".menu ul li").removeClass("selected");
 $('.menu .techli').addClass("selected");
});


$('.tab-aboutrpi').click(function() {
window.location.hash = "#about-about";
$('.tab-riding-home').show();
$('.section-container').animate({ left:'-3300', }, 900, "easeOutBack");
 $(".menu ul li").removeClass("selected");
 $('.menu .aboutli').addClass("selected");
});

$('.tab-project').click(function() {
    window.location.hash = "#about-project";
$('.section-container').animate({ left:'-6600', }, 900, "easeOutBack");
 $(".menu ul li").removeClass("selected");
 $('.menu .projectli').addClass("selected");
});



$('.tab-aboutnanotoon').click(function() {
$('.tab-riding-home').show();
$('.section-container').animate({ left:'-4400', }, 900, "easeOutBack");
 $(".menu ul li").removeClass("selected");
 $('.menu .aboutnanotoonli').addClass("selected");
$('#aboutnanotoon').load('nanotoon.html');
});*/

$('.tab-crew').click(function() {
$('.tab-riding-home').show();
$('.section-container').animate({ left:'-5500', }, 900, "easeOutBack");
 $(".menu ul li").removeClass("selected");
 $('.menu .crewli').addClass("selected");
$('#crew').load('crew.html');

});

$('.tab-bios').click(function() {
$('.section-container').animate({ left:'0', }, 900, "easeOutBack");
 $(".menu ul li").removeClass("selected");
 $('.menu .biosli').addClass("selected");
});

/*
$('.slide-arrow-right a').click(function() {
$('.slide-arrow-left img').fadeIn();
$('.slide-arrow-right img').fadeOut();
$('.message-slide-container').animate({ left:'-960px', }, 900, "easeOutBack");
});

$('.slide-arrow-left a').click(function() {
$('.slide-arrow-left img').fadeOut();
$('.slide-arrow-right img').fadeIn();
$('.message-slide-container').animate({ left:'0', }, 900, "easeOutBack");
});*/

});





/* slideshow */




function slideSwitch() {
    var $active = $('#slideshow IMG.active');

   
       
    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');
        
  
    // uncomment the 3 lines below to pull the images in random order
    
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
         $active.removeClass('active last-active');
         
        var caption = $('#slideshow IMG.active').attr('title');
         $('#m2mslidecaption').html(caption);
        });

         
        }

$(function() {
    setInterval( "slideSwitch()", 5000 );
});



/* slideshow  2 */




function slideSwitchdos() {
    var $active = $('#slideshowdos IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshowdos IMG:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshowdos IMG:first');

    // uncomment the 3 lines below to pull the images in random order
    
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitchdos()", 5000 );
});




              
              