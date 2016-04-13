$('.header').mouseleave(function(event) {
	$('.popover-dismiss').popover("hide");
});

$( ".form-search" ).click(function() {
	$('.popover-dismiss').popover({
		html : true, 
		content: function() {
			return $('.form-city').html();
		},
	})
});


$( ".form-search" ).click(function() {
	toastr.info('Click again on the loupe in you want to search you city s weather');
	toastr.options = {
		"closeButton": false,
		"debug": true,
		"newestOnTop": false,
		"progressBar": true,
		"positionClass": "toast-top-right",
		"preventDuplicates": true,
		"onclick": null,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	}
});
