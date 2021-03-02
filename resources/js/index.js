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
      `<img src="${meal[0].strMealThumb}"/> <p> ${meal[0].strArea} </p><p>Origin: ${meal[0].strArea} </p><p>Category: ${meal[0].strCategory} </p><p>Meal: ${meal[0].strMeal} <p>`
    );
  });
});
