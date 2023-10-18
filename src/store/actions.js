import axiosClient from '../axiosClient';


export function searchMeals({commit}, keyword){
    axiosClient.get(`/search.php?s=${keyword}`)
    .then(({data}) => {
        commit('setSearchedMeals',data.meals);
        console.log(data);
    })
    .catch((error) => {
        console.log("Fail to search meals: ", error);
    });


}

export function searchMealsByLetter({commit}, letter){
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data}) => {
        commit('setMealsByLetter',data.meals);
        console.log(data);
    })
    .catch((error) => {
        console.log("Fail to search meals: ", error);
    });

    
}

export function searchMealsByIngredient({commit}, ing){
    axiosClient.get(`/filter.php?i=${ing}`)
    .then(({data}) => {
        commit('setMealsByIngredient',data.meals);
        console.log(data);
    })
    .catch((error) => {
        console.log("Fail to search meals: ", error);
    });

    
}