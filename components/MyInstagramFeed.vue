<template>
	<div class="my-intagram-feed">
    <div v-for="photo in feed">
      {{ photo.url }}
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  let feed = [];
  let url = 'https://gderemonta.net/tech/instagramfeed.php';

	export default {
    mounted() {
      axios.get(url + '?hashtag=#водянойтеплыйпол')
      .then(function(response) {
        console.log(response.data);
        feed.push(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
</script>