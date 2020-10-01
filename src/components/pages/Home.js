import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HomePg from '../HomePg'

function Home(){
    return(
        <>
          <HomePg/>
          <Cards/>
          <Footer/>
        </>
    )
}

export default Home