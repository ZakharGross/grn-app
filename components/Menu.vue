<template>
  <div class="menu-app">
    <nav class="nav is-fixed has-shadow" role="navigation">
      <div class="container">
        <div class="nav-left">
          <a href="/" class="nav-item">
            <figure class="image">
              <img src="~assets/img/grn-logo.svg" alt="grn logo"/>
            </figure>
          </a>
        </div>
        <div class="nav-center">
          <a href="tel:+78124253580" class="nav-item phone">
            <span class="icon">
              <i class="fa fa-phone"></i>
            </span>
            <span class="is-hidden-touch">&nbsp;(812) 425-35-80</span>
          </a>
          <a href="#" class="nav-item is-hidden-desktop" v-on:click.prevent="openServiceModal()">
            <span class="icon">
              <i class="fa fa-bars"></i>
            </span>
          </a>
        </div>
        <div class="nav-right nav-menu">
          <a href="#" class="nav-item" v-on:click.prevent="openServiceModal()">Услуги и цены</a>
          <a href="/kontakty/" class="nav-item">Контакты</a>
        </div>
      </div>
    </nav>
    <div class="modal service-modal" v-bind:class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <app-page-menu/>
      </div>
      <button class="modal-close" v-on:click.prevent="closeServiceModal()"></button>
    </div>
  </div>
</template>

<script>
  import AppPageMenu from '~components/PageMenu.vue';

  export default {
    components: {
      AppPageMenu
    },
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      openServiceModal() {
        this.isActive = true;
      },
      closeServiceModal() {
        this.isActive = false;
      }
    }
  }
</script>