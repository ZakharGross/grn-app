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
				  				<p>По моим наблюдениям, в Ленинградской области глубина промерзания почвы примерно 1.3 метра. Не всегда есть возможность углубить или утеплить трубы, чтобы в самый неподходящий момент они не замёрзли, тем более если они с водой, они могут и вовсе порваться.</p>
                  <p>Я выполню работы по утеплению труб и установке греющего саморегулирующегося кабеля на трубу или в трубу. Так же грамотно подберу Вам и установлю терморегулятор, чтобы система работала в автоматическом режиме и экономила Вам электроэнергию.</p>
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
                      <li>Я не буду устанавливать саморегулирующийся кабель в трубу с питьевой водой без пищевого сертификата;</li>
                      <li>Я использую саморегулирующийся кабель только с проверенных мною южнокорейских заводов <a href="http://cabelspb.ru" target="_blank">FINE Korea</a> и <a href="http://samreg.pro" target="_blank">E&S Tec</a>;</li>
                      <li>Я даю 1 год настоящей гарантии на все свои работы.</li>
                    </ul>
                    <h2>Стоимость услуг</h2>
                    <table class="table is-striped">
                      <tbody>
                        <tr><td>Монтаж греющего кабеля в/на трубу</td><td>80 руб./пог.м</td></tr>
                        <tr><td>Монтаж утеплителя на трубу</td><td>50 руб./пог.м</td></tr>
                        <tr><td>Монтаж силового кабеля (в гофре)</td><td>80 руб./пог.м</td></tr>
                        <tr><td>Изолирование греющего кабеля и соединение с силовым</td><td>500 руб./шт.</td></tr>
                        <tr><td>Устройство ввода кабеля в трубу</td><td>500 руб./шт.</td></tr>
                        <tr><td>Штробление (под гофротрубу)</td><td>110 руб./пог.м</td></tr>
                        <tr><td>Монтаж терморегулятора</td><td>360 руб./шт.</td></tr>
                        <tr><td>Транспортные расходы (в черте города)</td><td>400 руб./поездка</td></tr>
                        <tr><td>Транспортные расходы (по Лен. обл.)</td><td>от 600 руб./поездка</td></tr>
                        <tr><td>Разнорабочий</td><td>2000 руб./день</td></tr>
                      </tbody>
                    </table>                    
                  </div>
                  <div class="column is-full-mobile">
                    <h3>Полезные советы <span class="tag is-medium is-success">Бонус!</span></h3>
                    <ul>
                      <li>Кабель греющий в трубу/на трубу без наружного утеплителя&nbsp;&mdash; деньги на ветер;</li>
                      <li>Желательно оставлять в доступном месте соединение кабеля силового с греющим (если перегорает, то именно в месте соединения);</li>
                      <li>Если силовой кабель будет на улице, важно подобрать специально предназначенный для улицы.</li>
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
            <h2 class="title has-text-centered">Примеры работ, выполненные проекты<br/>#обогревтрубы</h2>
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
        return image.tags.indexOf('обогревтрубы', 'стройка') > 0;
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
        title: 'Обогрев труб водоснабжения, канализации. Установка систем обогрева',
        meta: [
          {
          	hid: 'description', name: 'description', 
          	content: 'По моим наблюдениям, в Ленинградской области глубина промерзания почвы примерно один метр. Не всегда есть возможность углубить или утеплить трубы, чтобы в самый не подходящий момент они не замёрзли, тем более если они с водой, они могут и вовсе порваться.'
          },
          {
          	hid: 'keywords', name: 'keywords', 
          	content: 'обогрев труб, обогрев канализации, установка систем обогрева'
          }
        ]
      }
    }
  }
</script>