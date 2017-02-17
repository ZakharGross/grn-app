if (process.BROWSER_BUILD) {
	(function (d, w) {
		var n = d.getElementsByTagName("script")[0],
		s = d.createElement("script"),
		f = function () {
		  n.parentNode.insertBefore(s, n);
		};

		s.type = "text/javascript";
		s.async = true;
		s.src = "https://vk.com/js/api/openapi.js?139";

		if (w.opera == "[object Opera]") {
	    d.addEventListener("DOMContentLoaded", f, false);
	  } else {
	    f();
	  }
	})(document, window);
}