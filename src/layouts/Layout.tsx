import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import Modal from '../components/Modal'
import { useEffect } from 'react'
import { useAppStore } from '../stores/useAppStore'

export const Layout = () => {
    const loadFavorites = useAppStore((state) => state.loadFavorites)

    useEffect(() => {
        loadFavorites()
    }, [loadFavorites])

    return (
        <div>
            <Header />
            <main className='container mx-auto px-6 py-5'>
                <Outlet />
            </main>

            <Modal />
        </div>
    )
}
