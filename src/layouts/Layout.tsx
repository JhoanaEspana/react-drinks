import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export const Layout = () => {
    return (
        <div>
            <Header />
            <main className='container mx-auto px-6 py-5'>
                <Outlet />
            </main>
        </div>
    )
}
