<template>
    
        <div class="row justify-content-center  mt-5 ">
        <div class="col-md-4 m-2">
            <router-link 
            :to="{name: 'byLetter', params: { letter: letter}}" 
            v-for="letter of letters" 
            :key="letter" 
            class="text-decoration-none text-black">
                {{ letter }}
            </router-link>
        </div>
        
    </div>
    <MealsList :meals="meals"/>
       
</template>

<script setup>
import MealsList from '@/components/MealsList.vue';
import store from '@/store';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const letters = "A B C D E F G H I J K L M N O P Q U T V X Y W".split("");

const meals = computed(() => store.state.mealsByLetter);

watch(route, () =>{
    store.dispatch('searchMealsByLetter', route.params.letter)

})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
});


</script>