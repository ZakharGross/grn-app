<template>
  <div class="service-page">
		<div class="service-proekt-background">
	  	<div class="container is-more-padding-vertical">
		  	<div class="content">
			  	<section class="hero is-content">
						<div class="hero-body">
				  		<div class="columns">
				  			<div class="column">
				  				<div class="subtitle is-blue">
				  					<span class="icon"><i class="fa fa-object-ungroup"></i></span>&nbsp;&nbsp;Проектирование
				  				</div>
				  				<h1 class="title is-green">Комплексное проектирование</h1>
								</div>	  				
				  			<div class="column">
				  				<p>У Вас нет чертежа дома, крыши и так далее, а нужно рассчитать тепло потери или точное количества строительного материала? Не проблема, мы за 5 рабочих дней начертим. Потратив небольшие деньги на чертёж, Вы в дальнейшем&nbsp;&mdash; экономите больше.</p>
				  			</div>
				  		</div>
			  		</div>
			  	</section>
		  	</div>
	  	</div>
  	</div>
    <div class="container">
      <div class="content">
        <section class="hero is-medium">
          <div class="hero-body">
            <div class="columns has-text-centered">
              <div class="column is-10 is-offset-1">
                <div class="columns">
                  <div class="column is-full-mobile">
                    <img class="image is-128x128" src="~assets/img/money.svg" alt="Шаг 1"/><br/>Оплата работ по проектированию и транспортные расходы
                  </div>
                  <div class="column is-full-mobile">
                    <img class="image is-128x128" src="~assets/img/viezd.svg" alt="Шаг 2"/><br/>Выезд проектировщика на объект, произведение замеров
                  </div>                
                  <div class="column is-full-mobile">
                    <img class="image is-128x128" src="~assets/img/oplata-100.svg" alt="Шаг 3"/><br/>Спустя 5 дней&nbsp;&mdash; вы получаете полностью готовый проект
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="is-gray">
      <div class="container">
        <div class="content">
          <section class="hero is-small">
            <div class="hero-body">
              <div class="menu-page-app">
                <div class="columns">
                  <div class="column is-full-mobile">
                    <h2>Что входит в проект (чертёж)?</h2>
                    <ul>
                      <li>Поэтажная разметка;</li>
                      <li>Высота потолков, размеры окон, стен;</li>
                      <li>Толщина утеплителя;</li>
                      <li>Толщина перекрытий и его материал.</li>
                    </ul>
                    <h2>Стоимость проектирования</h2>
                    <table class="table is-striped">
                      <tbody>
                        <tr><td>Чертёж дома до 100 м<sup>2</sup></td><td>5000 руб./проект</td></tr>
                        <tr><td>Чертёж дома до 200 м<sup>2</sup></td><td>8000 руб./проект</td></tr>
                        <tr><td>Проект кровли, водостоков и автоматики</td><td>от 5000 руб./проект</td></tr>
                        <tr><td>Проект <a href="/montazh-vodyanogo-teplogo-pola/">водяного тёплого пола</a> (при условии монтажа)</td><td>бесплатно</td></tr>
                        </tbody>
                    </table>
                    <h3>Выезд на объект</h3>
                    <table class="table is-striped">
                      <tbody>
                        <tr><td>Транспортные расходы (в черте города)</td><td>400 руб./поездка</td></tr>
                        <tr><td>Транспортные расходы (по Лен. обл.)</td><td>от 600 руб./поездка</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="column is-full-mobile">
                    <div class="bordered is-border-gray less-margin">
                      <p>На основании чертежа дома, я сделаю для Вас проект <a href="/montazh-vodyanogo-teplogo-pola/">водяных тёплых полов</a> бесплатно. В такой проект будут входить:</p>
                      <ul>
                        <li>Разработка графических материалов технического решения систем напольного отопления (снеготаяния):
                          <ul>
                            <li>Схемы прокладки магистральных трубопроводов;</li>
                            <li>Схемы укладки демпферной ленты;</li>
                            <li>Планы раскладки контуров системы напольного отопления (снеготаяния);</li>
                            <li>Схемы расстановки оборудования (автоматики, узлов, механизмов и так далее).</li>                          
                          </ul>
                        </li>
                        <li>Разработка спецификации оборудования и материалов системы напольного отопления (снеготаяния).</li>
                      </ul>                    
                      <p><a href="/downloads/sample-project.pdf" target="_blank">Посмотреть пример полностью готового проекта с расчётом теплопотерь, который я для Вас сделаю</a>&nbsp;<span class="icon"><i class="fa fa-angle-right"></i></span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="is-order-form">
      <div class="container">
        <div class="content">
          <section class="hero is-medium">
            <div class="hero-body">
              <app-order-form/>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <section class="hero is-small">
          <div class="hero-body">
            <h2 class="title has-text-centered">Рабочий процесс, выполненные проекты</h2>
            <h4 class="subtitle has-text-centered"><a href="https://www.instagram.com/gderemonta_net/" target="_blank">@gderemonta_net</a> #проект</h4>
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
      accessToken: '4509914945.1677ed0.e1deee9457f74189b0028f9fd7f0eeda',
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
        return image.tags.indexOf('проект') >= 0;
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
        title: 'Комплексное проектирование. Проектирование',
        meta: [
          {
          	hid: 'description', name: 'description', 
          	content: ''
          },
          {
          	hid: 'keywords', name: 'keywords', 
          	content: ''
          }
        ]
      }
    }
  }
</script>