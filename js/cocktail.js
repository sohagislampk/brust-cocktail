const loadCocktail = async (searchText, dataLimit) => {
    const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayCocktail(data.drinks, dataLimit);
}
const search = dataLimit => {
    const searchField = document.getElementById('default-search');
    const searchText = searchField.value;
    loadCocktail(searchText, dataLimit);
}

const displayCocktail = (drinks, dataLimit) => {
    const cocktailContainer = document.getElementById('cocktail-container');
    cocktailContainer.textContent = '';
    const errornMessage = document.getElementById('error-message');
    if (drinks.length === 0) {

        errornMessage.classList.remove('hidden');
    }
    else {
        errornMessage.classList.add('hidden');
    }
    drinks.forEach(drink => {
        const drinksDiv = document.createElement('div');
        drinksDiv.innerHTML = `
        
<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
<a href="#">
    <img class="rounded-t-lg" src="${drink.strDrinkThumb}" alt="">
</a>
<div class="p-5">
    <a href="#">
        <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Name : ${drink.strDrink}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Alcoholic : ${drink.strAlcoholic}</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${drink.strInstructions.slice(0, 36) + '...'}</p>
    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
    </a>
</div>
</div>  
        `
        cocktailContainer.appendChild(drinksDiv)
    })

}


loadCocktail('');