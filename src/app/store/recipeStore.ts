import { create } from "zustand";

export type Recipe = {
  id: string;
  title: string;
  image_url: string;
  publisher: string;
  cooking_time: number;
  servings: number;
  ingredients: Array<{
    description: string;
    quantity: number;
    unit: string;
  }>;
  source_url: string;
  // add other fields based on your recipe object
};

type RecipeStore = {
  recipes: Recipe[];
  loading: boolean;
  loadingSelectedRecipe: boolean;
  selectedRecipe: Recipe | undefined;
  setRecipes: (data: Recipe[]) => void;
  clearRecipes: () => void;
  setLoading: (loading: boolean) => void;
  setLoadingSelectedRecipe: (loading: boolean) => void;
  setSelectedRecipe: (recipe: Recipe) => void;
  clearSelectedRecipe: () => void;

  currentPage: number;
  recipesPerPage: number;
  setCurrentPage: (page: number) => void;
};

export const useRecipeStore = create<RecipeStore>((set) => ({
  recipes: [],
  loading: false,
  selectedRecipe: undefined,
  loadingSelectedRecipe: false,
  setRecipes: (data) => set({ recipes: data }),
  clearRecipes: () => set({ recipes: [] }),
  setLoading: (loading) => set({ loading }),
  setLoadingSelectedRecipe: (loading) =>
    set({ loadingSelectedRecipe: loading }),
  setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),
  clearSelectedRecipe: () => set({ selectedRecipe: undefined }),

  currentPage: 1,
  recipesPerPage: 13,
  setCurrentPage: (page) => set({ currentPage: page }),
}));
