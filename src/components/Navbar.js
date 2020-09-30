import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    //Set the click in the value
    // Set the states from False to True

    //from ul create our Nave bar to click and drop down and disappears
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    //display the button in mobile
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };
    /* IDK WHERE I may need this
    useEffect(() => {
        showButton()
    }, []);*/
    window.addEventListener('resize', showButton);

    return (
        <>
          <nav className='navbar'>
              <div className='navbar-container'>
                  <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Relax&Chill <i className='fab fa-typo3' />
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                      <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/mentalwellness' className='nav-links' onClick={closeMobileMenu}>
                            Mental Wellness
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/guides' className='nav-links' onClick={closeMobileMenu}>
                            Self-Care Guides
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/resources' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Resources
                        </Link>
                    </li>
                  </ul>
                {button && <Button buttonStyle='btn--outline'>LEARN MORE</Button>}
              </div>
          </nav>
        </>
    )
}

export default Navbar
