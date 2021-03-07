// Load Recipes on Page
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
        </div>`
      );
    });
  })
);

// Filter recipes
document.addEventListener('DOMContentLoaded', function (e) {
  const searchBar = document.forms['search-recipes'].querySelector('input');
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    // Returns all cards in html
    const recipes = document.querySelectorAll('.card');
    // Regex function
    let expression = new RegExp(term, 'i');
    // First iteration of card
    Array.from(recipes).forEach((recipe) => {
      const meal = recipe.querySelectorAll('.meal-name');
      // narrowing down within card for obtaining meal name
      Array.from(meal).forEach((value) => {
        let mealName = value.textContent.slice(6).toLowerCase();
        if (mealName.indexOf(term) != -1) {
          recipe.style.display = 'block';
        } else {
          recipe.style.display = 'none';
        }
      });
    });
  });
});
