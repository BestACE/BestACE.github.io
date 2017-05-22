$(function() {
	var m_st;
	var pageHeight=$(window).innerHeight();
	$('.page').height(pageHeight);
	$(window).scroll(
		function() {
			m_st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
			if(m_st > pageHeight) {
				$('.imga1').fadeIn("slow");
			} else {
				$('.imga1').fadeOut("slow");
			}
		}
	);
	
});