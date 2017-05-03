if (process.BROWSER_BUILD) {
	cackle_widget = window.cackle_widget || [];
	cackle_widget.push({widget: 'Review', id: 52711});
	
	(function() {
	    var mc = document.createElement('script');
	    mc.type = 'text/javascript';
	    mc.async = true;
	    mc.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cackle.me/widget.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mc, s.nextSibling);
	})();
}