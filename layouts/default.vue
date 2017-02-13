<template>
  <div class="gnr-app">
  	<app-menu/>
    <nuxt/>
    <app-footer/>    
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