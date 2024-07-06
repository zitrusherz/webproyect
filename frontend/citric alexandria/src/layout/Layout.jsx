import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout({children}) {
    return (
        <>
        <header className=' position-fixed z-index-header'><Header/></header>
        <main className='margin-main'>{children}
        </main>
        <footer >
            <Footer/>
        </footer>
        </>
    )
}

export default Layout