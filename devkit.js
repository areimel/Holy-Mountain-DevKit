/********************************************
*********************************************

Holy Mountain | Dev Enhancement Kit

*********************************************
********************************************/


/********************************************

INITITALIZATION
	- 	Define global vars, including keystrokes, 
		clicks, and custom console styling.

********************************************/
	var HolyMountainDevKit = {};
	
	HolyMountainDevKit.console_styling = "\
		background-color: #282828; \
		color: #33FF33; \
		font-size: 14px; \
		padding: 10px 15px;\
	";

	HolyMountainDevKit.console_styling_2 = "\
		background-color: #282828; \
		color: #ff00ff; \
		font-size: 14px; \
		padding: 10px 15px;\
	";

	$(document).ready(function(){
		$.fn.hm_console_log = function(message) {
				console.log('%c'+ message, HolyMountainDevKit.console_styling);
		};

		$.fn.hm_console_log_2 = function(message) {
				console.log('%c'+ message, HolyMountainDevKit.console_styling_2);
		};

		var message = "Holy Mountain DevKit initialized.";
		$('html').hm_console_log(message);

	});



/********************************************

LINK FORMATTERS

********************************************/
	
	/********************************************
	TAB INDEX
		- 	Allows <a> elements without an href to be tab-able
	********************************************/
	$(document).ready(function(){

		

		

		$('a[tabindex]').each(function(){
			$(this).addClass('--HM_manual_tab_index');
			var message = "Manual tab-index on page. You should double check it. Search for '--HM_manual_tab_index'.";
			$('html').hm_console_log(message);
		});

		$('a:not(a[href])').each(function(){
			$(this).attr('tabindex', '0');
			//console.log('tab index added');
		});

		$('a[href="#"]').each(function(){
			$(this).attr('tabindex', '0');
			//console.log('tab index added');
		});
	});

	/********************************************
	LINK TARGET="_BLANK"
		- 	Scans page for links that lead outside the site and 
			automatically sets them to open in a new tab.
	********************************************/
	$(document).ready(function(){
		$('a[href]').each(function(){
			var href = $(this).attr('href');
			var target = $(this).attr('target');
			if (href.startsWith('/') || href.startsWith('#')) {
				//do something
			} else {
				$(this).attr('target', '_blank');
				//console.log('absolute link caught');
			}
		})
	});

	/********************************************
	LINK REL="NOOPENER"
		- 	This code sets rel="noopener" for all links with target="_blank"
			This keeps the new page isolated from the first page, which is more secure
			and keeps resources freed up.  Works in conjunction with the TARGET code above.
	********************************************/
	$(document).ready(function(){
		$('a[target="_blank"]').attr('rel','noopener');

		$('a[target="_blank"]').each(function(){
			var rel = $(this).attr('rel');
			if (href.startsWith('/') || href.startsWith('#')) {
				//do something
			} else {
				$(this).attr('rel','noopener');
			}
		})
	});



/********************************************

IMAGE FORMATTERS

********************************************/

	/********************************************
	ALT TAG FALLBACK
		- 	Inserts empty ALT tags on imgs that are missing them altogether.
			Also console.log's an alert with the class to search for.
	********************************************/
	$(document).ready(function(){

		

		$('img:not(img[alt])').each(function(){
			var img_src = $(this).attr('src');
			$(this).attr('alt', '');
			$(this).addClass('--alt_tag_fallback');
			console.log('%c missing alt tag found - src: '+img_src+'. Search for "--alt_tag_fallback".', HolyMountainDevKit.console_styling);
		});
		
	});



/********************************************

INLINE CSS SCANNER

********************************************/
	$(document).ready(function(){

		
		
		$('[style]').each(function(){
			$(this).addClass('--inline_css_detected');
			console.log('%c Element with inline CSS found. Search for "--inline_css_detected".', HolyMountainDevKit.console_styling);

		});
		
	});


/********************************************

UNIVERSAL KEYBOARD CLICK

********************************************/
$(document).ready(function(){
	
	var enter_key = 13;
	var focused = $(':focus');

	$(document).keyup(function(e) {
	  if (e.keyCode == enter_key){
	  	e.preventDefault();
	  	$(focused).click();
	  }
	});
});
