<template>
	<div class="offer">
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <div class="columns">
          <div class="column">
            <h4>&mdash; Есть вопросы или уже готовы сделать заказ?</h4>
            <h4>&mdash; Оставьте свой номер, я перезвоню Вам!</h4>
            <img class="image is-256x256 is-hidden-mobile" src="~assets/img/arrow.svg" alt="arrow"/>
          </div>
          <div class="column">
            <form class="form" action="" method="POST">
              <p>
                <input v-model="client_name" name="client_name" placeholder="Ваше имя *" type="text" required="" /><br/>
                <input v-mask="'+7 (###) ###-##-##'" v-model="client_phone" name="client_phone" placeholder="Телефон для связи *" type="tel" required="" />
              </p>
              <p><button v-on:click.prevent="sendOffer()" class="button is-warning is-medium">Отправить заявку!</button></p>
            </form>
          </div>
        </div>		
      </div>
    </div>
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
            if (process.BROWSER_BUILD) {
              const swal = require('sweetalert2');              
              swal('Запрос отправлен!', 'Спасибо! Мы свяжемся с вами в ближайшее время.', 'success');
              setTimeout(function() {
                //yaCounter42715709.reachGoal('call');
                swal.close();
              }, 2000);
            }
          })
          .catch(function (error) {
            if (process.BROWSER_BUILD) {
              const swal = require('sweetalert2');
              swal('Ошибка!', 'Что-то пошло не так..', 'info');
              console.log(error);
              setTimeout(function() {
                swal.close();
              }, 2000);
            }
          });
        }
        else {
          if (process.BROWSER_BUILD) {
            const swal = require('sweetalert2');
            swal('Ошибка!', 'Пожалуйста, проверьте введённые данные и повторите попытку.', 'error');
            setTimeout(function() {
              swal.close();
            }, 2000);
          }
        }
      }
    }
  }
</script>