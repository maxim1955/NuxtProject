<template>
    <div class="">
        <h1>Характеристика</h1>
        <input type="number" v-model="page_id" @change="getCatalog(page_id)">
        <input type="search" v-model="inputSearch">
        <select v-model="model" :select="sortBycoin(model)" >
            <option>
                Alive
            </option>
            <option>
                Dead
            </option>
            <option>
                unknown
            </option>
          <option>
            All
          </option>
        </select>

        <div class="card_person" v-for="item of searchHandler" :key="item.id">
            <h2>Карточка персонажа {{ item.name }} </h2>
            <nuxt-link @click="getPerson(item)" to="/character" class="card_text"> Имя: {{ item.name }}</nuxt-link>
            <p>{{ item.species }}</p>
            <img :src="item.image" height="60" width="70"/>
            <button @click="getEpisode()">Получить эпизоды</button>
        </div>

    </div>
</template>
<script setup>

import {Catalog} from "~/stores/myStore";

const store = Catalog()

const page_id = ref(1)

let sortArray = ref([])

/*----------------------------------- Получение всего каталога с бд ---------------------------------------*/

let catalog = ref([])
const getCatalog = async (num) => {
    store.GET_CATALOG(1)
    catalog = store.SET_CATALOG
    store.GET_CATALOG(num)
    sortArray = await catalog
}
getCatalog()

/*----------------------------------- Отправка карточки для открытия на другой странице ---------------------------------------*/
const getPerson = (item) => {
    store.GET_PERSON(item)
}

/*----------------------------------- Сортировка по полу ---------------------------------------*/
const model = ref('Все Персонажи');
let sortcoin = ref([]);
const sortBycoin = async (model) => {
    sortcoin.value.length = 0
    sortArray.value.map((elem) => {
        if (elem.status === model) {
            sortcoin.value.push(elem)
        } else {
            return
        }
    })
}

/*----------------------------------- Поиск по имени ---------------------------------------*/
const inputSearch = ref('')
const searchHandler = computed(() => {
    return filteredCoin.value.filter((elem) => {
        return elem.name.toLowerCase().includes(inputSearch.value.toLowerCase())
    })
})

/*----------------------------------- Вывод отсортированного массива или полного ---------------------------------------*/
const filteredCoin = computed(() => {
    if (sortcoin.value.length) {
        return sortcoin.value
    } else {
        return catalog.value
    }
})
</script>
<style scoped>
.card_person {
    background: #0800ff;
    margin: 20px;
}
.card_text{
  color: black;
}
</style>
