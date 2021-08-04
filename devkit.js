/********************************************
*********************************************

Holy Mountain | DevKit

NOTES:
	-	This is the main/base file for the Holy Mountain plugin suite.
		This file should always be included when using this group of plugins, 
		as it includes core functionality. As groups of functions increase
		in size, they will be split off into their own JS files.

CONTENTS:
	-	INITITALIZATION
	-	LINK FORMATTERS
	-	IMAGE FORMATTERS
	-	INSECURE CONTENT CHECKER
	-	INLINE CSS SCANNER (WIP)

SNIPPETS:
	-	$(document).ready(function(){});		//Document Ready
	-	$(window).load(function(){});		//Everything loaded


*********************************************
********************************************/


/********************************************

GLOBAL FUNCTIONS & VARIABLES
	- 	Functions required for higher level operations

********************************************/

	/***** URL PARAMETERs *****/
		
		var searchParams = new URLSearchParams(window.location.search);

		//EXAMPLE: 	searchParams.has('hm_devkit') //true or false
		//				var param = searchParams.get('hm_devkit'); //set as var

	/***** URL PARAMETERs *****/


	/***** GLOBAL VARS *****/
		//Vars controlled by Params
			var hm_devkit_on;

	/***** KEYSTROKE VARS *****/
		//Source: https://keycode.info/
		var HolyMountain_keyboard = {};
		HolyMountain_keyboard.enter_key	=	13;
		HolyMountain_keyboard.space_key 	=	32;
		HolyMountain_keyboard.ctrl_key 	=	17;
		HolyMountain_keyboard.shift_key 	=	16;



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

				//Check for URL Param or JS var 
				//Use URL Param for production, use JS var for development
				if(searchParams.has('hm_devkit') || hm_devkit == true){
					$.fn.hm_console_log = function(message) {
						console.log('%c'+ message, HolyMountainDevKit.console_styling);
					};

					$.fn.hm_console_log_2 = function(message) {
						console.log('%c'+ message, HolyMountainDevKit.console_styling_2);
					};

					var message = "---Holy Mountain DevKit initialized.---";
					$('html').hm_console_log(message);
				} else{
					console.log('Holy Mountain DevKit is installed on this site.  Add "?hm_devkit=on" to the URL to access the DevKit.');
				}

				

			});

	

	

/********************************************

MENU

********************************************/
$(document).ready(function(){
	/***** CODE *****/
	var hm_menu_html = '\
		<div id="hm_devkit_overlay menu_close"></div>\
		\
		<div id="hm_devkit_icon">\
			<span></></span>\
		</div>\
		\
		<div id="hm_devkit_menu">\
			<div class="menu_close"></div>\
			<div class="heading">\
				<span>Holy Mountain DevKit</span>\
				<div class="close">CLOSE</div>\
			</div>\
			<ul class="menu_item_list">\
				<li class="menu_item">\
					<input id="hm_devkit_alt_tag_errors" type="checkbox"></input>\
					<div class="custom_checkbox"></div>\
					<label for="hm_devkit_alt_tag_errors">Highlight Passive Fixes</label>\
				</li>\
				<li class="menu_item">\
					<input id="hm_devkit_insecure_content" type="checkbox"></input>\
					<div class="custom_checkbox"></div>\
					<label for="hm_devkit_insecure_content">Highlight Insecure Content</label>\
				</li>\
				<li class="menu_item">\
					<input id="hm_devkit_meta_tags" type="checkbox"></input>\
					<div class="custom_checkbox"></div>\
					<label for="hm_devkit_meta_tags">Show Meta Tags</label>\
				</li>\
				<li class="menu_item">\
					<input id="hm_devkit_form_check" type="checkbox"></input>\
					<div class="custom_checkbox"></div>\
					<label for="hm_devkit_form_check">Highlight Form Errors</label>\
				</li>\
				<li class="menu_item">\
					<input id="hm_devkit_alt_tag_errors" type="checkbox"></input>\
					<div class="custom_checkbox"></div>\
					<label for="hm_devkit_alt_tag_errors">Highlight Image Issue</label>\
				</li>\
				<li class="menu_item">\
					<input id="hm_devkit_alt_tag_errors" type="checkbox"></input>\
					<div class="custom_checkbox"></div>\
					<label for="hm_devkit_alt_tag_errors">Mobile Reach Overlay</label>\
				</li>\
				<li class="menu_item">\
					<input id="hm_devkit_alt_tag_errors" type="checkbox"></input>\
					<div class="custom_checkbox"></div>\
					<label for="hm_devkit_alt_tag_errors">Highlight Contrast Correction</label>\
				</li>\
			</ul>\
			<div class="credit">\
				<span>Planet Caravan Studios</span>\
			</div>\
		</div>\
	';

	var hm_menu_css;
	$("body").append(hm_menu_css);
	$("body").append(hm_menu_html);

	/***** FUNCTIONS *****/

		/***** Open *****/
			$("#hm_devkit_icon").click(function(){
				if($("#hm_devkit_menu").hasClass("active")){
					$("#hm_devkit_overlay").addClass("active");
					$("#hm_devkit_menu").addClass("active");
				}
				
			});

			$("#hm_devkit_overlay").addClass("active");
			$("#hm_devkit_menu").addClass("active");

		/***** Close *****/
});
	





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


