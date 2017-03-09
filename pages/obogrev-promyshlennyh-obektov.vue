<template>
  <div class="service-page">
		<div class="service-obogrev-promka-background">
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
				  				<h1 class="title is-green">Обогрев промышленных объектов</h1>
								</div>	  				
				  			<div class="column">
				  				<p>В основном, я производил монтаж кабеля саморегулирующего для обогрева баков (цистерн), а также трубопроводов с агрессивной средой.</p>
                  <p>Если следовать строго проекту, никаких проблем не будет, тем более у меня бригада профессионалов.</p>
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
                      <li>Я не работаю без <a href="/proektirovanie/">проекта</a> в промышленном обогреве;</li>
                      <li>Я произвожу монтаж греющего кабеля, имеющего необходимые сертификаты и предназначенный именно для промышленного обогрева;</li>
                      <li>Я использую саморегулирующийся кабель только с проверенных мною южнокорейских заводов <a href="http://cabelspb.ru" target="_blank">FINE Korea</a> и <a href="http://samreg.pro" target="_blank">E&S Tec</a>;</li>
                      <li>Всегда полный отчёт (чеки) по стройматериалам;</li>
                      <li>Я даю 1 год настоящей гарантии на все свои работы.</li>
                    </ul>
                    <h2>Стоимость услуг</h2>
                    <table class="table is-striped">
                      <tbody>
                        <tr><td>Монтаж греющего кабеля на высоте</td><td>120 руб./пог.м</td></tr>
                        <tr><td>Монтаж силового кабеля</td><td>80 руб./пог.м</td></tr>
                        <tr><td>Изолирование греющего кабеля и соединение с силовым</td><td>500 руб./шт.</td></tr>
                        <tr><td>Штробление (под гофротрубу)</td><td>110 руб./пог.м</td></tr>
                        <tr><td>Монтаж терморегулятора</td><td>360 руб./шт.</td></tr>
                        <tr><td>Транспортные расходы (в черте города)</td><td>400 руб./поездка</td></tr>
                        <tr><td>Транспортные расходы (по Лен. обл.)</td><td>от 600 руб./поездка</td></tr>
                        <tr><td>Разнорабочий (по необходимости)</td><td>2000 руб./день</td></tr>                        
                      </tbody>
                    </table>
                  </div>
                  <div class="column is-full-mobile">
                    <!--<h3>Полезные советы <span class="tag is-medium is-success">Бонус!</span></h3>
                    <ul>
                      <li>Очень важно знать при какой температуре воздуха, греющего кабель потребляет свою номинальную мощность. Это Ваша экономия электроэнергии;</li>
                      <li>Желательно оставлять в доступном месте соединение кабеля силового с греющем. Если перегорает, то именно в месте соединения;</li>
                      <li>Если силовой кабель будет на улице, важно подобрать специально предназначенный для улицы.</li>
                    </ul>-->
                    <h3>Скидки от моих партнёров</h3>
                    <ul>
                      <li>СТД Петрович — максимальная скидка по золотой карте</li>
                      <li>FINE Korea — 15% от розницы</li>
                      <li>E&S Tec — 15% от розницы</li>
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
          </section>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <section class="hero is-small">
          <div class="hero-body">
            <h2 class="title has-text-centered">Примеры работ, выполненные проекты<br/>#промышленныйобогрев</h2>
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
        return image.tags.indexOf('промышленныйобогрев') >= 0;
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
        title: 'Обогрев промышленных объектов. Установка систем обогрева',
        meta: [
          {
          	hid: 'description', name: 'description', 
          	content: 'В основном, я производили монтаж кабеля саморегулирующего для обогрева баков (цистерн), а также трубопроводов с агрессивной средой.'
          },
          {
          	hid: 'keywords', name: 'keywords', 
          	content: 'обогрев промышленных объектов, установка систем обогрева'
          }
        ]
      }
    }
  }
</script>