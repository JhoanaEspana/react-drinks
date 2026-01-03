import { Search } from 'lucide-react'
import React, { useState, type FormEvent } from 'react'
import type { Categories, SearchFilters } from '../types'

type SearchFormProps = {
    categories: Categories
    searchRecipes: (searchFilters: SearchFilters) => void
}

export const SearchForm = ({ categories, searchRecipes }: SearchFormProps) => {
    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(searchFilters).includes('')) {
            console.error('Por favor, completa todos los campos')
            return
        }

        searchRecipes(searchFilters)
    }

    return (
        <div className='glass-card rounded-2xl p-8 max-w-md w-full animate-fade-in'>
            <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='text-center mb-6'>
                    <h2 className='font-display text-2xl text-slate-900 font-semibold mb-2'>
                        Encuentra tu cóctel
                    </h2>
                    <p className='text-sm text-slate-600'>
                        Busca por nombre o ingrediente
                    </p>
                </div>

                <div>
                    <label className='block text-xs font-medium text-foreground/70 mb-2 uppercase tracking-wider'>
                        Nombre o Ingredientes
                    </label>
                    <input
                        type='text'
                        name='ingredient'
                        value={searchFilters.ingredient}
                        onChange={handleChange}
                        placeholder='Ej. Vodka, Tequila, Mojito...'
                        className='input-elegant h-12 px-4 text-slate-900 placeholder:text-slate-400 w-full rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                    />
                </div>

                <div>
                    <label className='block text-xs font-medium text-foreground/70 mb-2 uppercase tracking-wider'>
                        Categoría
                    </label>
                    <select
                        name='category'
                        value={searchFilters.category}
                        onChange={handleChange}
                        className={`input-elegant h-12 px-4 w-full rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer ${
                            searchFilters.category === ''
                                ? 'text-slate-400'
                                : 'text-slate-900'
                        }`}>
                        <option
                            value=''
                            disabled
                            className='bg-white text-slate-400'>
                            Selecciona una categoría
                        </option>
                        {categories.drinks.map((category) => (
                            <option
                                key={category.strCategory}
                                value={category.strCategory.toLowerCase()}
                                className='bg-white text-slate-900'>
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type='submit'
                    className='w-full btn-primary-elegant h-12 rounded-xl text-sm uppercase tracking-wider mt-2 flex items-center justify-center gap-2 font-medium transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:cursor-pointer'>
                    <Search className='w-4 h-4' />
                    Buscar Recetas
                </button>
            </form>
        </div>
    )
}
