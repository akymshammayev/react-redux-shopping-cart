import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Search from './Search'

const Layout = ({onChange, search}) => {
    return (
        <>
            <Header />
            <Search onChange={onChange} search={search}/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;