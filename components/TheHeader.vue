<template>
    <div class="">
        <nav>
            <h3>Nuxt App</h3>
            <ul>
                <li>
                    <nuxt-link to="/">
                        Person
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/episode">
                        Episode
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/character">
                        Character
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup >

</script>
<style>
nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    background-color: darkblue;
    color: wheat;
    justify-content: space-between;

}
ul{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

}
ul li  {
    margin-right: .5rem;
}
ul li a {
    display: flex;
    color: wheat;
}
</style>
