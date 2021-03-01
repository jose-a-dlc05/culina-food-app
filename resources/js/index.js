// AJAX
// Get Request
$.ajax({
  method: 'GET',
  url: 'https://www.themealdb.com/api/json/v1/1/search.php?s',
  dataType: 'json',
}).done(function (data) {
  // console.log(data.meals[0]);
  $.map(data.meals, function (meal, i) {
    $('.recipe-cards').append('<p>Meal:' + meal.strMeal + '<p>');
  });
});
