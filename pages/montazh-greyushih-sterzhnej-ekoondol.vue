<template>
  <div class="service-page">
		<div class="service-montazh-ondol-background">
	  	<div class="container is-more-padding-vertical">
		  	<div class="content">
			  	<section class="hero is-content">
						<div class="hero-body">
				  		<div class="columns">
				  			<div class="column">
				  				<div class="subtitle is-blue">
				  					<span class="icon"><i class="fa fa-fire"></i></span>
				  					Монтаж тёплого пола
				  				</div>
				  				<h1 class="title is-green">Монтаж греющих стержней «Эко-Ондоль»</h1>
								</div>	  				
				  			<div class="column">
				  				<p>Система Эко-Ондоль совсем новый и неизвестный продукт на рынке России. На первом монтаже у меня были сомнения в эффективности данной системы отопления. Сейчас я могу смело сказать, что система очень проста в установке, не требует отдельного помещения (котельной), при правильном монтаже показала себя более экономичной, чем другие способы отопления.</p>
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
                    <h2>Принципы моей работы</h2>
                    <ul>
                      <li>Я использую нагревательные стержки только с проверенного мною южнокорейского завода <a href="http://ecoondol.pro" target="_blank">СаммёнгТех</a>;</li>
                      <li>Обязательный монтаж терморегулятора;</li>
                      <li>Я даю 1 год настоящей гарантии на все свои работы.</li>
                    </ul>
                    <h2>Стоимость услуг</h2>
                    <table class="table is-striped">
                      <tbody>
                        <tr><td>Монтаж стержней</td><td>100 руб./пог.м</td></tr>
                        <tr><td>Укладка пенополистерола</td><td>50 руб./м<sup>2</sup></td></tr>
                        <tr><td>Укладка арматурной сетки</td><td>50 руб./м<sup>2</sup></td></tr>
                        <tr><td>Штробление (под гофротрубу)</td><td>110 руб./пог.м</td></tr>
                        <tr><td>Монтаж терморегулятора</td><td>360 руб./шт.</td></tr>
                        <tr><td>Укладка плитки на пол</td><td>800 руб./м<sup>2</sup></td></tr>
                        <tr><td>Укладка ламинат</td><td>300 руб./м<sup>2</sup></td></tr>
                        <tr><td>Транспортные расходы (в черте города)</td><td>400 руб./поездка</td></tr>
                        <tr><td>Транспортные расходы (по Лен. обл.)</td><td>от 600 руб./поездка</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="column is-full-mobile">
                    <h3>Полезные советы <span class="tag is-medium is-success">Бонус!</span></h3>
                    <ul>
                      <li>Укладывайте пол на сетку, за счёт этого стержень преподнимается в стяжке;</li>
                      <li>Укладывайте пенополистерол с плёнкой, чтобы направить тепло в нужную сторону.</li>
                    </ul>
                    <div class="bordered">
                      <h4>&mdash; Есть ещё вопросы или готовы сделать заказ?</h4>
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
            <h2 class="title has-text-centered">Примеры работ, выполненные проекты<br/>#монтажондоля</h2>
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
        return image.tags.indexOf('монтажондоля', 'стройка') > 0;
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
        title: 'Монтаж греющих стержней «Эко-Ондоль». Монтаж тёплого пола',
        meta: [
          {
          	hid: 'description', name: 'description', 
          	content: 'Монтаж греющих стержней «Эко-Ондоль».'
          },
          {
          	hid: 'keywords', name: 'keywords', 
          	content: 'монтаж греющих стержней, монтаж эко ондоль, монтаж тёплого пола'
          }
        ]
      }
    }
  }
</script>