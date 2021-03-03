// AJAX
// Get Request
$.ajax({
  method: 'GET',
  url: 'https://www.themealdb.com/api/json/v1/1/search.php?s',
  dataType: 'json',
}).done(function (data) {
  // console.log(data.meals[0]);
  $.map(data, function (meal, i) {
    $('.recipe-cards').append(
      `<div class='recipe-wrapper card'>
          <div class='recipe'>
            <img class='recipe__img' src="${meal[0].strMealThumb}"/>
            <h3>Meal: ${meal[0].strMeal} </h3>
            <span class='recipe__info'>
              <span>Origin: ${meal[0].strArea}</span>
              <span>Category: ${meal[0].strCategory}</span>
            </span>
          </div>
      </div>`
    );
  });
});
