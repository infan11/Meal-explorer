import React, { useEffect, useState } from 'react';

const   Bookmark = () =>  {
  const [bookmark, setBookmark] = useState([]);


  useEffect(() => {
    const markMeals = JSON.parse(localStorage.getItem('bookmark')) ;
    console.log(markMeals);
    setBookmark(markMeals);
  }, []);

  const removeBookmark = (idMeal) => {
    const updated = bookmark.filter((meal) => meal.idMeal !== idMeal);
    localStorage.setItem('bookmark', JSON.stringify(updated));
    console.log(updated);
    setBookmark(updated);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Bookmarked Meals</h2>

      {bookmark.length === 0 ? (
        <p className="text-center text-gray-700">No favorite meals yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bookmark.map((meal) => (
            <div key={meal.idMeal} className="bg-white rounded shadow hover:shadow-lg transition">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover rounded-t" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{meal.strMeal}</h3>
                <p className="text-sm text-gray-600">{meal.strArea} | {meal.strCategory}</p>
                <button
                  onClick={() => removeBookmark(meal.idMeal)}
                  className="bg-red-600 text-white px-3 py-1 rounded mt-2 hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookmark;
