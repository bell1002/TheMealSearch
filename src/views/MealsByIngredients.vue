<template>
    <MealsList :meals="meals"/>
</template>

<script setup>
import MealsList from '../components/MealsList.vue'
import store from '@/store';
import { computed,onMounted} from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient)


// const ingredients = ref([]);

onMounted(() => {
   store.dispatch('searchMealsByIngredient', route.params.ingredient)
});
</script>