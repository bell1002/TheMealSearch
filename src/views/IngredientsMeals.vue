<template>
    <div class="d-flex row justify-content-center mt-5 flex-wrap ">
       <h1 class="mt-5 mb-5">Ingredients List</h1>
        <router-link 
        :to="{
            name: 'byIngredient',
            params: {ingredient: ingredient.strIngredient},
        }"
         v-for="ingredient of ingredients"
            v-bind:key="ingredient.idIngredient"
              class="row col-md-6 text-decoration-none mx-auto"
        >
            <div
           
            class="bg-light rounded mb-3 "
            >
           
                <h3 class="text-decoration-none text-warning p-2 m-2 ">{{ ingredient.strIngredient }}</h3>
            </div>
        </router-link>
    </div>
   
</template>

<script setup>
import axiosClient from '@/axiosClient';

import {onMounted,ref} from 'vue';



 const ingredients = ref([]);

onMounted(() => {
   axiosClient.get('/list.php?i=list')
   .then(({data}) => {
    ingredients.value= data.meals;
   });
});
</script>