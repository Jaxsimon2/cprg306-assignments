"use client"

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return Object.keys(data.message);
}

export default function MealIdeas({ingredient}) {

    const [meals, setMeals] = useState([]);

    const LoadMealIdeas = async () => {
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals);
    }

    useEffect(() => {
        LoadMealIdeas();
    }, []);

    return(
        <div className="p-4">
      <h2 className="text-2xl font-bold text-yellow-100">Meal Ideas</h2>
      
      <ul>
        {meals && meals.length > 0 ? (
          meals.map((meal) => (
            <li 
              key={meal.idMeal} 
              onClick={() => handleMealClick(meal.idMeal)}
              className={expandedMealId === meal.idMeal ? 'py-4 font-bold bg-slate-900 w-96' : ''}
            >
              <p>{meal.strMeal}</p>
              {expandedMealId === meal.idMeal && meal.strMealThumb && (              
                <img className="object-cover w-100" src={meal.strMealThumb} alt={meal.strMeal} />
              )}
              {expandedMealId === meal.idMeal && instructions && (
                <div className="p-4 text-xs">
                  <p>{instructions}</p>
                </div>
              )}
            </li>
          ))
        ) : (
          <li>No meal ideas available for this ingredient.</li>
        )}
      </ul>
    </div>
    );
}