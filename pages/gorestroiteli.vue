<template>
  <div class="service-page">
		<div class="service-gorestroiteli-background">
	  	<div class="container is-more-padding-vertical">
		  	<div class="content">
			  	<section class="hero is-content">
						<div class="hero-body">
				  		<div class="columns">
				  			<div class="column">
				  				<div class="subtitle is-blue">
				  					<span class="icon"><i class="fa fa-thumbs-o-down"></i></span>&nbsp;&nbsp;Сборник строительных ляпов
				  				</div>
				  				<h1 class="title is-green">#когдапрорабмудак</h1>
								</div>	  				
				  			<div class="column">
				  				<p>Я много езжу по объектам и встречаю всевозможные «строительные ляпы». Многие из них происходят из-за несоблюдения требований СНиП, а некоторые из-за низкого качества рабочей силы.</p>
                  <p>Доверяйте только хорошим строителям и проектировщикам, которые делают всё по уму и дают настоящую гарантию на свои работы!</p>
				  			</div>
				  		</div>
			  		</div>
			  	</section>
		  	</div>
	  	</div>
  	</div>
    <div class="container">
      <div class="content">
        <section class="hero is-small">
          <div class="hero-body">
            <div class="columns is-mobile is-multiline" id="instafeed"></div>
            <br/>
            <div class="has-text-centered">
              <button class="is-medium is-info is-outlined button" id="load-more">Посмотреть ещё!</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  if (process.BROWSER_BUILD) {
    const Instafeed = require('instafeed.js');
    const moment = require('moment');

    let loadButton = document.getElementById('load-more');

    let feed = new Instafeed({
      get: 'user',
      userId: 4509914945,
      accessToken: '4509914945.ba4c844.af1348fddd874088b357394b1bc5dfca',
      resolution: 'standard_resolution',
      //limit: 8,
      template: '<div class="column is-one-quarter-desktop is-half-tablet is-full-mobile">' +
        '<figure class="image is-square"><img style="border-radius:3px;" src="{{image}}" alt="image {{model.created_time}}"/></figure>' +
        '<p><strong>{{model.created_time}}</strong><br/>{{model.caption.text}}</p>' +
        '</div>',
      filter: function(image) {
        // Change created_time.
        moment.locale('ru');
        var timestamp = new Date(image.created_time);
        var dateString = moment.unix(image.created_time).format('YYYY-MM-DD HH:mm');
        image.created_time = moment(dateString).startOf('minute').fromNow();
        // Change caption.
        if (image.caption.text.length > 250) {
          image.caption.text = image.caption.text.slice(0, 250) + '...';
        }
        // Return array.
        if (image.tags.indexOf('когдапрорабмудак') >= 0 || image.tags.indexOf('горестроители') >= 0) {
          return image;
        }
      },
      after: function() {
        if (!this.hasNext()) {
          loadButton.classList.add('is-hidden-mobile', 'is-hidden-tablet', 'is-hidden-desktop');
        }
      }
    });

    loadButton.addEventListener('click', function() {
      feed.next();
    });

    feed.run();
  }
  
  export default {
    head () {
      return {
        title: '#когдапрорабмудак — сборник строительных ляпов',
        meta: [
          {
          	hid: 'description', name: 'description', 
          	content: 'Я много езжу по объектам и встречаю всевозможные «строительные ляпы». Многие из них происходят из-за несоблюдения требований СНиП, а некоторые из-за низкого качества рабочей силы.'
          },
          {
          	hid: 'keywords', name: 'keywords', 
          	content: 'прораб мудак, ляпы на стройке, строительные ляпы, горе строители, джамшут, равшан'
          }
        ]
      }
    }
  }
</script>