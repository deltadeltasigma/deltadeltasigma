var html = function() {
	$('#javascript').remove();
	$('head').append('<link rel="stylesheet" href="stylesheets/main.css"><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><link href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,500, 700, 900" rel="stylesheet" type="text/css">');
	$('#nav').html('<div class="nav"><a href="index.html"><img src="images/logo_color.png"></a><ul><li><a href="about.html">About</a></li><li><a href="events.html">Events</a></li><li><a href="resources.html">Resources</a></li><li class="button"><a href="join.html">Join</a></li></ul></div>');
	$('body').append('<section id="footer"><div><table><tr class="first-row"><td><a href="index.html">Home</a></td><td><a href="about.html">About</a></td><td><a href="events.html">Events</a></td><td><a href="resources.html">Resources</a></td><td><a href="join.html">Join</a></td></tr><tr class="second-row"><td><p><a href="index.html#about">About</a></p><p><a href="index.html#events">Upcoming Events</a></p></td><td><p><a href="about.html#mission">Mission</a></p><p><a href="about.html#officers">Officers</a></p></td><td><p><a href="events.html#events">Upcoming Events</a></p><p><a href="events.html#volunteer">Volunteer Opportunities</a></p></td><td><p><a href="resources.html#uw">At the University of Washington</a></p><p><a href="resources.html#nation">Nationwide</a></p></td><td><p><a href="join.html#benefits">Benefits</a></p><p><a href="join.html#benefits">Application</a></p></td></tr></table></div></section>');
}

var imagetogif = function() {
	$('.imagetogif').find('.gif').hide();
	$('.imagetogif').hover(function() {
		$(this).find('.image').hide();
		$(this).find('.gif').show();
	},
	function() {
		$(this).find('.image').show();
		$(this).find('.gif').hide();
	});
}

var popup = function() {
	$('#popup').fadeIn('slow');
	$('#popup > div').click(function() {
		$(this).parent().fadeOut('slow');
	});
	// <section id="popup"><div></div></section>
}

var mobile = function() {
	if($(window).width() < 900 || $(window).height() < 400) {
		$('#main .nav img').hide();
		$('#main .nav ul').hide();
		$('#main i.material-icons.arrow-down').hide();
		$('#nav .nav img, #nav .nav .name').hide();
		// $('#main').height(50%);
	}
	else {
		$('#main .nav img').show();
		$('#main .nav ul').show();
		$('#main i.material-icons.arrow-down').show();
		$('#nav .nav img, #nav .nav .name').show();
	}
	console.log($(window).width() + " x " + $(window).height());
}

$(document).ready(html);
$(document).ready(imagetogif);
$(document).ready(popup);
$(document).ready(mobile);
$(window).resize(mobile);