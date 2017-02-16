<template>
  <div class="index-page">
		<div class="index-background">
	  	<div class="container is-more-padding-vertical">
		  	<div class="content">
			  	<section class="hero is-content">
						<div class="hero-body">
				  		<div class="columns">
				  			<div class="column">	  				
				  				<div class="title is-green">Привет! Меня зовут Захар Гросс.</div>
				  				<div class="line-green"></div>
								</div>	  				
				  			<div class="column">
				  				<p>Я не профессиональный строитель, но выполнил большое количество работ по монтажу и сделал огромное множество проектов по ремонту. Благодаря этому, получил колоссальный опыт в сфере строительства.</p>
				  				<p>У всех бывают ошибки, но что важно&nbsp;&mdash; я всегда платил за них из своего кармана, так как за выполненую работу я отвечаю лично! Поэтому мой опыт можно считать самым дорогим.</p>
				  				<p>Я постараюсь сделать так, чтобы после выполненой работы&nbsp;&mdash; вы остались полностью довольны результатом и порекомендовали «Где Ремонта Нет!» друзьям и знакомым.</p>
				  				<br/>
				  				<figure class="image is-96x96">
				  					<img src="~assets/img/zakhar-gross-podpis.png" alt="Gross podpis">
				  				</figure>
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
						<h1 class="title has-text-centered">Качественный ремонт и профессиональный монтаж</h1>
						<br/>
						<br/>
						<br/>
						<div class="columns text-medium">
							<div class="column is-one-quarter has-text-centered">
								<figure class="image is-128x128">
									<img src="~assets/img/zameri.svg" alt="zameri"/>
								</figure>
								<br/>
								<p><strong>Бесплатный выезд замерщика</strong> для составления сметы в день обращения</p>
							</div>
							<div class="column is-one-quarter has-text-centered">
								<figure class="image is-128x128">
									<img src="~assets/img/list.svg" alt="list"/>
								</figure>
								<br/>
								<p>Чёткое <strong>соблюдение сроков договора</strong> и заявленного качества материалов</p>
							</div>
							<div class="column is-one-quarter has-text-centered">
								<figure class="image is-128x128">
									<img src="~assets/img/otvet.svg" alt="otvet"/>
								</figure>
								<br/>
								<p>Личная <strong>ответственность</strong> за финальный результат работ</p>
							</div>
							<div class="column is-one-quarter has-text-centered">
								<figure class="image is-128x128">
									<img src="~assets/img/garantia.svg" alt="garantia"/>
								</figure>
								<br/>
								<p>Настоящая <strong>гарантия на все работы</strong> по ремонту и монтажу на 3 года</p>
							</div>
						</div>
					</div>
				</section>
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
										<app-page-menu/>
									</div>
									<div class="column is-full-mobile middle-aligned">
										<div class="bordered">
											<h4>&mdash; Есть вопросы по моей работе и услугам?</h4>
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
		  	<section class="hero is-medium">
					<div class="hero-body">
						<h2 class="title has-text-centered">
							Живой журнал в Instagram<br/>
							<a href="https://www.instagram.com/gderemonta_net/" target="_blank">@gderemonta_net</a>
						</h2>
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
  import AppPageMenu from '~components/PageMenu.vue';

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
	      return image;
	    },
	    after: function() {
        if (!this.hasNext()) {
          loadButton.classList.add('is-hidden-mobile', 'is-hidden-tablet', 'is-hidden-desktop');
        }
      },
	  });

	  loadButton.addEventListener('click', function() {
      feed.next();
    });
    
    feed.run();
	}
  
  export default {
    components: {
      AppOrderForm, 
      AppPageMenu
    },
    head () {
      return {
        title: 'Качественный ремонт и профессиональный монтаж в Санкт-Петербурге и Ленинградской области',
        meta: [
          {
          	hid: 'description', name: 'description', 
          	content: 'Я не профессиональный строитель, но выполнил большое количество работ по монтажу и сделал огромное множество проектов по ремонту. Благодаря этому, получил колоссальный опыт в сфере строительства.'
          },
          {
          	hid: 'keywords', name: 'keywords', 
          	content: 'проектирование систем обогрева, установка систем обогрева, обогрев труб водоснабжения, обогрев канализации, обогрев кровли, обогрев водостоков, обогрев желобов, обогрев промышленных объектов, обогрев грунта, обогрев теплиц, обогрев площадок, обогрев ступеней, монтаж тёплого пола, тёплый пол любое покрытие, резистивный кабель, греющие маты, система водяного отопления, инфракрасная плёнка, стержни эко ондоль'
          }
        ]
      }
    }
  }
</script>