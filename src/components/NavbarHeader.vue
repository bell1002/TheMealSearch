<template>
  <header class="m-2 d-flex justify-content-between items-stretch">
        <router-link :to="{name: 'home'}" class="text-decoration-none items-center px-5">
            Home
        </router-link>
        <div class="items-center">
            <router-link :to="{name: 'byName'}" class="px-2 py-2 text-decoration-none">
                Search Meals
            </router-link>
            <router-link :to="{name: 'byLetter'}" class="px-2 py-2 text-decoration-none">
                Meals By Letter
            </router-link>
            <router-link :to="{name: 'ingredients'}" class="px-2 py-2 text-decoration-none">
                Meals By Ingredients
            </router-link>
        </div>
    </header>
</template>
<script setup>
</script>
<style>
</style>