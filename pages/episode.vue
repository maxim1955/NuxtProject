<template>
  <div class="card_person" v-for="item of episodes " :key="item.id">
    <h2>Карточка эпизода {{ item.name }} </h2>
    <nuxt-link @click="getPerson(item)" to="/character" class="card_text"> Имя: {{ item.name }}</nuxt-link>
     <p>Name: {{item.name}}</p>
    <p>Date: {{item.air_date}}</p>

  </div>
</template>

<script setup>
import {Catalog} from "~/stores/myStore";

const store = Catalog()
store.GET_EPISODE()
store.GET_CATALOG()
const episodes = store.SET_EPISODES


</script>
<style scoped>

</style>
