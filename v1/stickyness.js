var elm = jQuery('#topside header');
var stickyoffset = elm.offset().top;
var stickyheight = elm.height();

jQuery(document).on('scroll', function(){
	if(jQuery(window).scrollTop() > stickyoffset+stickyheight){
		elm.addClass('sticky');
	}else{
		elm.removeClass('sticky');
	}
});
