<template>
    <div class="container">
    <div class="row  mt-4 justify-content-center">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>

    </div>
    <div v-if="!meals.length " class="d-flex justify-content-center bg-light">
        There are no meals
    </div>
  </div>
</template>
<script>
import MealItem from './MealItem.vue';

export default{
    name: 'MealsList',
    components: {
       MealItem,
    },
    props: {
        meals: {
            required: true, 
            type: Array,
            default: () => [],
        },
    },
};
</script>