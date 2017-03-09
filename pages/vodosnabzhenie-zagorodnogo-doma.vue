<template>
  <div class="service-page">
		<div class="service-santeh-vodosnab-background">
	  	<div class="container is-more-padding-vertical">
		  	<div class="content">
			  	<section class="hero is-content">
						<div class="hero-body">
				  		<div class="columns">
				  			<div class="column">
				  				<div class="subtitle is-blue">
				  					<span class="icon"><i class="fa fa-tint"></i></span>
                    Сантехнические работы любой сложности
				  				</div>
				  				<h1 class="title is-green">Водоснабжение загородного дома (скважина/колодец)</h1>
								</div>	  				
				  			<div class="column">
				  				<p>На основании анализа воды, я помогу Вам подобрать оптимальный фильтр очистки, установлю гидроаккумулятор и многое другое. Обещаю вам, что все работы буду выполнены в срок, грамотно и эстетически красиво.</p>
                  <p>Готов выполнить работу «под ключ», полностью сделать разводку труб водоснабжения, установить грамотно всю водоподготовку.</p>
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
                      <li>Я не работаю без <a href="/proektirovanie/">проекта монтажа</a> (я сделаю его Вам бесплатно за 2 недели);</li>
                      <li>Только проверенный мной брэнды труб из полипропилена или метала;</li>
                      <li>Коллектора и прочее только проверенных изготовителей;</li>
                      <li>В своей работе использую дорогой качественный инструмент;</li>
                      <li>Я даю 1 год настоящей гарантии на все свои работы.</li>
                    </ul>
                    <h2>Стоимость услуг</h2>
                    <!--<table class="table is-striped">
                      <tbody>
                        <tr><td>Монтаж инфракрасной плёнки</td><td>100 руб./пог.м</td></tr>
                        <tr><td>Настил подложки</td><td>50 руб./м<sup>2</sup></td></tr>
                        <tr><td>Штробление</td><td>200 руб./пог.м</td></tr>
                        <tr><td>Монтаж терморегулятора</td><td>500 руб./шт.</td></tr>
                        <tr><td>Укладка плитки на пол</td><td>800 руб./м<sup>2</sup></td></tr>
                        <tr><td>Укладка ламинат</td><td>300 руб./м<sup>2</sup></td></tr>
                        <tr><td>Транспортные расходы</td><td>600 руб./поездка</td></tr>
                      </tbody>
                    </table>-->
                  </div>
                  <div class="column is-full-mobile">
                    <h3>Полезные советы <span class="tag is-medium is-success">Бонус!</span></h3>
                    <ul>
                      <li>Я точно знаю какие трубы Вам нужны и их диаметр.</li>
                    </ul>
                    <h3>Скидки от моих партнёров</h3>
                    <ul>
                      <li>СТД Петрович — максимальная скидка по золотой карте</li>
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
            <h2 class="title has-text-centered">Примеры работ, выполненные проекты<br/>#водоснабжение</h2>
            <br/>
            <br/>
            <br/>
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
  import AppOrderForm from '~components/OrderForm.vue';

  if (process.BROWSER_BUILD) {
    const Instafeed = require('instafeed.js');
    const moment = require('moment');

    let loadButton = document.getElementById('load-more');

    let feed = new Instafeed({
      get: 'user',
      userId: 4509914945,
      accessToken: '4509914945.ba4c844.af1348fddd874088b357394b1bc5dfca',
      resolution: 'standard_resolution',
      limit: 60,
      sortBy: 'most-recent',
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
        return image.tags.indexOf('водоснабжение') >= 0;
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
    components: {
      AppOrderForm
    },
    head () {
      return {
        title: 'Водоснабжение загородного дома (скважина/колодец). Сантехнические работы любой сложности',
        meta: [
          {
          	hid: 'description', name: 'description', 
          	content: 'На основании анализа воды, я помогу Вам подобрать оптимальный фильтр очистки, установлю гидроаккумулятор и многое другое. Обещаю вам, что все работы буду выполнены в срок, грамотно и эстетически красиво.'
          },
          {
          	hid: 'keywords', name: 'keywords', 
          	content: 'водоснабжение загородного дома, скважина колодец, сантехнические работы'
          }
        ]
      }
    }
  }
</script>