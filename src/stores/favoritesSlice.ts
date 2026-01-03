import type { StateCreator } from 'zustand'
import type { Recipe } from '../types'
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice'

export type FavoritesSliceType = {
    favorites: Recipe[]

    handleClickFavorite: (recipe: Recipe) => void
    favoriteExists: (id: Recipe['idDrink']) => boolean
    loadFavorites: () => void
}

export const createFavoritesSlice: StateCreator<
    FavoritesSliceType & RecipesSliceType,
    [],
    [],
    FavoritesSliceType
> = (set, get, api) => ({
    favorites: [],

    handleClickFavorite: (recipe) => {
        let newFavorites: Recipe[]

        if (get().favoriteExists(recipe.idDrink)) {
            newFavorites = get().favorites.filter(
                (favorite) => favorite.idDrink !== recipe.idDrink
            )
        } else {
            newFavorites = [...get().favorites, recipe]
        }

        set({ favorites: newFavorites })
        createRecipesSlice(set, get, api).closeModal()
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
    },

    favoriteExists: (id) => {
        return get().favorites.some((favorite) => favorite.idDrink === id)
    },

    loadFavorites: () => {
        const favorites = localStorage.getItem('favorites')
        if (favorites) {
            set({ favorites: JSON.parse(favorites) })
        }
    },
})
