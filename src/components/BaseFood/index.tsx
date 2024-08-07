// @ts-nocheck
import React, { useState } from 'react';

// Dados nutricionais dos alimentos
const foodData = {
  "Peito de Frango Cru": { calories: 165, protein: 31, fat: 3.6, carbs: 0 },
  Ovo: { calories: 155, protein: 13, fat: 11, carbs: 1.1 },
  Aveia: { calories: 389, protein: 16.9, fat: 6.9, carbs: 66.3 },
  "Arroz Branco": { calories: 130, protein: 2.4, fat: 0.3, carbs: 28.2 },
  Feijão: { calories: 333, protein: 21, fat: 0.8, carbs: 60 }
};

const FoodInput = ({ foodName, data, onChange }) => {
  return (
    <div>
      <label>
        {foodName} (gramas):
        <input
          type="number"
          min="0"
          onChange={(e) => onChange(foodName, parseFloat(e.target.value))}
        />
      </label>
    </div>
  );
};

const FoodNutritionCalculator = () => {
  const [quantities, setQuantities] = useState({
    "Peito de Frango Cru": 0,
    Ovo: 0,
    Aveia: 0,
    "Arroz Branco": 0,
    Feijão: 0
  });

  const handleChange = (foodName, grams) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [foodName]: grams
    }));
  };

  const calculateNutrition = (foodName) => {
    const quantity = quantities[foodName];
    const data = foodData[foodName];
    return {
      calories: (data.calories * quantity) / 100,
      protein: (data.protein * quantity) / 100,
      fat: (data.fat * quantity) / 100,
      carbs: (data.carbs * quantity) / 100
    };
  };

  return (
    <div>
      <h1>Calculadora de Nutrição</h1>
      {Object.keys(foodData).map((foodName) => (
        <FoodInput
          key={foodName}
          foodName={foodName}
          data={foodData[foodName]}
          onChange={handleChange}
        />
      ))}
      <h2>Resumo Nutricional</h2>
      {Object.keys(foodData).map((foodName) => {
        const { calories, protein, fat, carbs } = calculateNutrition(foodName);
        return (
          <div key={foodName}>
            <h3>{foodName}</h3>
            <p>Calorias: {calories.toFixed(2)} kcal</p>
            <p>Proteínas: {protein.toFixed(2)} g</p>
            <p>Gorduras: {fat.toFixed(2)} g</p>
            <p>Carboidratos: {carbs.toFixed(2)} g</p>
          </div>
        );
      })}
    </div>
  );
};

export default FoodNutritionCalculator;
