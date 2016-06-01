function html() {
	$('#javascript').remove();
	$('head').append('<link rel="stylesheet" href="stylesheets/main.css"><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><link href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900" rel="stylesheet" type="text/css">');
	$('#nav').html('<div class="nav"><a href="index.html"><img src="images/logo_color.png"></a><ul><li><a href="about.html">About</a></li><li><a href="events.html">Events</a></li><li><a href="resources.html">Resources</a></li><li class="button"><a href="join.html">Join</a></li></ul></div>');
	$('body').append('<section id="footer"><div><table><tr class="first-row"><td><a href="index.html">Home</a></td><td><a href="about.html">About</a></td><td><a href="events.html">Events</a></td><td><a href="resources.html">Resources</a></td><td><a href="join.html">Join</a></td></tr><tr class="second-row"><td><p><a href="index.html#about">About</a></p><p><a href="index.html#events">Upcoming Events</a></p></td><td><p><a href="about.html#mission">Mission</a></p><p><a href="about.html#officers">Officers</a></p></td><td><p><a href="events.html#upcoming">Upcoming Events</a></p><p><a href="events.html#volunteer">Volunteer Opportunities</a></p><p><a href="events.html#past">Past Events</a></p></td><td><p><a href="resources.html#uw">At the University of Washington</a></p><p><a href="resources.html#nation">Nationwide</a></p></td><td><p><a href="join.html#benefits">Benefits</a></p><p><a href="join.html#benefits">Application</a></p></td></tr></table></div></section>');
}

function imagetogif() {
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

function popup() {
	$('#popup').fadeIn('slow');
	$('#popup > div').click(function() {
		$(this).parent().fadeOut('slow');
	});
	// <section id="popup"><div></div></section>
}

function mobile() {
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

function events() {
	var events = [
		// [ {EVENT_NAME} , {"open" OR "closed" OR "volunteer"} ,
		//		{DATE} , {TIME} , {LOCATION_LINK} , {LOCATION_NAME} ,
		//		{DESCRIPTION} ];
		["University of Washington School of Dentistry: Sue Coldwell's Admission Talk", "closed",
			"04/27/2016", "5:30-6:30 PM", "MEB 246", "http://www.washington.edu/maps/#!/meb",
			""],
		["Admissions Overview from Accepted Students", "closed",
			"05/04/2016", "5:30-6:30 PM", "MEB 246", "http://www.washington.edu/maps/#!/meb",
			""],
		["University of Pacific: Visit from Director of Admissions", "closed",
			"05/11/2016", "5:30-6:30 PM", "MEB 246", "http://www.washington.edu/maps/#!/meb",
			""],
		["Elections and Gold Member Recognition", "closed",
			"05/18/2016", "5:30-6:30 PM", "MEB 246", "http://www.washington.edu/maps/#!/meb",
			""],
		["Friday Feasts with ROOTS", "volunteer",
			"04/29/2016", "4:30-7:00 PM", "1415 NE 43RD ST SEATTLE (ALLEY ENTRANCE) BY MOD PIZZA", "https://www.google.com/maps/place/1415+NE+43rd+St,+Seattle,+WA+98105/@47.6592479,-122.3145446,17z/data=!3m1!4b1!4m2!3m1!1s0x5490148b4f6b6617:0xd9007ef2253841c8",
			""],
		["Friday Feasts with ROOTS", "volunteer",
			"05/06/2016", "4:30-7:00 PM", "1415 NE 43RD ST SEATTLE (ALLEY ENTRANCE) BY MOD PIZZA", "https://www.google.com/maps/place/1415+NE+43rd+St,+Seattle,+WA+98105/@47.6592479,-122.3145446,17z/data=!3m1!4b1!4m2!3m1!1s0x5490148b4f6b6617:0xd9007ef2253841c8",
			""],
		["Relay for Life Fundraiser: Molar Bearz", "volunteer",
			"05/21/2016", "", "TBD", "",
			""],
		["This Is An Open Event", "open",
			"07/30/2016", "5:30-6:30 PM", "MEB 246", "http://www.washington.edu/maps/#!/meb",
			""],
		["This Is An Open Event", "open",
			"08/30/2016", "5:30-6:30 PM", "MEB 246", "http://www.washington.edu/maps/#!/meb",
			""],
		["This Is A Closed Event", "closed",
			"07/30/2016", "5:30-6:30 PM", "MEB 246", "http://www.washington.edu/maps/#!/meb",
			""],
		["This Is A Closed Event", "closed",
			"08/30/2016", "5:30-6:30 PM", "MEB 246", "http://www.washington.edu/maps/#!/meb",
			""],
		["This Is A Volunteer Event", "volunteer",
			"07/30/2016", "5:30-6:30 PM", "MEB 246", "http://www.washington.edu/maps/#!/meb",
			""],
		["This Is A Volunteer Event", "volunteer",
			"08/30/2016", "5:30-6:30 PM", "MEB 246", "http://www.washington.edu/maps/#!/meb",
			""],
	];
	events.sort(function(a, b) {
		if(a[2] == b[2]) return 0;
		else return (a[2] > b[2]) ? -1 : 1;
	});
	var open = false;
	var closed = false;
	var volunteer = false;
	for(var i = events.length - 1; i >= 0; i--) {
		if((events[i][1] == "open" || events[i][1] == "closed") && (new Date(events[i][2]) >= new Date() - 24 * 60 * 60 * 1000)) var section = "upcoming";
		else if(events[i][1] == "volunteer" && (new Date(events[i][2]) >= new Date() - 24 * 60 * 60 * 1000)) var section = "volunteer";
		else var section = "past";

		if(events[i][1] == "open") var icon = "accessibility";
		else if(events[i][1] == "closed") var icon = "lock";
		else if(events[i][1] == "volunteer") var icon = "account_balance";

		if(section == "upcoming" && events[i][1] == "open" && !open) {
			printevent('span#events_short', events, i, icon);
			open = true;
		}
		if(section == "upcoming" && events[i][1] == "closed" && !closed) {
			printevent('span#events_short', events, i, icon);
			closed = true;
		}
		if(section == "volunteer" && events[i][1] == "volunteer" && !volunteer) {
			printevent('span#events_short', events, i, icon);
			volunteer = true;
		}
		printevent('span#' + section, events, i, icon);
	}
	if($('span#upcoming').html() == "") $('span#upcoming').html("<h3>No upcoming events</h3>");
	if($('span#volunteer').html() == "") $('span#volunteer').html("<h3>No upcoming volunteer opportunities</h3>");
	if($('span#past').html() == "") $('span#past').html("<h3>No past events or volunteer opportunities</h3>");
}

function printevent(anchor, events, i, icon) {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	$(anchor).prepend('<h2 title="This is a ' + events[i][1] + ' event">' + events[i][0] + '<i class="material-icons">' + icon + '</i>' + '</h2><h3>' + days[new Date(events[i][2]).getDay()] + ', ' + months[new Date(events[i][2]).getMonth()] + ' ' + new Date(events[i][2]).getDate() + ', from ' + events[i][3] + ' at <a href="' + events[i][5] + '" target="_blank">' + events[i][4] + '</a></h3>');
	// if(events[i][5] != "") $('span#' + section).append('<h3>' + events[i][6] + '</h3>');
}

function scroll() {
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();
		var $target = $(this.hash);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
}

var easteregg = "";
document.onkeyup = function(e) {
	if(e.keyCode == 68) easteregg += "d";
	if(e.keyCode == 83) easteregg += "s";
	if(easteregg.substring(easteregg.length - 3).toLowerCase() == "dds") {
		$('html').css({'transition': '2s', '-webkit-filter': 'invert(100%)', 'filter': 'invert(100%)'});
	}
}

$(document).ready(html);
$(document).ready(imagetogif);
$(document).ready(popup);
$(document).ready(scroll);
$(document).ready(events);
$(document).ready(mobile);
$(window).resize(mobile);