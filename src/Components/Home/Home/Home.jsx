import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMealsBySearch, fetchMealsByIngredients, fetchRandomMeal, clearMeals } from '../../../Redux/Features/MealSlice';
import FeaturedCarousel from '../../FeaturedCarousel/FeaturedCarousel';
import Swal from 'sweetalert2';
import { FaSearch, FaTimes, FaRandom, FaBookmark } from 'react-icons/fa';

const Home = () => {
  const dispatch = useDispatch();
  const { meals, loading, error } = useSelector((state) => state.meals);
  const [searchItem, setSearchItem] = useState('');
  console.log(searchItem);
  const [ingredients, setIngredients] = useState('');
  console.log(ingredients);
  const [activeTab, setActiveTab] = useState('search');

  useEffect(() => {
    dispatch(fetchRandomMeal());
  }, [dispatch]);
  const handleRandomMeal = () => dispatch(fetchRandomMeal());

  const handleBookmark = (meal) => {
    const existing = JSON.parse(localStorage.getItem('bookmark')) || [];
    if (existing.some((meals) => meals.idMeal === meal.idMeal)) {
      Swal.fire({ icon: 'info', title: 'Already Bookmarked', text: `${meal.strMeal} is already in your bookmarks.`, timer: 1000, showConfirmButton: false });
    } else {
      localStorage.setItem('bookmark', JSON.stringify([...existing, meal]));
     
    }
  };

  const handleSearch = (search) => {
    search.preventDefault();
    if (searchItem.trim() !== '') dispatch(fetchMealsBySearch(searchItem));
  };

  const handleAdvancedSearch = (advancedSearch) => {
    advancedSearch.preventDefault();
    if (ingredients.trim() !== '') {
      const ingArr = ingredients.split(',').map(i => i.trim()).filter(i => i);
      dispatch(fetchMealsByIngredients(ingArr));
      console.log(ingArr);
    }
  };


  return (
    <div className="min-h-screen p-4 md:p-6  max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-rose-600">Meal Explorer</h1>


      <div className="flex justify-center mb-6">
        <div className="flex space-x-1 bg-gray-200 rounded-lg p-1">
          <button onClick={() => setActiveTab('search')} className={`px-4 py-2 rounded-lg ${activeTab === 'search' ? 'bg-rose-600 text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
            Search
          </button>
          <button onClick={() => setActiveTab('ingredients')} className={`px-4 py-2 rounded-lg ${activeTab === 'ingredients' ? 'bg-rose-600 text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
            By Ingredients
          </button>
        </div>
      </div>


      {activeTab === 'search' && (
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
          <div className="relative w-full sm:w-96">
            <input type="text" className="border rounded-lg px-4 py-2 w-full pl-10" placeholder="Search meals..." value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
            <FaSearch className="absolute left-3 top-3 " />
          </div>
          <button type="submit" className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 flex items-center gap-2 w-full sm:w-auto"><FaSearch /> Search</button>
          <button type="button" onClick={() => { dispatch(clearMeals()); setSearchItem(''); }} className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-2 w-full sm:w-auto"><FaTimes /> Clear</button>
          <button type="button" onClick={handleRandomMeal} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 flex items-center gap-2 w-full sm:w-auto"><FaRandom /> Random</button>
        </form>
      )}


      {activeTab === 'ingredients' && (
        <form onSubmit={handleAdvancedSearch} className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
          <div className="relative w-full sm:w-96">
            <input type="text" className="border rounded-lg px-4 py-2 w-full pl-10" placeholder="e.g. chicken, onion" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 w-full sm:w-auto"><FaSearch /> Search</button>
          
       
        </form>
      )}

      
      {loading && <div className="text-center"><div className="animate-spin h-8 w-8 border-t-2 border-b-2 border-rose-600 inline-block"></div><p className="text-lg text-gray-700 mt-2">Loading meals...</p></div>}
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center mb-6">{error}</div>}

      
      {meals.length > 0 && <FeaturedCarousel meals={meals.slice(0, 5)} />}

  
      {meals && meals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 duration-300 flex flex-col">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 sm:h-56 object-cover rounded-t-xl" />
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="font-bold text-lg text-rose-600 mb-1">{meal.strMeal}</h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">{meal.strArea }</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{meal.strCategory }</span>
                  </div>
                </div>
                <button onClick={() => handleBookmark(meal)} className="bg-rose-500 text-white font-semibold px-3 py-2 rounded-lg hover:bg-rose-600 flex items-center justify-center gap-2"><FaBookmark /> Bookmark</button>
              </div>
            </div>
          ))}
        </div>
      ) : !loading && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">{searchItem || ingredients ? "No meals found for your search." : "Start searching to see delicious meals!"}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
