import React from 'react'
import GamesCarousel from '../components/GamesCarousel'
import BestGames from '../components/BestGames'
import Services from '../components/Services'
import Coment from '../components/Coment'
import Contact from '../components/Contact'
function Home() {
  return (
    <div className=' text-white'>
    <GamesCarousel/>
    <BestGames/>
    <Services/>
    <Coment/>
    <Contact/>
    </div>
  )
}

export default Home