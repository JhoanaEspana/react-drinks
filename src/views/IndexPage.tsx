import { useMemo } from 'react'
import { DrinkGrid } from '../components/DrinkGrid'
import { useAppStore } from '../stores/useAppStore'
import { EmptyState } from '../components/EmptyState'

export const IndexPage = () => {
    const drinks = useAppStore((state) => state.drinks)

    const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks])

    return (
        <>
            {hasDrinks ? (
                <DrinkGrid drinks={drinks} />
            ) : (
                <EmptyState type='search' />
            )}
        </>
    )
}
