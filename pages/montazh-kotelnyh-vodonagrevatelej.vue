<template>
  <div class="service-page">
		<div class="service-santeh-background">
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
				  				<h1 class="title is-green">Монтаж котлов и водонагревателей</h1>
								</div>	  				
				  			<div class="column">
				  				<p>Исходя из Ваших потребностей и размера Вашей котельной, грамотно помогу подобрать надежный газовый/электрический котёл или водонагреватель и профессионально установлю его.</p>
                  <p>В своих работах я стремлюсь гармонично разместить оборудование и соблюсти эстетическое восприяние.</p>
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
                      <li>Выбираю только проверенные брэнды труб из полипропилена или метала;</li>
                      <li>Пусконаладочные работы проводят специалисты сервис центра завода изготовителя;</li>
                      <li>Всегда полный отчёт (чеки) по стройматериалам;</li>
                      <li>Я даю 1 год настоящей гарантии на все свои работы.</li>
                    </ul>
                    <h2>Стоимость услуг</h2>
                    <table class="table is-striped">
                      <tbody>
                        <tr><td>Установка настенного котла с подключением<br/>запорной арматуры (расширительный бак и группы безопасности)</td><td>от 4500 руб./шт.</td></tr>
                        <tr><td>Установка напольного котла с подключением<br/>запорной арматуры (расширительный бак и группы безопасности)</td><td>от 8000 руб./шт.</td></tr>
                        <tr><td>Установка расширительного бака отопления</td><td>2500 руб./шт.</td></tr>
                        <tr><td>Монтаж бойлера косвенного нагрева (расширительный бак и группы безопасности)</td><td>от 5000 руб./шт.</td></tr>
                        <tr><td>Монтаж водонагревателя (расширительный бак и группы безопасности)</td><td>от 4500 руб./шт.</td></tr>
                        <tr><td>Опресовка системы (воздух 6 Bar)</td><td>2000 руб.</td></tr>
                        <tr><td>Пуско-наладка котельной (сертифицированным специалистом)</td><td>от 4000 руб.</td></tr>
                        <tr><td>Монтаж электрики котельной (до 10 м)</td><td>от 700 руб.</td></tr>
                        <tr><td>Транспортные расходы (в черте города)</td><td>400 руб./поездка</td></tr>
                        <tr><td>Транспортные расходы (по Лен. обл.)</td><td>от 600 руб./поездка</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="column is-full-mobile">
                    <h3>Полезные советы <span class="tag is-medium is-success">Бонус!</span></h3>
                    <ul>
                      <li>Кто бы Вам не устанавливал оборудование, пусконаладку должен производить только сертифицированный специалист, который сделает запись в паспорте устройства и даст акт выполненных работ. В противном случае — забудьте про гарантию;</li>
                      <li>Я всегда настаиваю на обвязке котлов металлом, потому что это дополнительная гарантия того, что система не порвётся, а так же это просто красиво, но стоимость работ вырастет на 30%.</li>
                    </ul>
                    <h3>Скидки от моих партнёров</h3>
                    <ul>
                      <li>СТД Петрович — максимальная скидка по золотой карте</li>
                      <li>Protherm — 15% от розницы</li>
                      <li>Valliant — 15% от розницы</li>
                      <li>Baxi — 15% от розницы</li>
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
            <h2 class="title has-text-centered">Примеры работ, выполненные проекты<br/>#монтажкотла</h2>
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
        if (image.tags.indexOf('монтажкотла') >= 0 || image.tags.indexOf('монтажводонагревателя') >= 0 || image.tags.indexOf('гдеремонтанет') >= 0) {
          return true;
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
    components: {
      AppOrderForm
    },
    head () {
      return {
        title: 'Монтаж котлов и водонагревателей. Сантехнические работы любой сложности',
        meta: [
          {
          	hid: 'description', name: 'description', 
          	content: 'Инфракрасная пленка — современная система отопления, все чаще используется как основное отопление в загородных домах и как комфортное отопления в городских квартирах. От Вас нам потребуется только план помещения с расстановкой мебели.'
          },
          {
          	hid: 'keywords', name: 'keywords', 
          	content: 'монтаж инфракрасной плёнки, монтаж греющей плёнки, монтаж тёплого пола'
          }
        ]
      }
    }
  }
</script>