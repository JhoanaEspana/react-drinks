import { Heart } from 'lucide-react'
import type { Drink } from '../types'
import { useAppStore } from '../stores/useAppStore'

interface DrinkCardProps {
    drink: Drink
}

export const DrinkCard = ({ drink }: DrinkCardProps) => {
    const { strDrink, strDrinkThumb } = drink

    const selectRecipe = useAppStore((state) => state.selectRecipe)

    return (
        <div className='card-elegant group'>
            <div className='relative overflow-hidden aspect-4/5'>
                {
                    <img
                        src={strDrinkThumb}
                        alt={strDrink}
                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                    />
                }

                <div className='absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400' />

                <button
                    //onClick={onToggleFavorite}
                    className={`text-red-300 absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
                        //isFavorite
                        //</div>? 'bg-primary text-white shadow-lg shadow-primary/25'
                        //: 'bg-white/90 text-foreground/50 hover:bg-white hover:text-primary'
                        ''
                    }`}>
                    <Heart
                        className={`w-6 h-6 transition-all ${
                            //isFavorite ? 'fill-current' : ''
                            ''
                        }`}
                    />
                </button>

                <div className='absolute inset-x-4 bottom-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400'>
                    <button
                        onClick={() => selectRecipe(drink.idDrink)}
                        className='cursor-pointer w-full btn-primary-elegant h-10 rounded-lg text-xs uppercase tracking-wider'>
                        Ver Receta
                    </button>
                </div>
            </div>

            <div className='p-5'>
                <h3 className='font-display text-lg font-medium text-card-foreground line-clamp-1 group-hover:text-primary transition-colors duration-300'>
                    {strDrink}
                </h3>
                <p className='text-xs text-muted-foreground mt-1 uppercase tracking-wider'>
                    categoria del drink
                </p>
            </div>
        </div>
    )
}
