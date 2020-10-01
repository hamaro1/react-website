import React from 'react';
import { Button } from './Button';
import './HomePg.css';
import '../App.css';

//Need to change the video to something more calmer must export as mp4
function HomePg(){
  return(
    <div className='home-container'>
      <video src="/videos/calm.mp4" autoPlay loop muted/>
      <h1>Breathe</h1>
      <p>Learn more about Mental Health</p>
      <div className='home-btns'>
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>
            RESOURCES
        </Button>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>
            FIND GUIDES <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>

  )
}

export default HomePg