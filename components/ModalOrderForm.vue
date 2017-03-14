<template>
	<div class="offer">
    <form class="form" action="" method="POST">
      <h4>Закажите водяной пол сейчас или задайте мне вопросы!</h4>
      <div class="columns">
        <div class="column is-one-third"><input v-model="client_name" name="client_name" placeholder="Имя *" type="text" required="" /></div>
        <div class="column is-one-third"><input v-mask="'+7 (###) ###-##-##'" v-model="client_phone" name="client_phone" placeholder="Телефон *" type="tel" required="" /></div>
        <div class="column is-one-third"><button v-on:click.prevent="sendOffer()" class="button is-warning is-medium">Отправить заявку</button></div>
      </div>
    </form>
  </div>
</template>

<script>
	import Vue from 'vue';
  import VueMask from 'v-mask';
  import axios from 'axios';
  
  Vue.use(VueMask);

	export default {
		data() {
      return {
        client_name: '',
        client_phone: ''
      }
    },
    methods: {
      sendOffer() {
        if (this.client_name !== '' && this.client_phone !== '') {
          axios.post('/tech/sendmail.php?client_name=' + encodeURIComponent(this.client_name) + '&client_phone=' + encodeURIComponent(this.client_phone))
          .then(function (response) {             
            yaCounter42715709.reachGoal('call');
            alert('Запрос отправлен, спасибо! Я свяжусь с Вами в ближайшее время.');
          })
          .catch(function (error) {
            alert('Ошибка! Что-то пошло не так..');
          });
        }
        else {
          alert('Ошибка! Пожалуйста, проверьте введённые данные и повторите попытку.');
        }
      }
    }
  }
</script>