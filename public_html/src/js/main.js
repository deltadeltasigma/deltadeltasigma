function html() {
	$('#javascript').remove();
	$('head').append('<link rel="stylesheet" href="src/css/main.css"><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><link href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900" rel="stylesheet" type="text/css">');
	$('#nav').html('<div class="nav"><a href="index.html"><img src="src/img/logo/color.png"></a><ul><li><a href="about.html">About</a></li><li><a href="officers.html">Officers</a></li><li><a href="events.html">Events</a></li><!--<li><a href="resources.html">Resources</a></li>--><li class="button"><a href="join.html">Join</a></li></ul></div>');
	$('body').wrapInner('<div class="content"></div>');
	$('body').append('<section id="footer"><div><table><tr class="first-row"><td><a href="index.html">Home</a></td><td><a href="about.html">About</a></td><td><a href="events.html">Events</a></td><!--<td><a href="resources.html">Resources</a></td>--><td><a href="join.html">Join</a></td></tr><tr class="second-row"><td><p><a href="index.html#about">About</a></p><p><a href="index.html#events">Upcoming Events</a></p></td><td><p><a href="about.html#mission">Mission</a></p><p><a href="officers.html">Officers</a></p></td><td><p><a href="events.html#upcoming">Upcoming Events</a></p><p><a href="events.html#volunteer">Volunteer Opportunities</a></p><p><a href="events.html#past">Past Events</a></p></td><!--<td><p><a href="resources.html#uw">At the University of Washington</a></p><p><a href="resources.html#nation">Nationwide</a></p></td>--><td><p><a href="join.html#benefits">Benefits</a></p><p><a href="join.html#benefits">Application</a></p></td></tr></table></div></section>');
}

function events() {
	var events = [
		// [ {EVENT_NAME} , {"open" OR "closed" OR "volunteer"} ,
		// 	{DATE} , {TIME} , {LOCATION_LINK} , {LOCATION_NAME} ,
		// 	{DESCRIPTION} ],

		// Append new events below. Upcoming events will be sorted and posted in chronological order (so order of events below does not matter). Events within one year prior to the current date will print in past events, and all future events will be printed in "Upcoming Events" and "Volunteer Opportunities" of events.html. Only one of each event type is printed on the home page.

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
		["Friday Feast with ROOTS", "volunteer",
			"04/29/2016", "4:30-7:00 PM", "1415 NE 43rd St Seattle (alley entrance) by MOD Pizza", "https://www.google.com/maps/place/1415+NE+43rd+St,+Seattle,+WA+98105/@47.6592479,-122.3145446,17z/data=!3m1!4b1!4m2!3m1!1s0x5490148b4f6b6617:0xd9007ef2253841c8",
			""],
		["Friday Feast with ROOTS", "volunteer",
			"05/06/2016", "4:30-7:00 PM", "1415 NE 43rd St Seattle (alley entrance) by MOD Pizza", "https://www.google.com/maps/place/1415+NE+43rd+St,+Seattle,+WA+98105/@47.6592479,-122.3145446,17z/data=!3m1!4b1!4m2!3m1!1s0x5490148b4f6b6617:0xd9007ef2253841c8",
			""],
		["Relay for Life Fundraiser: Molar Bearz", "volunteer",
			"05/21/2016", "", "TBD", "",
			""],
		["Fall Quarter General Meeting", "open",
			"10/05/2016", "5:30-6:30 PM", "THO 134", "http://www.washington.edu/maps/#!/tho",
			"Come find out about the University of Washington's pre-dental club, Delta Delta Sigma!"],
		["Friday Feast with ROOTS", "volunteer",
			"10/07/2016", "4:30-7:00 PM", "1415 NE 43rd St Seattle (alley entrance) by MOD Pizza", "https://www.google.com/maps/place/1415+NE+43rd+St,+Seattle,+WA+98105/@47.6592479,-122.3145446,17z/data=!3m1!4b1!4m2!3m1!1s0x5490148b4f6b6617:0xd9007ef2253841c8",
			""],
		["Visit from Western University College of Dental Medicine", "closed",
			"10/19/2016", "6:30-7:30 PM", "THO 134", "http://www.washington.edu/maps/#!/tho",
			"Don't know where to apply or what to look for in a school? Learn about Western University's dental program!"],
		["Navy Health Professions Scholarship Program (HPSP) Scholarship Representative", "closed",
			"10/26/2016", "5:30-6:30 PM", "THO 134", "http://www.washington.edu/maps/#!/tho",
			"Dental school can be expensive, but lots of scholarships are available. Here's your first opportunity of the year!"],
		["Friday Feast with ROOTS", "volunteer",
			"10/28/2016", "4:30-7:00 PM", "1415 NE 43rd St Seattle (alley entrance) by MOD Pizza", "https://www.google.com/maps/place/1415+NE+43rd+St,+Seattle,+WA+98105/@47.6592479,-122.3145446,17z/data=!3m1!4b1!4m2!3m1!1s0x5490148b4f6b6617:0xd9007ef2253841c8",
			""],
		["BLHC & DDS: University of Washington School of Dentistry Professors Panel", "closed",
			"11/09/2016", "5:30-6:30 PM", "THO 134", "http://www.washington.edu/maps/#!/tho",
			"Your chance to ask and hear about specialties and more! Recommended by the officers."],
		["Friday Feast with ROOTS", "volunteer",
			"11/18/2016", "4:30-7:00 PM", "1415 NE 43rd St Seattle (alley entrance) by MOD Pizza", "https://www.google.com/maps/place/1415+NE+43rd+St,+Seattle,+WA+98105/@47.6592479,-122.3145446,17z/data=!3m1!4b1!4m2!3m1!1s0x5490148b4f6b6617:0xd9007ef2253841c8",
			""],
		["Seattle Green Day", "volunteer",
			"11/12/2016", "9:00 AM-1:00 PM", "5200 35th Ave SW, Seattle, Washington 98126", "https://www.google.com/maps/place/5200+35th+Ave+SW,+Seattle,+WA+98126/@47.5556413,-122.3772823,17z/data=!3m1!4b1!4m5!3m4!1s0x549040545e32abb3:0xb67f16ecb8f335b5!8m2!3d47.5556377!4d-122.3750936",
			"Join hundreds of volunteers planting thousands of plants in parks throughout The Emerald City."],
		["DD-Stressing with Bunnies & Silver Member Recognition", "closed",
			"11/30/2016", "5:30-6:30 PM", "THO 134", "http://www.washington.edu/maps/#!/tho",
			"It's so fluffy I'm gonna die! Destress with your fellow predents! (Non-members are welcome, but will need to pay a $5 entry fee.)"],
		["Pre-Health Affair: Casino Night", "open",
			"11/22/2016", "6:00-9:00 PM", "HUB Lyceum", "http://www.washington.edu/maps/#!/hub",
			"ASUW Student Health Consortium is hosting the Pre-Health Affair&mdash;casino style!"],
		["Clearing/Planting on the Burke-Gilman", "volunteer",
			"01/16/2017", "9:00 AM-1:00 PM", "37th Ave NE & NE Blakeley St", "https://www.google.com/maps/place/37th+Ave+NE+%26+NE+Blakeley+St,+Seattle,+WA+98105/@47.6617266,-122.2903759,17z/data=!3m1!4b1!4m5!3m4!1s0x54901484a135fe2d:0xdf9668c3e45d7bdb!8m2!3d47.6617266!4d-122.2881872",
			"For more details on this, please contact our volunteer coordinator Stephanie!"],
		["Winter Quarter General Meeting", "open",
			"01/18/2017", "5:30-6:30 PM", "DEN 113", "http://www.washington.edu/maps/#!/den",
			"We will be introducing officers, presenting future DDS events, volunteer opportunities, and new membership levels that we have implemented!"],
		["Dive Into Dentistry Day", "open",
			"01/21/2017", "8:00 AM-5:00 PM", "University of Washington", "https://www.google.com/maps/place/University+of+Washington/@47.6553351,-122.3057086,17z/data=!3m1!4b1!4m5!3m4!1s0x549014929d8535eb:0x6b742c7901b82ba3!8m2!3d47.6553351!4d-122.3035199",
			"An event run by the UW School of Dentistry; please see their <a href=\"https://www.eventbrite.com/e/dive-into-dentistry-day-tickets-30150374582\" target=\"_blank\">EventBrite</a> for more details!"],
		["Dental Debate", "closed",
			"01/25/2017", "5:30-6:30 PM", "DEN 113", "http://www.washington.edu/maps/#!/den",
			""],
		["Dental Student Panel", "closed",
			"02/08/2017", "5:30-6:30 PM", "DEN 113", "http://www.washington.edu/maps/#!/den",
			""],			
		["DAT Jeopardy & Kaplan Event", "closed",
			"02/22/2017", "5:30-6:30 PM", "DEN 113", "http://www.washington.edu/maps/#!/den",
			""],
		["DDS Social Event & Silver Member Recognition", "closed",
			"03/01/2017", "5:30-6:30 PM", "DEN 113", "http://www.washington.edu/maps/#!/den",
			""],
		["Friday Feast with ROOTS", "volunteer",
			"01/27/2017", "5:00-7:00 PM", "1415 NE 43rd St Seattle (alley entrance) by MOD Pizza", "https://www.google.com/maps/place/1415+NE+43rd+St,+Seattle,+WA+98105/@47.6592479,-122.3145446,17z/data=!3m1!4b1!4m2!3m1!1s0x5490148b4f6b6617:0xd9007ef2253841c8",
			""],
		["Pre-Heath Conference Tabling at the HUB", "volunteer",
			"01/28/2017", "12:00 PM", "HUB Lyceum", "http://www.washington.edu/maps/#!/hub",
			""],
		["Husky Health Bridge & Tent City 3", "volunteer",
			"02/04/2017", "7:00 AM-3:00 PM (see link below for shifts)", "University of Washington W35 Parking Lot", "https://www.google.com/maps/place/Parking+Area+W35,+Seattle,+WA+98105/@47.6530896,-122.3160631,19z/data=!4m12!1m6!3m5!1s0x549014f1ea004e3b:0x544d323df7613d36!2sSchool+of+Aquatic+and+Fishery+Sciences!8m2!3d47.6532563!4d-122.3163485!3m4!1s0x549014f1f6c7988f:0xbd49405bf3feead6!8m2!3d47.6531081!4d-122.3152287",
			"Visit <a href=\"https://wejoinin.com/sheets/vxfhe\" target=\"_blank\">Wejoinin</a> for more details; any questions may be emailed to <a href=\"mailto:manvirk@uw.edu\">Manvir Kaur</a>!"],
		["Science Olympiad Regional Tournament at UW", "volunteer",
			"02/25/2017", "8:00 AM-4:00 PM (various shifts)", "University of Washington", "http://www.washington.edu/maps/",
			"Chipotle lunch provided, contact George for details, commit by February 01, 2017."],
		["Spring Quarter General Meeting", "open",
			"04/05/2017", "5:30-6:30 PM", "DEN 111", "http://www.washington.edu/maps/#!/den",
			"Happy Spring! We will be introducing officers, presenting future DDS events, and volunteer opportunities! Of course there will be food!"],
		["Sue Coldwell: University of Washington School of Dentistry", "closed",
			"04/19/2017", "5:30-6:30 PM", "DEN 111", "http://www.washington.edu/maps/#!/den",
			""],
		["Admissions Workshop", "closed",
			"05/10/2017", "5:30-6:30 PM", "DEN 111", "http://www.washington.edu/maps/#!/den",
			"Applying soon? You will not want to miss this! We'll guide you through AADSAS (the application), personal statements, interviews, and any question you have!"],
		["Kaplan Auction: Last Day!", "closed",
			"04/28/2017", "", "", "",
			"Last day for our annual Kaplan DAT members-only course auction! Place bids <a href=\"https://catalyst.uw.edu/gopost/board/dental/43975/\" target=\"_blank\">here</a>!"],
		["Fremont Earth Day Work Party", "volunteer",
			"04/22/2017", "", "", "",
			""],
		["Friday Feast with ROOTS", "volunteer",
			"04/28/2017", "4:30-7:00 PM", "1415 NE 43rd St Seattle (alley entrance) by MOD Pizza", "https://www.google.com/maps/place/1415+NE+43rd+St,+Seattle,+WA+98105/@47.6592479,-122.3145446,17z/data=!3m1!4b1!4m2!3m1!1s0x5490148b4f6b6617:0xd9007ef2253841c8",
			""],
		["Cards for Seattle Childrens Hospital", "volunteer",
			"05/03/2017", "", "", "",
			""],
		["Friday Feast with ROOTS", "volunteer",
			"05/05/2017", "4:30-7:00 PM", "1415 NE 43rd St Seattle (alley entrance) by MOD Pizza", "https://www.google.com/maps/place/1415+NE+43rd+St,+Seattle,+WA+98105/@47.6592479,-122.3145446,17z/data=!3m1!4b1!4m2!3m1!1s0x5490148b4f6b6617:0xd9007ef2253841c8",
			""],
		["Relay for Life: Molar Bearz", "volunteer",
			"05/13/2017", "12:00 PM", "University of Washington Husky Stadium", "http://www.washington.edu/maps/",
			"Join us for fundraisers across campus to make a difference for those affected by cancer. More information about the event <a href=\"http://main.acsevents.org/site/TR?fr_id=80741&pg=entry\" target=\"_blank\">here</a>, and join our team <a href=\"http://main.acsevents.org/site/TR?fr_id=80741&pg=team&team_id=2145572\" target=\"_blank\">here</a>!"],
		["Volunteer Park Clean Up", "volunteer",
			"05/13/2017", "", "Volunteer Park", "https://www.google.com/maps/place/Volunteer+Park/@47.6300756,-122.3171427,17z/data=!3m1!4b1!4m5!3m4!1s0x54901527fccc34dd:0x2cbf871ebbadc4b4!8m2!3d47.630072!4d-122.314954",
			""],
		["Gold Member Recognition and Elections", "closed",
			"05/24/2017", "5:30-6:30 PM", "DEN 111", "http://www.washington.edu/maps/#!/den",
			"We did it! Last meeting of the year! Of course we'll have food!"],

		// ["", "",
		// 	"", "", "", "",
		// 	""],
	];

	events.sort(function(a, b) {
		if(a[2] == b[2]) return 0;
		else return (a[2] > b[2]) ? -1 : 1;
	});

	var open = false;
	var closed = false;
	var volunteer = false;
	for (var i = events.length - 1; i >= 0; i--) {
		if (new Date(events[i][2]) < new Date() - 24 * 60 * 60 * 1000) var section = "past";
		else if (events[i][1] == "open" || events[i][1] == "closed") var section = "upcoming";
		else if (events[i][1] == "volunteer") var section = "volunteer";

		if (events[i][1] == "open") var icon = "accessibility";
		else if (events[i][1] == "closed") var icon = "lock";
		else if (events[i][1] == "volunteer") var icon = "account_balance";

		if (section == "upcoming" && events[i][1] == "open" && !open) {
			printevent('span#events_short', events, i, icon);
			open = true;
		}
		else if (section == "upcoming" && events[i][1] == "closed" && !closed) {
			printevent('span#events_short', events, i, icon);
			closed = true;
		}
		else if (section == "volunteer" && events[i][1] == "volunteer" && !volunteer) {
			printevent('span#events_short', events, i, icon);
			volunteer = true;
		}
		printevent('span#' + section, events, i, icon);
	}
	
	if ($('span#upcoming').html() == "") $('span#upcoming').html("<h3>No upcoming events</h3>");
	if ($('span#volunteer').html() == "") $('span#volunteer').html("<h3>No upcoming volunteer opportunities</h3>");
	if ($('span#past').html() == "") $('span#past').html("<h3>No past events or volunteer opportunities</h3>");
}

function printevent(anchor, events, i, icon) {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	if (events[i][1] == "open") events[i][1] = "n " + events[i][1];
	else events[i][1] = " " + events[i][1]
	
	var printevent = '<h2 title="This is a' + events[i][1] + ' event">' + events[i][0] + '<i class="material-icons">' + icon + '</i>' + '</h2><h3>';
	printevent += days[new Date(events[i][2]).getDay()] + ', ' + months[new Date(events[i][2]).getMonth()] + ' ' + new Date(events[i][2]).getDate();
	if(anchor == "span#past") printevent += ', ' + new Date(events[i][2]).getFullYear();
	if (events[i][3] != "") printevent += ', from ' + events[i][3];
	if (events[i][5] != "") printevent += ' at <a href="' + events[i][5] + '" target="_blank">' + events[i][4] + '</a></h3>';
	else if (events[i][4] != "") printevent += ' at ' + events[i][4] + '</h3>';
	else printevent += '</h3>';
	if (events[i][6] != "" && anchor != "span#events_short") printevent += '<p style="color: rgb(150, 150, 150); font-size: 14px; padding-left: 30px; margin-top: -10px">' + events[i][6] + '</p>';
	
	if(anchor == "span#past") $(anchor).prepend(printevent);
	else $(anchor).append(printevent);
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

function mobile() {
	if($(window).width() < 900 || $(window).height() < 400) {
		$('#main .nav img').hide();
		$('#main .nav ul').hide();
		$('#main i.material-icons.arrow-down').hide();
		$('#nav .nav img, #nav .nav .name').hide();
		$('.nav, .container, #footer > div').css({'padding-left': '5%', 'padding-right': '5%'});
	}
	else {
		$('#main .nav img').show();
		$('#main .nav ul').show();
		$('#main i.material-icons.arrow-down').show();
		$('#nav .nav img, #nav .nav .name').show();
		$('.nav, .container, #footer > div').css({'padding-left': '10%', 'padding-right': '10%'});
	}
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
$(document).ready(events);
$(document).ready(imagetogif);
$(document).ready(scroll);
$(document).ready(mobile);
$(window).resize(mobile);