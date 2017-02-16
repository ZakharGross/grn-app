<template>
  <div class="service-page">
		<div class="service-obogrev-background">
	  	<div class="container is-more-padding-vertical">
		  	<div class="content">
			  	<section class="hero is-content">
						<div class="hero-body">
				  		<div class="columns">
				  			<div class="column">
				  				<div class="subtitle is-blue">
				  					<span class="icon"><i class="fa fa-snowflake-o"></i></span>
				  					Установка систем обогрева
				  				</div>
				  				<h1 class="title is-green">Обогрев труб водоснабжения, канализации</h1>
								</div>	  				
				  			<div class="column">
				  				<p>Описание основных работ при обогреве труб водоснабжения и канализации.</p>
				  			</div>
				  		</div>
			  		</div>
			  	</section>
		  	</div>
	  	</div>
  	</div>
    <div class="is-gray">
      <div class="container">
        <div class="content">
          <section class="hero is-medium">
            <div class="hero-body">
              <div class="menu-page-app">
                <div class="columns">
                  <div class="column is-full-mobile">
                    <h2>Почему мне доверяют такие работы?</h2>
                    <p>Причина проста &mdash; профессионализм и компетентность.</p>
                    <h2>Стоимость услуги</h2>
                    <p>Цены.</p>
                  </div>
                  <div class="column is-full-mobile middle-aligned">
                    <div class="bordered">
                      <h4>&mdash; Есть ещё вопросы по данной услуге?</h4>
                      <h4>&mdash; Оставьте свой номер, я перезвоню вам!</h4>
                      <br/>
                      <app-order-form/>
                    </div>
                  </div>
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
            <h2 class="title has-text-centered">Примеры работ, выполненные проекты</h2>
            <br/>
            <br/>
            <br/>
            <div class="columns is-mobile is-multiline" id="instafeed"></div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import AppOrderForm from '~components/OrderForm.vue';

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
        if (image.caption.text.length > 150) {
          image.caption.text = image.caption.text.slice(0, 150) + '...';
        }
        // Return array.
        return image.tags.indexOf('обогревгрунта') > 0;
      }
    });
    
    feed.run();
  }
  
  export default {
    components: {
      AppOrderForm
    },
    head () {
      return {
        title: 'Обогрев труб водоснабжения, канализации. Проектирование и установка систем обогрева',
        meta: [
          {
          	hid: 'description', name: 'description', 
          	content: 'Я не профессиональный строитель, но выполнил большое количество работ по монтажу и сделал огромное множество проектов по ремонту. Благодаря этому, получил колоссальный опыт в сфере строительства.'
          },
          {
          	hid: 'keywords', name: 'keywords', 
          	content: 'проектирование систем обогрева, установка систем обогрева, обогрев труб водоснабжения, обогрев канализации'
          }
        ]
      }
    }
  }
</script>