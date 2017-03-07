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
				  				<p>У Вас нет чертежа дома, крыши и так далее, а нужно рассчитать тепло потери или точное количества строительного материала? Не проблема, мы за 4 рабочих дней начертим. Потратив небольшие деньги на чертёж, вы в дальнейшем экономите больше.</p>
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
                    <h2>Что входит в проект/чертёж?</h2>
                    <p>В чертёж дома входит:</p>
                    <ul>
                      <li>Поэтажная разметка</li>
                      <li>Высота потолков, размеры окон, стен</li>
                      <li>Толщина утеплителя</li>
                      <li>Толщина перекрытий и его материал</li>
                    </ul>
                    <p>На основании Вашего чертежа дома мы сделаем Вам проект водяных тёплых полов бесплатно. В проект <a href="/montazh-vodyanogo-teplogo-pola/">тёплого пола</a> входит:</p>
                    <ul>
                      <li>Расчёт теплопотерь</li>
                      <li>Раскладка труб в помещении</li>
                      <li>Размещение автоматики (терморегуляторов)</li>
                      <li>Организация котельной</li>
                      <li>Размещение коллекторов и магистралей</li>
                    </ul>
                    <h2>Стоимость услуги</h2>
                    <table class="table is-striped">
                      <tbody>
                        <tr><td>Чертёж дома до 100 м<sup>2</sup></td><td>5000 руб./проект</td></tr>
                        <tr><td>Чертёж дома до 200 м<sup>2</sup></td><td>8000 руб./проект</td></tr>
                        <tr><td>Проект кровли, водостоков и автоматики</td><td>от 5000 руб./проект</td></tr>
                        <tr><td>Проект <a href="/montazh-vodyanogo-teplogo-pola/">водяного тёплого пола</a> (при условии монтажа)</td><td>бесплатно</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="column is-full-mobile">
                    <div class="bordered is-border-gray">
                      <p><a href="/downloads/sample-project.pdf" target="_blank">Посмотреть пример полностью готового проекта с расчётом теплопотерь, который я для Вас сделаю</a>&nbsp;<span class="icon"><i class="fa fa-angle-right"></i></span></p>
                    </div>
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
            <h2 class="title has-text-centered">Примеры работ, выполненные проекты<br/>#проект</h2>
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
        if (image.caption.text.length > 150) {
          image.caption.text = image.caption.text.slice(0, 150) + '...';
        }
        // Return array.
        if (image.tags.indexOf('проект') >= 0 || image.tags.indexOf('гдеремонтанет') >= 0) {
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