/********************************************
*********************************************

Holy Mountain | Accessibility

*********************************************
********************************************/



/********************************************

INITITALIZATION

********************************************/
$(document).ready(function(){
	var message = "---Holy Mountain Accessibility initialized.---";
	$('html').hm_console_log(message);
});



/********************************************

META TAGS CHECK

********************************************/
$(document).ready(function(){
	

	//title tag check
		if ($("title").length) {
			
			var message = "HTML [title] Meta missing";
			$('html').hm_console_log(message);

		}else{
			
			var message = "HTML [title] Meta missing";
			$('html').hm_console_log(message);

		}

	//description tag check
		if ($("meta[name='description']").length ){
			//do nothing
		}else if ($("meta[name='description']").attr("description") == "" ) {
			
			var message = "HTML [description] meta missing";
			$('html').hm_console_log(message);

		}else{
			
			var message = "HTML [description] meta missing";
			$('html').hm_console_log(message);

		}

	//charset tag check
		if ($("meta[charset]").length ){
			//do nothing
		}else if ($("meta[name='charset']").attr("charset") == "" ) {
			
			var message = "HTML [charset] meta missing";
			$('html').hm_console_log(message);

		}else if ($("meta[name='charset']").attr("charset") != "UTF-8" || $("meta[name='charset']").attr("charset") != "utf-8" ) {
			
			var message = "HTML [charset] meta missing";
			$('html').hm_console_log(message);

		}else{
			
			var message = "HTML [charset] meta missing";
			$('html').hm_console_log(message);

		}

	//viewport tag check
		if ($("meta[name='viewport']").attr("content") != "width=device-width,initial-scale=1") {
			
			var message = "HTML [viewport] meta missing";
			$('html').hm_console_log(message);

		}else{
			//do nothing
		}

	//lang tag check
		if ($("html").has().attr("lang") ){
			//do nothing
		}else if ($("html").attr("lang") == "" ) {
			
			var message = "HTML [lang] attribute missing";
			$('html').hm_console_log(message);

		}else{
			
			var message = "HTML [lang] attribute missing";
			$('html').hm_console_log(message);
		}


});



/********************************************

FORM FIELDS CHECK

********************************************/
$(document).ready(function(){
	

	//form attributes check
		if ($("form").length) {
			$("form").each(function(){
			
				//method
					if ($(this).attr('method') != "") {
						//do nothing
					}else {
						$(this).addClass('--hm_form_method_missing');
						
						var message = 'Missing form method found. Search for "--hm_form_method_missing".';
						$('html').hm_console_log(message);
					}

				//action
					if ($(this).attr('action') != "") {
						//do nothing
					}else {
						$(this).addClass('--hm_form_action_missing');
						
						var message = 'Missing form action found. Search for "--hm_form_action_missing".';
						$('html').hm_console_log(message);
					}

				//id
					if ($(this).attr('id') != "") {
						//do nothing
					}else {
						$(this).addClass('--hm_form_id_missing');
						
						var message = 'Missing form ID found. Search for "--hm_form_id_missing".';
						$('html').hm_console_log(message);
					}
			});

		}

	//input attribute check
		if ($("input").length) {
			$("input").each(function(){
			
				//method
					if ($(this).attr('name') != "") {
						//do nothing
					}else {
						$(this).addClass('--hm_input_name_missing');
						
						var message = 'Missing form method found. Search for "--hm_input_name_missing".';
						$('html').hm_console_log(message);
					}

				//id
					if ($(this).attr('id') != "") {
						//do nothing
					}else {
						$(this).addClass('--hm_form_id_missing');
						
						var message = 'Missing input ID found. Search for "--hm_form_id_missing".';
						$('html').hm_console_log(message);
					}
			});

		}

});



/********************************************

KEYBOARD CONTROLS

********************************************/
var HolyMountain_keyboard = {};

HolyMountain_keyboard.enter_key = 13;
HolyMountain_keyboard.enter_key = 13;

/***** Keyboard click/enter *****/
	$(document).ready(function(){
		
		var focused = $(':focus');

		$(document).keyup(function(e) {
		  if (e.keyCode == HolyMountain_keyboard.enter_key){
		  	e.preventDefault();
		  	$(focused).click();
		  }
		});
	});