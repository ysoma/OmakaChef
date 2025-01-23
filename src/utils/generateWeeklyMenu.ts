import { Recipe } from '../types';

/**
 * Generates a weekly menu by randomly selecting recipes.
 * @param recipes - Array of available recipes.
 * @param days - Number of days to generate the menu for (default is 7).
 * @returns Array of selected recipes for the week.
 */
export const generateWeeklyMenu = (recipes: Recipe[], days = 7): Recipe[] => {
  return Array.from({ length: days }, () =>
    recipes[Math.floor(Math.random() * recipes.length)]
  );
};