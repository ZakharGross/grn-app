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
							<div class="columns">
								<div class="column is-full-mobile">
									<h2 class="title">Проектирование и установка систем обогрева</h2>								
									<ul class="list-category">
										<li><a href="">Обогрев труб водоснабжения, канализации</a></li>
										<li><a href="">Обогрев кровли, водостоков, желобов</a></li>
										<li><a href="">Обогрев промышленных объектов</a></li>
										<li><a href="">Обогрев грунта, теплиц</a></li>
										<li><a href="">Обогрев площадок</a></li>
										<li><a href="">Обогрев ступеней</a></li>
									</ul>
									<h2 class="title">Монтаж тёплого пола под любое покрытие</h2>						
									<ul class="list-category">
										<li><a href="">Резистивный кабель, греющие маты</a></li>
										<li><a href="">Система водяного отопления</a></li>
										<li><a href="">Инфракрасная плёнка</a></li>
										<li><a href="">Стержни Эко-Ондоль</a></li>
									</ul>
								</div>
								<div class="column is-full-mobile">
									<div class="bordered">
										<h4>&mdash; Есть вопросы по моей работе или услугам?</h4>
										<h4>&mdash; Оставьте свой номер, я перезвоню вам!</h4>
										<br/>
										<form class="form" action="">
											<p>
												<input type="text" name="client_name" placeholder="Ваше имя"/><br/>
												<input type="tel" name="client_phone" placeholder="Номер телефона"/>
											</p>
											<p><button class="button is-warning is-medium">Отправить!</button></p>
										</form>
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
					<div class="hero-body has-text-centered">
						<h2 class="title">
							Живой журнал в Instagram<br/>
							<a href="https://www.instagram.com/gderemonta_net/" target="_blank">@gderemonta_net</a>
						</h2>
						<div id="instafeed"></div>
		        <!--<button class="button" id="load-more">Показать ещё!</button>-->
					</div>
				</section>
			</div>
		</div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Качественный ремонт и профессиональный монтаж в Санкт-Петербурге и Ленинградской области',
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