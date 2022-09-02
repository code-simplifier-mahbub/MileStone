// create a function for fetch a rest link and convert to a json promise and get data
// assaign the data to a new function name mealsData and give a perameter meals to get data
// get a card div by id name meals-div
// to get per meal throw a loop forEach for meals
// create a div which will repeat loop time

const loadMeals = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => mealsData(data.meals))
}

const mealsData = meals => {
    // console.log(meals)
    const mealsDiv = document.getElementById('meals-container');
    mealsDiv.innerHTML = '';
    //for each for per meal
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
            <div class="card" onclick = "getMealID(${meal.idMeal})">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
          </div>
        `;

        mealsDiv.appendChild(mealDiv)
    });
}

const searchFood = () => {
    const foodField = document.getElementById('food-field');
    foodSearchText = foodField.value;
    loadMeals(foodSearchText);
    foodField.value = '';
}

const getMealID = (mealID) => {
    // console.log(mealID)

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
    
}

const displayMealDetail = (meal) => {
    // console.log(meal)
    const mealDiv = document.getElementById('meal-added');
    mealDiv.innerHTML = '';
    const mealCard = document.createElement('div');
    mealCard.classList.add('card');
    mealCard.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>

    `
    mealDiv.appendChild(mealCard);
    // console.log(mealDiv)

}


// loadMeals('');


