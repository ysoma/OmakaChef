import { useState } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import RenderMenuAndShoppingList from './components/RenderMenuAndShoppingList';
import RecipeDetailsModal from './components/RecipeDetailsModal';
import { generateWeeklyMenu } from './utils';
import { Recipe } from './types';
import { recipes } from './data/recipes';

const App = () => {
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleGenerateMenu = () => {
    const weeklyMenu = generateWeeklyMenu(recipes);
    setSelectedRecipes(weeklyMenu);
  };
  const handleUpdateRecipe = (index: number) => {
    const newRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    const updatedRecipes = [...selectedRecipes];
    updatedRecipes[index] = newRecipe;
    setSelectedRecipes(updatedRecipes);
  };
  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };
  const closeRecipeDetails = () => {
    setSelectedRecipe(null);
  };



  return (
    <Layout>
      <Header />
      <button
        onClick={handleGenerateMenu}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow transition duration-200"
      >
        Generate Weekly Menu
      </button>

      {selectedRecipes.length > 0 && (
        <RenderMenuAndShoppingList
          selectedRecipes={selectedRecipes}
          onUpdateRecipe={handleUpdateRecipe}
          onSelectRecipe={handleSelectRecipe}
        />
      )}
      {selectedRecipe && (
        <RecipeDetailsModal
          recipe={selectedRecipe}
          onClose={closeRecipeDetails}
        />
      )}
      <Footer />
    </Layout>
  );
};

export default App;
