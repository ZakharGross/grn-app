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
		  	<section class="hero is-content">
					<div class="hero-body">
						<h1 class="title">Качественный ремонт и профессиональный монтаж</h1>
					</div>
				</section>
			</div>
		</div>  
  	<div class="container">
	  	<div class="content">
		  	<section class="hero is-content">
					<div class="hero-body has-text-centered">
						<h2 class="title">Живой журнал в Instagram</h2>
						<p><span class="icon"><i class="fa fa-instagram"></i></span>&nbsp;<a href="https://www.instagram.com/gderemonta_net/" target="_blank">gderemonta_net</a></p>
						<div id="instafeed"></div>
		        <button class="button" id="load-more">Показать ещё!</button>
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