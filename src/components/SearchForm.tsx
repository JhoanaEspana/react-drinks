import { Search } from 'lucide-react'
import { useState } from 'react'

const categories = [
    'Ordinary Drink',
    'Cocktail',
    'Shake',
    'Other/Unknown',
    'Cocoa',
    'Shot',
    'Coffee / Tea',
    'Homemade Liqueur',
    'Punch / Party Drink',
    'Beer',
    'Soft Drink',
]

export const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implementar lógica de búsqueda
        console.log('Buscando:', { searchTerm, selectedCategory })
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
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='Ej. Vodka, Tequila, Mojito...'
                        className='input-elegant h-12 px-4 text-foreground placeholder:text-muted-foreground/50 w-full rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                    />
                </div>

                <div>
                    <label className='block text-xs font-medium text-foreground/70 mb-2 uppercase tracking-wider'>
                        Categoría
                    </label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className='input-elegant h-12 px-4 text-foreground w-full rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer'>
                        <option value=''>Selecciona una categoría</option>
                        {categories.map((category) => (
                            <option
                                key={category}
                                value={category.toLowerCase()}
                                className='bg-card text-foreground'>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type='submit'
                    className='w-full btn-primary-elegant h-12 rounded-xl text-sm uppercase tracking-wider mt-2 flex items-center justify-center gap-2 font-medium transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'>
                    <Search className='w-4 h-4' />
                    Buscar Recetas
                </button>
            </form>
        </div>
    )
}
