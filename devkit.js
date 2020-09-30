/********************************************
*********************************************

Holy Mountain | DevKit

NOTES:
	-	This is the main/base file for the Holy Mountain plugin suite.
		This file should always be included when using this group of plugins, 
		as it includes core functionality.

CONTENTS:
	-	INITITALIZATION
	-	LINK FORMATTERS
	-	IMAGE FORMATTERS
	-	INSECURE CONTENT CHECKER
	-	INLINE CSS SCANNER (WIP)


*********************************************
********************************************/



/********************************************

INITITALIZATION
	- 	Define global vars, including keystrokes, 
		clicks, and custom console styling.

********************************************/
	
	/***** CONSOLE STYLING *****/

		//Set vars
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

		//Set functions
			$(document).ready(function(){
				$.fn.hm_console_log = function(message) {
					console.log('%c'+ message, HolyMountainDevKit.console_styling);
				};

				$.fn.hm_console_log_2 = function(message) {
					console.log('%c'+ message, HolyMountainDevKit.console_styling_2);
				};

				var message = "---Holy Mountain DevKit initialized.---";
				$('html').hm_console_log(message);

			});

	/***** KEYSTROKES *****/
		var HolyMountain_keyboard = {};

		HolyMountain_keyboard.enter_key = 13;



/********************************************

MENU

********************************************/
	
	/***** ICON *****/


	/***** MODAL *****/





/********************************************

INSECURE CONTENT CHECKER

	- Scans page for <img> elements and elements with inline CSS, 
	then console logs and adds a class to anything 

********************************************/
	$(document).ready(function(){

				
		$('img').each(function(){
			var img_src = $(this).attr('src');
			if(img_src.indexOf("https") >= 0 || img_src.indexOf("data:image") >= 0){
				//do nothing
			}else{
				$(this).addClass("--hm_insecure_content_error");
				
				var message = "Insecure content found: img element, src='"+img_src+"'.  Search for '--hm_insecure_content_error'.";
				$('html').hm_console_log(message);
			}
		});

		$('[style]').each(function(){
			var img_src = $(this).css('background-image');
			if(img_src == '' || img_src.indexOf("https") >= 0 || img_src.indexOf("data:image") >= 0){
				//do nothing
			}else{
				$(this).addClass("--hm_insecure_content_error");

				var message = "Insecure content found: css image element, src='"+img_src+"'";
				$('html').hm_console_log(message);
			}
		});

		$('iframe').each(function(){
			var iframe_src = $(this).attr('src');
			if(iframe_src.indexOf("https") >= 0){
				//do nothing
			}else{
				$(this).addClass("--hm_insecure_content_error");

				var message = "Insecure content found: iframe element, src='"+iframe_src+"'";
				$('html').hm_console_log(message);
			}
		});

	});



/********************************************

INLINE CSS SCANNER

********************************************/
/*
	$(document).ready(function(){

		
		
		$('[style]').each(function(){
			$(this).addClass('--inline_css_detected');
			console.log('%c Element with inline CSS found. Search for "--inline_css_detected".', HolyMountainDevKit.console_styling);

			var message = "Element with inline CSS found. Search for '--inline_css_detected'.";
			$('html').hm_console_log(message);

		});
		
	});
*/


