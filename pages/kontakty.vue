<template>
  <div class="contact-page">
		<div class="contact-page-background">
	  	<div class="container is-more-padding-vertical">
		  	<div class="content">
			  	<section class="hero is-content">
            <div class="hero-body">
              <div class="columns">
                <div class="column">
                  <h1 class="title is-green">Контакты для связи</h1>
                </div>            
                <div class="column">
                  <p><strong>Адрес офиса:</strong></p>
                  <p>197374, Россия, г. Санкт-Петербург, ул. Планерная, д. 15,<br/>БЦ «СетАвто», офис 211 (2-й этаж, вход с торца).</p>
                  <p>
                    <a href="tel:+78124261920" class="text-large">+7 (812) 426-19-20</a><br/>
                    <a href="mailto:4261920@mail.ru" class="text-large">4261920@mail.ru</a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="hero">
						<div class="hero-body">
				  		<iframe src="https://api-maps.yandex.ru/frame/v1/-/CZtmaRi8" width="100%" height="480" frameborder="0"></iframe>
			  		</div>
			  	</section>
		  	</div>
	  	</div>
  	</div>
  </div>
</template>

<script>  
  export default {
    head () {
      return {
        title: 'Контакты для связи',
        meta: [
          {
          	hid: 'description', name: 'description', 
          	content: 'Контакты «Где Ремонта Нет!» для быстрой связи.'
          },
          {
          	hid: 'keywords', name: 'keywords', 
          	content: 'контакты монтажной организации, контакты где ремонта нет, контакты монтажников'
          }
        ]
      }
    }
  }
</script>