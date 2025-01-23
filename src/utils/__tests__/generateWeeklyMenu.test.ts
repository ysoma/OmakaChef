import { describe, it, expect } from 'vitest';
import { generateWeeklyMenu } from '../generateWeeklyMenu';
import { Recipe } from '../../types';

const recipes: Recipe[] = [
  { id: 1, name: 'Pancakes', ingredients: [] },
  { id: 2, name: 'Omelette', ingredients: [] },
  { id: 3, name: 'Spaghetti', ingredients: [] },
];

describe('generateWeeklyMenu', () => {
  it('should generate a menu with the specified number of days', () => {
    const result = generateWeeklyMenu(recipes, 7);
    expect(result).toHaveLength(7); // メニュー数が7であること
  });

  it('should only include recipes from the input list', () => {
    const result = generateWeeklyMenu(recipes, 7);
    result.forEach((recipe) => {
      expect(recipes).toContain(recipe); // 入力リストに含まれるレシピのみ
    });
  });

  it('should work with default days value (7)', () => {
    const result = generateWeeklyMenu(recipes);
    expect(result).toHaveLength(7); // デフォルト値が機能すること
  });
});
