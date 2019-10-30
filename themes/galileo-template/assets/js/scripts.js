$(function() {

	$('#menu-toggle, #menu-toggle2').click(function(){
		$('#menu-toggle').toggleClass('open');
		$('#menu-toggle2').toggleClass('open');

		$('#overlay-menu').toggleClass('open');
		$('body').toggleClass('without-scroll');
	});
	
	
	$(document).on('keyup', 'textarea.auto-height', function(event){
		var textarea = event.currentTarget;
		css = $(textarea).css('height').slice(0, 2);
		console.log(css);
		if (parseInt(css) < 50) {	
			$(textarea).css('height', 'auto');
			var height = textarea.scrollHeight + 2;
			$(textarea).css('height', height);
		}
	});
	
	
	var jsSelect = $('.js-select').select2({
		tags: true
	}).data('select2');
	
	if (jsSelect) {
		jsSelect.on('select', function(event){
			var data = event.data;
			if (data.id) {
				window.location.href = data.id;
			}
		});
	}

});


