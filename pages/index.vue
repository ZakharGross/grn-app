<template>
  <div class="index-page">
		<app-menu/>
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
  </div>
</template>

<script>
	import AppMenu from '~components/Menu.vue'

  export default {
  	components: {
	    AppMenu
	  },
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