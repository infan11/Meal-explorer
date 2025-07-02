import React from 'react';

const  About = () =>  {
  return (
    <div className="min-h-screen flex  justify-center items-center ">
      <div className="bg-rose-50 p-8 rounded shadow max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-4">About Meal Explorer</h2>
        <p className="text-gray-700">
          Meal Explorer is a web app to search, discover, and explore delicious meals using the free MealDB API. Built with React, Redux Toolkit, and Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default About;
