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
	

	//Title tag check
	if (document.title != "") {
		//do nothing
	}else{

		var message = "Title Meta missing";
		$('html').hm_console_log(message);
	}

	//description tag check
	if ( $("meta[name='description']").attr("content") != "") {
		//do nothing
	}else{

		var message = "Description Meta missing";
		$('html').hm_console_log(message);
	}

	//viewport tag check
	if ($("meta[name='viewport']").attr("content") != "width=device-width,initial-scale=1") {
		var message = "Viewport Meta missing";
		$('html').hm_console_log(message);
	}else{
		//do nothing
	}

	//lang tag check
	if ($("html").attr("lang") == "") {
		var message = "HTML Lang attribute missing";
		$('html').hm_console_log(message);
	}else{
		//do nothing
	}


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