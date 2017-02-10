<template>
  <div class="gnr-app">
  	<app-menu/>
    <nuxt/>
    <app-footer/>
    <noscript><img src="https://mc.yandex.ru/watch/42715709" style="position:absolute; left:-9999px;" alt="" /></noscript>
  </div>
</template>

<script>
	import AppMenu from '~components/Menu.vue'
	import AppFooter from '~components/Footer.vue'

	export default {
	  components: {
	    AppMenu, AppFooter
	  }
	}
</script>