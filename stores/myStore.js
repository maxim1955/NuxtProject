export const Catalog = defineStore('catalog', {
    state: () => ({
        catalog: ref([]),
        person: ref([]),
        episodes: ref([])

    }),
    getters: {
        SET_CATALOG(state) {
            return computed(() => state.catalog)
        },
        SET_PERSON(state) {
            return computed(() => state.person)
        },
        SET_EPISODES(state) {
            return computed(() => state.episodes)
        },
    },
    actions: {
        GET_CATALOG(number_page) {
            $fetch(`https://rickandmortyapi.com/api/character/?page=${number_page}`)
                .then((res) => {
                    this.catalog = res.results
                    console.log(res.results)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        GET_PERSON(person) {
            this.person.push(person)
        },
        GET_EPISODE(number_episode, link) {
            $fetch(`https://rickandmortyapi.com/api/episode/?page=${number_episode}`)
                .then((res) => {
                    this.episodes = res.results
                    console.log(res.results)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    },
    persist: true,

})
