import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Mental Wellness is important! Please take care of yourself during these times.</h1>
            <div className='cards__container'>
              <div className='cards__wrapper'>
                <ul className='cards__items'>
                  <CardItem src="final-image/motivation.jpg" 
                  text="Self-care tips to practice"
                  label='Tips' path='/guides'/>
                  <CardItem src="final-image/notalone.jpg" 
                  text="Reminding yourself that you matter"
                  label='Health' path='/mentalwellness'/>
                </ul>
                <ul className='cards__items'>
                  <CardItem src="final-image/nature.jpg" 
                  text="Connecting with nature can be very peaceful"
                  label='Tips' path='/guides'/>
                  <CardItem src="final-image/meditation.jpg" 
                  text="How meditation can help your mind, mood, and health"
                  label='Health' path='/mentalwellness'/>
                </ul>
              </div>
            </div>
        </div>
    )
}

export default Cards
