import { create } from 'zustand'
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice'
import { createFavoritesSlice, type FavoritesSliceType } from './favoritesSlice'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>(
    (...a) => ({
        ...createRecipesSlice(...a),
        ...createFavoritesSlice(...a),
    })
)
