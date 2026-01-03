import { z } from 'zod'
import type {
    categoriesAPIResponseSchema,
    DrinkAPIResponse,
    DrinksAPIResponse,
    RecipeAPIResponseSchema,
    searchFilterSchema,
} from '../schemas/recipes-schemas'

export type Categories = z.infer<typeof categoriesAPIResponseSchema>
export type SearchFilters = z.infer<typeof searchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkAPIResponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>
