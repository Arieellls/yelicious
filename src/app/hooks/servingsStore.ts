import { create } from 'zustand'

// Define the store state type
interface ServingStates {
 recipeServings: number
 setServings: (servings: number) => void
}

// Create the store
export const useServingStore = create<ServingStates>((set) => ({
  recipeServings: 0,
  setServings: (servings) => set({recipeServings: servings})
}))