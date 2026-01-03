import { useMemo } from 'react'
import { DrinkGrid } from '../components/DrinkGrid'
import { EmptyState } from '../components/EmptyState'
import { useAppStore } from '../stores/useAppStore'

export const FavoritesPage = () => {
    const favorites = useAppStore((state) => state.favorites)
    const hasFavorites = useMemo(() => favorites.length > 0, [favorites])

    return (
        <>
            {hasFavorites ? (
                <DrinkGrid drinks={{ drinks: favorites }} />
            ) : (
                <EmptyState type='favorites' />
            )}
        </>
    )
}
