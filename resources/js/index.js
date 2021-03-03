// Get Recipes
$(document).ready(
  $.ajax({
    method: 'GET',
    url: 'https://www.themealdb.com/api/json/v1/1/search.php?s',
    dataType: 'json',
  }).done(function (data) {
    data.meals.forEach((meal) => {
      $('.recipe-cards').append(
        `<div class='recipe-wrapper card'>
            <div class='recipe'>
              <img class='recipe__img' src="${meal.strMealThumb}"/>
              <h3 class="meal-name">Meal: ${meal.strMeal} </h3>
              <span class='recipe__info'>
                <span>Origin: ${meal.strArea}</span>
                <span>Category: ${meal.strCategory}</span>
              </span>
            </div>
            <div class='recipe__content'>
              <h3 class="recipe__name">Meal: ${meal.strMeal} </h3>
              <div class='recipe__type'>Type: ${
                meal.strTags == null ? 'N/A' : meal.strTags
              }</div>
              <div class='recipe__video'>Click <a href="${
                meal.strYoutube
              }" target="_blank">here</a> for video instructions</div>
              <div class='recipe__instructions'>Click <a href="${
                meal.strSource
              }" target="_blank">here</a> for detailed instructions</div>
            </div>
        </div>
        
        `
      );
    });
  })
);

// filter recipes
document.addEventListener('DOMContentLoaded', function (e) {
  const searchBar = document.forms['search-recipes'].querySelector('input');
  const recipeCard = document.querySelectorAll('.recipe-wrapper');
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const recipes = document.querySelectorAll('.meal-name');
    Array.from(recipes).forEach((recipe) => {
      const meal = recipe.textContent;
      if (meal.toLowerCase().indexOf(e.target.value) != -1) {
        recipeCard.style.display = 'block';
      }
      recipeCard.style.display = 'none';
    });
  });
});
