<template>
    <div>
        <h1>Характеристика</h1>
        <div class="card_person" v-for="item of person">
            <div class="">
                <h2>Карточка персонажа {{ item.name }}</h2>
                <p>{{ item.species }}</p>
            </div>
            <img :src="item.image" height="60" width="70">
            <div>
                <NuxtLink @click="deletePerson(item)" to="/">Вернуться назад</NuxtLink>

            </div>
        </div>
    </div>
</template>
<script setup>
import {Catalog} from "~/stores/myStore";

const store = Catalog()
const person = ref(store.SET_PERSON)
const deletePerson = (item) => {
    person.value.splice(0, 1)
}
</script>
<style scoped>
.card_person {
    background: #0800ff;
    margin: 20px;
}
</style>
