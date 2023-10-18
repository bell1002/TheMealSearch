<template>
    <div class=" row justify-content-center  ">
        <div class=" col-md-8 ">
            <h1 class="justify-content-center mb-3">{{ meal.strMeal }}</h1>
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="img-fluid"/>
            <div class="row m-3 justify-content-center" >
                <div class="col-sm-4">
                   <strong> Category: </strong>{{ meal.strCategory }}
                </div>
                <div class="col-sm-4">
                   <strong> Area: </strong>{{ meal.strArea }}
                </div>
                <div class="col-sm-4">
                   <strong> Tags: </strong>{{ meal.strTags }}
                </div>
            </div>
            <div>
                {{ meal.strInstructions }}
            </div>
            <div class="d-flex justify-content-between m-4">
                <div class="ml-5">
                    <h2>Ingredient</h2>
                    <ul>
                        <template v-for="(el,ind) of new Array(20)" :key="ind">
                            <li v-if="meal[`strIngredient${ind + 1}`]">
                             {{ ind + 1 }}   {{ meal[`strIngredient${ind + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>
                <div>
                    <h2>Measure</h2>
                    <ul>
                        <template v-for="(el,ind) of new Array(20)" :key="ind">
                            <li v-if="meal[`strMeasure${ind + 1}`]">
                             {{ ind + 1 }}   {{ meal[`strMeasure${ind + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
            <div>
                <YouTubeButton :href="meal.strYouTube" class="mx-2">
                    Go To YouTube
                </YouTubeButton>
                <a :href="strSource" target="_blank"
            class="text-decoration-none border px-2 py-2 mx-2 rounded text-bg-success ">
        
            View Original Source
        </a>
            </div>
        
        </div>
    </div>
</template>

<script setup>
import axiosClient from '@/axiosClient';
import YouTubeButton from '@/components/YouTubeButton.vue';
import {onMounted, ref} from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const meal = ref({});

onMounted(() => {
    axiosClient.get(`/lookup.php?i=${route.params.id}`)
    .then(({data}) => {
        meal.value = data.meals[0] || {}
    })
})

</script>