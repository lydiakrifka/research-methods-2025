jQuery(document).ready(function($) {

	//login class
	if ($("body").hasClass("path-login")) {
	  $("html").addClass('newloginhtml');
	}

	//headicos prepend
	$('nav.fixed-top.navbar.navbar-bootswatch.navbar-expand.moodle-has-zindex ul.navbar-nav.d-none.d-md-flex').after($( "#headicos" ) );

	//wait for append before doing anything
	$('body#page-site-index .site-topic222').prependTo('body#page-site-index #page').each(function() {
	  
	}); // end on each

	/*$('.nav-collapse .nav .langmenu .dropdown-menu li a').each(function() {
	$(this).appendTo('.fixymenu .fixylang .fixy-text'); 
	});
	*/
	//category hack

	//category 1 and rest of them
	var catclass = 0;
	var catclassA = 0;
	$('#page-site-index .block_course_categories .content .block_course_categories_depth1 > li').each(function() {
	catclassA++;
	//console.log("test top");
		$(this).find("li").each(function() {
			//console.log("test 2nd");
			if($(this).has('div.catheader').length != 0) {
				catclass++;	
				$(this).addClass('newcattop' + catclassA +' newcat catclass' + catclass).appendTo( $( "#region-main" ) );
			}
		});

	});



	$('#page-site-index .newcat').each(function() {
		//if($(this).has('div.catheader').length != 0) {
		//var closeheader = $(this).find( ".classlink" );
		//$(this).find( ".catheader" ).append( $(closeheader) );
		//$(this).append( $(".classlink") );
		//}
		$(this).find( ".classlink" ).wrapAll( "<div class='newcat-subs' />");

	});

	//wrap every three of group in wrap then wrap in a div and add the title
	var times = catclassA;
	var numberofwraps = 0;
	$.each(new Array(times),function(n){
		numberofwraps++;
		var divs = $(".newcat.newcattop" + numberofwraps);
	for(var i = 0; i < divs.length; i+=3) {
	  divs.slice(i, i+3).wrapAll("<ul class='newcatwrap clearfix sub" + numberofwraps + "'></ul>");
		}
		
		$(".sub" + numberofwraps).wrapAll("<div class='sub" + numberofwraps + "div'></div>");
		
		var bbtest = $("#page-site-index .block_course_categories .content .block_course_categories_depth1 li:nth-child(" + numberofwraps + ") .catheader").first().text();
		$(".sub" + numberofwraps + "div").prepend( '<h3> ' + bbtest + '</h3>' );
	});


	//console.log(bbtest);
	//$('#page-site-index .newcat .classlink').wrapAll( "<div class='new' />");

	//course listing jquery changes

	$( ".newcat" ).click(function(e) {
		if($(".newcat-subs",this).hasClass('menu-open')) {
			$(".newcat-subs",this).removeClass('menu-open');
		} else {
			$(".newcat-subs").removeClass('menu-open');
			$(".newcat-subs",this).addClass('menu-open')
		}
	})
});