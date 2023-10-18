<template>
     <div class=" col-md-3 bg-light rounded mx-1 my-2">
                    <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}"><img :src=" meal.strMealThumb" :alt="meal.strMeal" class="rounded img-fluid "/></router-link>
                    <div class="p-3">
                        <h3 class="p-3 ">{{ meal.strMeal }}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium nulla necessitatibus magnam recusandae! </p>
                        <div class="p-3 d-flex justify-content-between">
                        <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>

                        </div>
                    </div>
                </div>
</template>
<script >
import YouTubeButton from './YouTubeButton.vue';

export default{
    name: 'MealItem',
    components: {
        YouTubeButton,
    },
    props: {
        meal: Object,
    },
};
</script>