import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Pancakes',
    ingredients: [
      { name: 'Flour', quantity: 200 },
      { name: 'Milk', quantity: 100 },
      { name: 'Eggs', quantity: 2 },
    ],
  },
  {
    id: 2,
    name: 'Omelette',
    ingredients: [
      { name: 'Eggs', quantity: 3 },
      { name: 'Milk', quantity: 50 },
    ],
  },
  {
    id: 3,
    name: 'Spaghetti',
    ingredients: [
      { name: 'Pasta', quantity: 200 },
      { name: 'Tomato Sauce', quantity: 150 },
    ],
  },
  {
    id: 4,
    name: 'Caesar Salad',
    ingredients: [
      { name: 'Lettuce', quantity: 100 },
      { name: 'Croutons', quantity: 50 },
      { name: 'Parmesan', quantity: 20 },
    ],
  },
  {
    id: 5,
    name: 'Grilled Chicken',
    ingredients: [
      { name: 'Chicken Breast', quantity: 200 },
      { name: 'Olive Oil', quantity: 10 },
      { name: 'Garlic', quantity: 2 },
    ],
  },
  {
    id: 6,
    name: 'Tomato Soup',
    ingredients: [
      { name: 'Tomatoes', quantity: 300 },
      { name: 'Onion', quantity: 100 },
      { name: 'Garlic', quantity: 2 },
    ],
  },
];
