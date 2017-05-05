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
            <div id="instafeed" class="columns is-mobile is-multiline"></div>
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
  import axios from 'axios';  

  if (process.BROWSER_BUILD) {
    
    let url = 'https://gderemonta.net/tech/instagramfeed.php?hashtag=';
    let hashtag = 'когдапрорабмудак';
    let feed = [];

    const moment = require('moment');
    moment.locale('ru');

    axios.get(url + hashtag)
    .then((response) => {
      // Response array.
      feed = response.data;

      // Main array loop.
      for (let item in feed) {
        document.getElementById('instafeed').innerHTML += '<div class="column is-one-quarter-desktop is-half-tablet is-hide instafeed-item"><img style="border-radius:3px;" src="' + feed[item].url + '"/><p><strong>' + moment(moment.unix(feed[item].created_time).format('YYYY-MM-DD HH:mm')).startOf('minute').fromNow() + '</strong></p><p>' + feed[item].caption + '</p></div>';
      }

      // Define count.
      let slice_count = 8;
      let columns = document.querySelectorAll('.instafeed-item');
      let slice_array = [...columns].slice(0, slice_count);
      let load_more_button = document.getElementById('load-more');

      // Show load more button.
      if (columns.length <= slice_count) {
        load_more_button.style.display = 'none';
      }

      // Load more photo.
      if (columns.length > 0) {
        // Show first 8 items.
        for (let item in slice_array) {          
          slice_array[item].classList.remove('is-hide');
        }

        // Click load more button.
        load_more_button.addEventListener('click', function(event) {
          event.preventDefault();

          let columns_hide = document.querySelectorAll('.is-hide.instafeed-item');
          let slice_array_hide = [...columns_hide].slice(0, slice_count);

          // Load more items.
          for (let item in slice_array_hide) {         
            slice_array_hide[item].classList.remove('is-hide');
          }
          
          // Show load more button.
          if (columns_hide.length <= slice_count) {
            load_more_button.style.display = 'none';
          }
        });      
      }
    })
    .catch((error) => {
      console.log(error);
    });
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