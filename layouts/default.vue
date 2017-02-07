<template>
  <div class="gnr-app">
    <nuxt/>
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from '~components/Footer.vue'

export default {
  components: {
    AppFooter
  }
}
</script>