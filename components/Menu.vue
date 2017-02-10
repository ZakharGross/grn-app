<template>
  <div class="menu-app">
    <nav class="nav is-fixed has-shadow" role="navigation">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <figure class="image">
              <img src="~assets/img/grn-logo.svg" alt="grn logo"/>
            </figure>
          </a>
        </div>
        <div class="nav-center">
          <a href="tel:+78124253580" class="nav-item phone">
            <span class="icon">
              <i class="fa fa-phone"></i>
            </span>&nbsp;
            <span class="is-hidden-touch">(812) 425-35-80</span>
          </a>
        </div>
        <div class="nav-right nav-menu">
          <nuxt-link tag="a" to="/" class="nav-item">Услуги и цены</nuxt-link>
          <nuxt-link tag="a" to="/" class="nav-item">Контакты</nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>