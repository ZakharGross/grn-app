<template>
  <div class="menu-app">
    <nav class="nav is-fixed has-shadow" role="navigation">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            Где Ремонта Нет!
          </a>
        </div>
        <div class="nav-center is-hidden-touch">
          <a href="tel:+78124253580" class="nav-item phone">
            <span class="icon">
              <i class="fa fa-phone"></i>
            </span>&nbsp;
            (812) 425-35-80
          </a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <nuxt-link tag="a" to="/" class="nav-item">Услуги и цены</nuxt-link>
          <nuxt-link tag="a" to="/" class="nav-item">Отзывы</nuxt-link>
          <nuxt-link tag="a" to="/" class="nav-item">Контакты</nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>