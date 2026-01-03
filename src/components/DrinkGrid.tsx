import { useMemo } from 'react'
import type { Drinks } from '../types'
import { DrinkCard } from './DrinkCard'
import { LoadingCard } from './LoadingCard'

export const DrinkGrid = ({ drinks }: { drinks: Drinks }) => {
    console.log(drinks)

    const isLoading = useMemo(() => drinks.drinks.length === 0, [drinks])

    if (isLoading) {
        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {Array.from({ length: 8 }).map((_, index) => (
                    <LoadingCard key={index} />
                ))}
            </div>
        )
    }

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {drinks.drinks.map((drink, index) => (
                    <div
                        key={drink.idDrink}
                        className='animate-fade-in'
                        style={{ animationDelay: `${index * 0.1}s` }}>
                        <DrinkCard drink={drink} />
                    </div>
                ))}
            </div>
        </>
    )
}
