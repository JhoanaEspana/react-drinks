import { Heart, Search } from 'lucide-react'

interface EmptyStateProps {
    type: 'favorites' | 'search'
}

export const EmptyState = ({ type }: EmptyStateProps) => {
    const config = {
        favorites: {
            icon: Heart,
            title: 'Sin favoritos aún',
            description: 'Los cócteles que guardes aparecerán aquí',
        },
        search: {
            icon: Search,
            title: 'Sin resultados',
            description: 'Intenta con otro nombre o categoría',
        },
    }

    const { icon: Icon, title, description } = config[type]

    return (
        <div className='flex flex-col items-center justify-center py-24 animate-fade-in'>
            <div className='relative mb-8'>
                <div className='w-24 h-24 rounded-full bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center'>
                    <Icon className='w-10 h-10 text-primary/50' />
                </div>
                <div className='absolute inset-0 rounded-full animate-pulse-glow' />
            </div>
            <h3 className='font-display text-2xl font-medium text-primary mb-2'>
                {title}
            </h3>
            <p className='text-muted-foreground text-center max-w-xs text-md'>
                {description}
            </p>
        </div>
    )
}
