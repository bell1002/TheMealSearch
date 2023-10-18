<template>
    <div class="bg-gray-900 h-full">
    <NavbarHeader/>
    <main>
       <router-view/> 
    </main>
    </div>
</template>

<script setup>
import NavbarHeader from '../components/NavbarHeader.vue'

</script>

<style scoped>
</style>