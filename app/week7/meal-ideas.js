import { useClient } from '@supabase/supabase-js';
import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {

  const [meals, setMeals] = useState([]);
  const supabase = useClient(); 

  const fetchMealIdeas = async (ingredient) => {
    try {
      
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
      return [];
    }
  };

  // Define Load Function
  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  // Use the useEffect Hook
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Render the Component
  return (
    <div>
      <h2>Meal Ideas with {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
