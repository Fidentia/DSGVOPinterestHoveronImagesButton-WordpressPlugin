jQuery(document).ready(function($) {

	var pin= window.location.protocol + "//" + window.location.host + "/wp-content/plugins/DSGVOPinterestHoveronImagesButton/images/simple_icons/Pinterest.png";

	jQuery ("#content img").before("<div class=mysharecontainer><div class=mysharebutton>");
	jQuery ("#content img").after("</div></div>");
 	jQuery (".mysharebutton").append('<ul class="share-buttons"><li><a class="share" href="http://pinterest.com/pin/create/button/?url=&description=" target="_blank" title="Pin it" onclick="window.open(\'http://pinterest.com/pin/create/button/?url=\' + encodeURIComponent(document.URL) + \'&description=\' +  encodeURIComponent(document.title)); return false;"><img class="pinmenow" alt="Pin it" src= "' + pin + '" /></a></li></ul>');

});
