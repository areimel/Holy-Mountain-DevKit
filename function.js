/********************************************
*********************************************

Holy Mountain | Dev Enhancement Suite

*********************************************
********************************************/




/********************************************

LINK FORMATTERS

********************************************/
	
	/********************************************
	TAB INDEX
		- Allows <a> elements without an href to be tab-able
	********************************************/
	$(document).ready(function(){
		$('a[tabindex]').each(function(){
			console.log('Manual tab-index on page');
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
		- Scans page for links that lead outside the site and 
		automatically sets them to open in a new tab.
	********************************************/
	$(document).ready(function(){
		$('a[href]').each(function(){
			var href = $(this).attr('href');
			var target = $(this).attr('target');
			if (href.startsWith('/') || href.startsWith('#')) {
				
			} else {
				$(this).attr('target', '_blank');
				console.log('absolute link caught');
			}
		})
	});

	/********************************************
	LINK REL="NOOPENER"
		- This code sets rel="noopener" for all links with target="_blank"
		This keeps the new page isolated from the first page, which is more secure
		and keeps resources freed up.  Works in conjunction with the TARGET code above.
	********************************************/
	$(document).ready(function(){
		$('a[target="_blank"]').attr('rel','noopener');
	});



/********************************************

IMAGE FORMATTERS

********************************************/

	/********************************************
	ALT TAG FALLBACK
		- Inserts empty ALT tags on imgs that are missing them altogether.
		Also console.log's an alert with the 
	********************************************/
	$(document).ready(function(){
		$('img:not(img[alt])').each(function(){
			var img_src = $(this).attr('src');
			$(this).attr('alt', '');
			$(this).addClass('--alt_tag_fallback');
			console.log('missing alt tag found - src: '+img_src+'. Search for "--alt_tag_fallback".');
		});
		
	});



/********************************************

INLINE CSS SCANNER

********************************************/
	$(document).ready(function(){
		$('[style]').each(function(){
			$(this).addClass('--inline_css_detected');
			console.log('Element with inline CSS found. Search for "--inline_css_detected".');

		});
		
	});


/********************************************

UNIVERSAL KEYBOARD CLICK

********************************************/
$(document).ready(function(){
	//ESC Key Close
	var enter_key = 13;
	var focused = $(':focus');

	$(document).keyup(function(e) {
	  if (e.keyCode == enter_key){
	  	e.preventDefault();
	  	$(focused).click();
	  }
	});
});
