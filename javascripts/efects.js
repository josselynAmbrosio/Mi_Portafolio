// $(window).scroll(function(){
// 	var navegador= $(this).scrollTop();
// 	if (navegador > 400){
// 		$(".navbar").addClass("scroll");
// 		$(".navbar-brand").removeClass("hidden")
// 	}
// 	else if (navegador < 550){
// 		$(".navbar").removeClass("scroll");
// 		$(".navbar-brand").addClass("hidden")

// 	}
// });

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});