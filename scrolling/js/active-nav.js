$(function () {
	var obj = $('#documenter_nav li');
	obj.find('.levelo').click(function () {
		console.log(obj.find('.levelo'));
		console.log($(this).index());
		$(".levelo").closest('li').find('ol').hide();
		$(".levelo.current").removeClass('current');
		$(this).addClass('current').closest('li').find('ol').toggle();
		// $(this).closest('li').animate({"top": "5"}, "slow");
	})
	$(".levelt").click(function () {
		$('.levelt.current').removeClass('current');
		$(this).addClass('current');
	})
})