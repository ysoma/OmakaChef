export interface Ingredient {
    name: string;
    quantity: number;
  }
  
  export interface Recipe {
    id: number;
    name: string;
    ingredients: Ingredient[];
  }
  