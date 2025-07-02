import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomMeal } from '../../../Redux/Features/MealSlice';


const  Random = () =>  {
  const dispatch = useDispatch();
  const { meals} = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(fetchRandomMeal());
  }, [dispatch]);

  const handleBookmark = (meal) => {
    const existing = JSON.parse(localStorage.getItem('bookmark'));
    const isAlreadyFav = existing.find((meals) => meals.idMeal === meal.idMeal);
    if (!isAlreadyFav) {
      localStorage.setItem('bookmark', JSON.stringify([existing, meal]));
      alert(`${meal.strMeal} added to bookmark!`);
    } else {
      alert(`${meal.strMeal} is already in bookmark!`);
    }
  };

  return (
    <div className="min-h-screen p-6 ">
      <h2 className="text-center text-2xl font-bold mb-6 text-rose-500">Random Meal</h2>


      <div className="grid grid-cols-1 md:grid-cols-2  justify-center gap-6">
        {meals && meals.map((meal) => (
          <div key={meal.idMeal} className="bg-white rounded shadow hover:shadow-lg transition">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-64 object-cover rounded-t" />
            <div className="p-4">
              <h3 className="font-semibold text-2xl mb-2">{meal.strMeal}</h3>
              <p className="text-gray-700 mb-4">{meal.strInstructions.slice(0, 200)}...</p>
              <button
                onClick={() => handleBookmark(meal)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Bookmark
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Random;
