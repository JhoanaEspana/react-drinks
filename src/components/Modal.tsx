import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useMemo } from 'react'
import { Heart } from 'lucide-react'
import { useAppStore } from '../stores/useAppStore'
import type { Recipe } from '../types'

export default function Modal() {
    const modal = useAppStore((state) => state.modal)
    const closeModal = useAppStore((state) => state.closeModal)
    const selectedRecipe = useAppStore((state) => state.selectedRecipe)
    const handleClickFavorite = useAppStore(
        (state) => state.handleClickFavorite
    )
    const favoriteExists = useAppStore((state) => state.favoriteExists)

    const ingredients = useMemo(() => {
        const ingredientsList = []
        for (let i = 1; i <= 6; i++) {
            const ingredient =
                selectedRecipe[`strIngredient${i}` as keyof Recipe]
            const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe]

            if (ingredient && measure) {
                ingredientsList.push({
                    name: ingredient,
                    measure: measure,
                })
            }
        }
        return ingredientsList
    }, [selectedRecipe])

    if (!selectedRecipe.strDrink) {
        return null
    }

    return (
        <Dialog open={modal} onClose={closeModal} className='relative z-10'>
            <Transition
                show={modal}
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'>
                <div className='fixed inset-0 bg-black/70' />
            </Transition>

            <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center p-4'>
                    <Transition
                        show={modal}
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'>
                        <Dialog.Panel className='relative w-full max-w-2xl transform overflow-hidden rounded-lg bg-card shadow-xl transition-all'>
                            <div className='relative h-56 overflow-hidden'>
                                <img
                                    src={selectedRecipe.strDrinkThumb}
                                    alt={selectedRecipe.strDrink}
                                    className='w-full h-full object-cover'
                                />
                                <div className='absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent' />
                            </div>

                            <div className='px-7 pb-7 -mt-10 relative'>
                                <Dialog.Title className='font-display text-2xl font-semibold text-card-foreground text-center mb-5'>
                                    {selectedRecipe.strDrink}
                                </Dialog.Title>

                                <div className='space-y-5'>
                                    {ingredients.length > 0 && (
                                        <div className='bg-muted/40 rounded-xl p-5'>
                                            <h4 className='text-xs font-medium text-foreground/70 mb-4 uppercase tracking-wider'>
                                                Ingredientes
                                            </h4>
                                            <ul className='space-y-2'>
                                                {ingredients.map(
                                                    (ingredient, index) => (
                                                        <li
                                                            key={index}
                                                            className='flex items-center gap-3 text-sm'>
                                                            <span className='w-1.5 h-1.5 rounded-full bg-primary shrink-0' />
                                                            <span className='text-muted-foreground'>
                                                                <span className='text-foreground font-medium'>
                                                                    {
                                                                        ingredient.name
                                                                    }
                                                                </span>
                                                                {ingredient.measure &&
                                                                    ` — ${ingredient.measure}`}
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}

                                    {selectedRecipe.strInstructions && (
                                        <div>
                                            <h4 className='text-xs font-medium text-foreground/70 mb-3 uppercase tracking-wider'>
                                                Instrucciones
                                            </h4>
                                            <p className='text-muted-foreground text-sm leading-relaxed'>
                                                {selectedRecipe.strInstructions}
                                            </p>
                                        </div>
                                    )}

                                    <div className='flex gap-3 pt-3'>
                                        <button
                                            onClick={closeModal}
                                            className='cursor-pointer flex-1 h-11 rounded-xl uppercase tracking-wider text-xs border border-border hover:bg-muted transition-colors'>
                                            Cerrar
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleClickFavorite(
                                                    selectedRecipe
                                                )
                                            }
                                            className='cursor-pointer flex-1 btn-primary-elegant h-11 rounded-xl uppercase tracking-wider text-xs flex items-center justify-center gap-2'>
                                            <Heart className='w-4 h-4' />
                                            {favoriteExists(
                                                selectedRecipe.idDrink
                                            )
                                                ? 'Quitar de favoritos'
                                                : 'Agregar a favoritos'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition>
                </div>
            </div>
        </Dialog>
    )
}
