"use client"
import { loadBindings } from "next/dist/build/swc";
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
        <div>
            <h2>Meal Ideas</h2>
            <p>{meals.map((meal) => (
          <ul key={meal.idMeal} id={meal.idMeal} name={strMeal} url={strMealThumb}>
            {meal.strMeal}
          </ul>
        ))}</p>
        </div>
    );
}