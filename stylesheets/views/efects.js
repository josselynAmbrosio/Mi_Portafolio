$(window).scroll(function(){
	var navegador= $(this).scrollTop();
	if (navegador > 899){
		$(".navbar").addClass("scroll");
		$(".navbar-brand").removeClass("hidden")
	}
	else if (navegador < 800){
		$(".navbar").removeClass("scroll");
		$(".navbar-brand").addClass("hidden")

	}
});