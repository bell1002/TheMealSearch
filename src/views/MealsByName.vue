<template>
    
    <div class="d-flex  justify-content-center flex-column">
        <div class="col-md-6 mx-auto">
            <input 
            v-model="keyword"
            :modelValue="keyword"
            class=" form-control  "  
            placeholder="Search the meals"
            @change="searchMeals"/>
        </div>
        
    </div>
    <MealsList :meals="meals"/>
</template>

<script setup>

import store from '../store';
import {computed, onMounted, ref} from 'vue';
import { useRoute } from 'vue-router';
import MealsList from '@/components/MealsList.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(()=> store.state.searchedMeals)

function searchMeals(){
  if(keyword.value)
  { store.dispatch('searchMeals', keyword.value)}
  else{
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
     keyword.value = route.params.name
     if(keyword.value){
        searchMeals();
     }
});
</script>