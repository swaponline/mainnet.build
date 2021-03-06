$(function () {
	// tooltipe
	$('[data-toggle="tooltip"]').tooltip({
		html:true
	});

	//toggle mobile bar
	$(".menu-toggle").on('click', function() {
		$(this).toggleClass("on");
		$('.menu-section').toggleClass("on");
		$("nav ul").toggleClass('hidden');

		$('.mobileBar').toggleClass('show');
		$('body').toggleClass('showMobileBar');
	});

	// open video
	$('#videoPreview').click(function(){
		$('#player').fadeIn(100);
		$("#player iframe")[0].src += "&autoplay=1";
	});
	$(document).on('click','#player-close',function(){
		$('#player').fadeOut(100);
		$("#player iframe").attr('src','https://www.youtube.com/embed/1G-U5Sh7pQk?rel=0&amp;showinfo=0');
	});


	// select
	$('#giveAway').ddslick();
	$('#areGetting').ddslick();

	// Exchange Reverse
	$(document).on('click', '.btn-exchange-reverse', function(e){
		e.preventDefault();
		$('#giveAway').ddslick('destroy');
		$('#areGetting').ddslick('destroy');
		var giveAway = $('#giveAway');
		var areGetting = $('#areGetting');
		var giveAwayHtml = $('#giveAway').clone();
		var areGettingHtml = $('#areGetting').clone();
		giveAway.replaceWith(areGettingHtml);
		areGetting.replaceWith(giveAwayHtml);
		$('#giveAway').ddslick();
		$('#areGetting').ddslick();
	});

});
