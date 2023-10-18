<template>
   <div class=" bg-gray-200  ">
    <div class="row d-flex justify-content-center">
      <div class="col-md-8">
         <h1 class="text-warning">Random for Meals</h1>
      </div>
   </div>
   <MealsList :meals="meals"/>


   </div>

  
</template>

<script setup>
import { onMounted, ref } from 'vue';

import axiosClient from '../axiosClient'
import MealsList from '@/components/MealsList.vue';
// import {computed} from 'vue';
// import store from '../store';


// const meals = computed(()=>store.state.meals)
const meals = ref([]);

onMounted( async()=>{
   for(let i = 0; i < 10 ; i++){
      axiosClient
      .get(`/random.php`)
      .then(({data}) => meals.value.push(data.meals[0]));
   }
});
</script>

<style>

</style>



