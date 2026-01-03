import type { StateCreator } from 'zustand'
import {
    getCategories,
    getRecipes,
    getRecipesById,
} from '../services/RecipeService'
import type { Categories, Drink, Drinks, Recipe, SearchFilters } from '../types'

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilters) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: { drinks: [] },
    drinks: { drinks: [] },
    selectedRecipe: {} as Recipe,

    fetchCategories: async () => {
        const categories = await getCategories()
        set({ categories })
    },

    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({ drinks })
    },

    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipesById(id)
        set({ selectedRecipe })
    },
})
