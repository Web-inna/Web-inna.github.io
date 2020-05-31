function _scrollTo(id) {
	$([document.documentElement, document.body]).animate({
		scrollTop: $(id).offset().top - 30
	}, 500);
}

$(function() {
	$('#modal').hide();
	$('#caption').hide();
	
	$('.button').click(function() {
		$('.button').attr('class', 'button');
		var name = $(this).attr('id').split('_')[1];
		$(this).addClass(name);
		_scrollTo('#div_' + name);
	});
	
	$('.containerBox').click(function() {
		$('#everything').animate({ 'opacity' : '0.0' }, 250);
		var src = $(this).find('.img-responsive').attr('src');
		$('#modal').css('opacity', '0.0');
		$('#modal').css('width', 'auto');
		$('#modal').attr('src', src).show();
		$('#modal').animate({ 'opacity' : '1.0' }, 200);
		var txt = $(this).find('.text-box-content').text();
		$('#caption').text(txt);
		$('#caption').show();
	});
	
	$('#modal').click(function() {
		$(this).hide();
		$('#caption').hide();
		$('#everything').attr('style', 'opacity:1.0;');
	});
	
	function handleSize() {
		if ($(window).width() > 1000) {
			var w = $(window).width() - 1000;
			if (w > 200) w = 200;
			w /= 10;
			$(document.body).css('margin-left',  w + '%');
			$(document.body).css('margin-right', w + '%');
			$('.header').css('left',  w + '%');
			$('.header').css('width', (100-w*2) + '%');
		} else {
			$(document.body).css('margin-left', '0%');
			$(document.body).css('margin-right', '0%');
		}
	}
	
	handleSize();
	$(window).resize(handleSize);
});
