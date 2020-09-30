import React from 'react';
import { Button } from './Button';
import './HomePg.css';
import '../App.css';

//Need to change the video to something more calmer must export as mp4
function HomePg(){
  return(
    <div className='home-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted/>
      <h1>Breathe</h1>
      <p>You got this!</p>
      <div className='home-btns'>
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>
            Relax & BREATHE
        </Button>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>
            FIND RESOURCES <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>

  )
}

export default HomePg