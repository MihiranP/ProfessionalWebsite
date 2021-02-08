import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton)
    return (
        <>
            <nav className="navigation">
                <div className="navigation-container">
                    <Link to="/" className="navigation-logo">
                        <i class="fas fa-home"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/About-Me' className='nav-links' onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Portfolio' className='nav-links' onClick={closeMobileMenu}>
                                Portfolio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Qualifications' className='nav-links' onClick={closeMobileMenu}>
                                Qualifications
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Service' className='nav-links' onClick={closeMobileMenu}>
                                Service
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation
