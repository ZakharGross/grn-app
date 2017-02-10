if (process.BROWSER_BUILD) {
  const Instafeed = require('instafeed.js');
	const moment = require('moment');

	let feed = new Instafeed({
    get: 'user',
    userId: 4509914945,
    accessToken: '4509914945.ba4c844.af1348fddd874088b357394b1bc5dfca',
    resolution: 'standard_resolution',
    limit: 8,
    template: '<div class="column is-one-quarter-desktop is-half-tablet is-full-mobile">' +
      '<figure class="image is-square"><img style="border-radius:3px;" src="{{image}}"/></figure>' +
      '<p><strong>{{model.created_time}}</strong><br/>{{model.caption.text}}</p>' +
      '</div>',
    filter: function(image) {
      // Change created_time.
      moment.locale('ru');
      var timestamp = new Date(image.created_time);
      var dateString = moment.unix(image.created_time).format('YYYY-MM-DD HH:mm');
      image.created_time = moment(dateString).startOf('minute').fromNow();
      // Change caption.
      if (image.caption.text.length > 100) {
        image.caption.text = image.caption.text.slice(0, 100) + '...';
      }
      // Return array.
      return image;
    }
  });

  feed.run();
}