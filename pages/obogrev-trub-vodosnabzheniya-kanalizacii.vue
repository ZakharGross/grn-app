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
				  					Проектирование и установка систем обогрева
				  				</div>
				  				<h1 class="title is-green">Обогрев труб водоснабжения, канализации</h1>
								</div>	  				
				  			<div class="column">
				  				<p>Текст про суть обогрева труб водоснабжения и канализации (зачем, почему и так далее).</p>
				  			</div>
				  		</div>
			  		</div>
			  	</section>
		  	</div>
	  	</div>
  	</div>
  </div>
</template>

<script>
  import AppOrderForm from '~components/OrderForm.vue';
  
  export default {
    components: {
      AppOrderForm
    },
    head () {
      return {
        title: 'Обогрев труб водоснабжения, канализации. Проектирование и установка систем обогрева',
        meta: [
          {
          	hid: 'description', name: 'description', 
          	content: 'Я не профессиональный строитель, но выполнил большое количество работ по монтажу и сделал огромное множество проектов по ремонту. Благодаря этому, получил колоссальный опыт в сфере строительства.'
          },
          {
          	hid: 'keywords', name: 'keywords', 
          	content: 'проектирование систем обогрева, установка систем обогрева, обогрев труб водоснабжения, обогрев канализации'
          }
        ]
      }
    }
  }
</script>