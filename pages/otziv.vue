<template>
  <div class="service-page">
    <div class="service-gorestroiteli-background">
      <div class="container is-more-padding-vertical">
        <div class="content">
          <section class="hero is-content">
            <div class="hero-body">
              <div class="columns">
                <div class="column">
                  <div class="subtitle is-blue">
                    <span class="icon"><i class="fa fa-thumbs-o-up"></i></span>&nbsp;&nbsp;Результаты моей работы
                  </div>
                  <h1 class="title is-green">Настоящие отзывы</h1>
                </div>            
                <div class="column">
                  <p>Доверяйте только хорошим строителям и проектировщикам, которые делают всё по уму и дают настоящую гарантию на свои работы!</p>
                </div>
              </div>
            </div>
          </section>
          <section class="hero">
            <div class="hero-body">
              <div id="mc-review"></div>
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
        title: 'Настоящие отзывы',
        meta: [
          {
          	hid: 'description', name: 'description', 
          	content: 'Настоящие отзывы «Где Ремонта Нет!».'
          },
          {
          	hid: 'keywords', name: 'keywords', 
          	content: 'настоящие отзывы, настоящие отзывы где ремонта нет, отзывы монтажников'
          }
        ]
      }
    }
  }
</script>