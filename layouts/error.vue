<template>
  <section class="hero is-fullheight">
    <div class="hero-body has-text-centered">
      <div class="container">
        <h1 class="title">Ой.</h1>
        <h2 class="subtitle">Это ошибка {{ error.statusCode }}.</h2>
        <nuxt-link to="/" class="button">
          <span class="icon">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </span>&nbsp;
          <span>На главную</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['error'],
    head () {
      return {
        title: `Ошибка ${this.error.statusCode}`,
        meta: [
          {hid: 'description', name: 'description', content: `Error ${this.error.statusCode}. ${this.error.message}`}
        ]
      }
    }
  }
</script>