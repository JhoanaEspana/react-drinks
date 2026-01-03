import { Wine } from 'lucide-react'
import { useEffect, useMemo } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { SearchForm } from './SearchForm'
import { useAppStore } from '../stores/useAppStore'

export const Header = () => {
    const { pathname } = useLocation()

    const isHome = useMemo(() => pathname === '/', [pathname])

    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)
    const searchRecipes = useAppStore((state) => state.searchRecipes)

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

    return (
        <header
            className={`relative ${
                isHome
                    ? ' top-0 z-50 border-b border-white/5 bg-cover bg-center bg-no-repeat min-h-[600px] pb-12'
                    : 'header-nav top-0 z-50 border-b border-white/5'
            }`}
            style={
                isHome
                    ? {
                          backgroundImage: 'url(/hero-cocktails.jpg)',
                      }
                    : undefined
            }>
            {isHome && (
                <div className='absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60' />
            )}
            <div className='relative container mx-auto px-6 py-5 flex items-center justify-between'>
                <Link to='/' className='flex items-center gap-3 group'>
                    <div className='relative'>
                        <Wine className='w-8 h-8 text-primary transition-all duration-300 group-hover:rotate-12 group-hover:text-emerald-light' />
                        <div className='absolute inset-0 blur-xl bg-primary/15 group-hover:bg-primary/30 transition-all duration-300' />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-lg font-display font-semibold tracking-wide text-white'>
                            Cocktail
                        </span>
                        <span className='text-[10px] tracking-[0.25em] text-primary/80 uppercase font-medium'>
                            Finder
                        </span>
                    </div>
                </Link>

                <nav className='flex items-center gap-10'>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-link text-primary active'
                                : 'text-white/60 hover:text-white'
                        }>
                        Inicio
                    </NavLink>
                    <NavLink
                        to='/favoritos'
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-link text-primary active'
                                : 'text-white/60 hover:text-white'
                        }>
                        Favoritos
                    </NavLink>
                </nav>
            </div>
            {isHome && (
                <div className='relative container mx-auto px-6 flex justify-center items-center pt-8'>
                    <SearchForm
                        categories={categories}
                        searchRecipes={searchRecipes}
                    />
                </div>
            )}
        </header>
    )
}
