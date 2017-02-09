if (process.BROWSER_BUILD) {
	let Instafeed = require('instafeed.js');
	let loadButton = document.getElementById('load-more');

	let feed = new Instafeed({
    get: 'user',
    userId: 4509914945,
    accessToken: '4509914945.ba4c844.af1348fddd874088b357394b1bc5dfca',
    resolution: 'standard_resolution',
    limit: 1,
    template: '<p><img class="image" width="100%" style="border-radius:3px;" src="{{image}}"/></p><strong>{{model.created_time}}</strong><br />{{model.caption.text}}',
    after: function() {
	    if (!this.hasNext()) {
	      loadButton.setAttribute('disabled', 'disabled');
	    }
	  },
  });
  
  loadButton.addEventListener('click', function() {
	  feed.next();
	});

  feed.run();
}