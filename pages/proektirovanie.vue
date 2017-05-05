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
  import AppOrderForm from '~components/OrderForm.vue';

  import axios from 'axios';  

  if (process.BROWSER_BUILD) {
    
    let url = 'https://gderemonta.net/tech/instagramfeed.php?hashtag=';
    let hashtag = 'проект';
    let feed = [];

    const moment = require('moment');
    moment.locale('ru');

    axios.get(url + hashtag)
    .then((response) => {
      // Response array.
      feed = response.data;

      // Main array loop.
      for (let item in feed) {
        document.getElementById('instafeed').innerHTML += '<div class="column is-3 is-hide instafeed-item"><img style="border-radius:3px;" src="' + feed[item].url + '"/><strong>' + moment(moment.unix(feed[item].created_time).format('YYYY-MM-DD HH:mm')).startOf('minute').fromNow() + '</strong><p>' + feed[item].caption + '</p></div>';
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