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
				  				<br/>
			  					<img width="172px" src="~assets/img/zakhar-gross-photo.png" alt="Gross photo"/>
								</div>	  				
				  			<div class="column">
				  				<p>Я по праву могу называть себя строителем, так как выполнил большое количество работ по монтажу и сделал огромное множество проектов по ремонту. Благодаря этому, получил колоссальный опыт в сфере строительства.</p>
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
								<p>Настоящая <strong>гарантия на все работы</strong> по ремонту и монтажу на 1 год</p>
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
									<div class="column is-full-mobile">
										<div class="bordered">
											<h4>&mdash; Есть вопросы по моей работе и услугам?</h4>
											<h4>&mdash; Оставьте свой номер, я перезвоню вам!</h4>
											<br/>
											<app-order-form-front/>
										</div>
										<div class="bordered is-border-gray">
											<h3>#когдапрорабмудак</h3>
											<p>Я много езжу по объектам и встречаю всевозможные «строительные ляпы». <a href="/gorestroiteli/">Посмотрите, как это бывает</a>&nbsp;<span class="icon"><i class="fa fa-angle-right"></i></span></p>
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
  import AppOrderFormFront from '~components/OrderFormFront.vue';
  import AppPageMenu from '~components/PageMenu.vue';

  import axios from 'axios';  

  if (process.BROWSER_BUILD) {
    
    let url = 'https://gderemonta.net/tech/instagramfeed.php?hashtag=';
    let hashtag = '';
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
      AppOrderFormFront, 
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