import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Netoflixo from '../src/assets/Netflix-logo.png';
import BlueHead from '../src/assets/blueHead.png';
import NotificationIcon from './NotificationIcon';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => { 

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const inputRef = useRef<HTMLElement | null>(null);
    
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
          if (inputRef.current && !inputRef.current.contains(event.target as HTMLElement)) {
            setIsMenuOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    

  return (
    <nav className='navbar'>
      <ul>
        <li>
            <Link to="/browse">
                <img src={Netoflixo} alt="logo Netflix" className='netoflixo'/>
            </Link> 
        </li>
        <li>
            <Link to="/browse" className='link-navbar'>Accueil</Link>
        </li>
        <li>
            <Link to="/browse/series" className='link-navbar'>Séries</Link>
        </li>
        <li>
            <Link to="/browse/films" className='link-navbar'>Films</Link>
        </li>
        <li>
            <Link to="/latest" className='link-navbar'>Nouveautés les plus regardées</Link>  
        </li>
        <li>
            <Link to="/browse/my-list" className='link-navbar'>Ma liste</Link>
        </li>
        <li>
            <Link to="/browse/original-audio" className='link-navbar'>Explorer par langue</Link>
        </li>
      </ul>
      <ul>
        <li>
            <div className={`search ${isMenuOpen ? 'open' : ''}`}>
                <svg onClick={toggleMenu}>
                    <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 
                        6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 
                        18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 
                        1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 
                        21.2929L21.2929 22.7071L15.6177 17.0319Z" 
                        fill="currentColor">
                    </path>
                </svg>
                {isMenuOpen && (
                    <div ref={inputRef as React.MutableRefObject<HTMLDivElement | null>}>
                    <input type="text" placeholder="Titres, personnes, genres" />
                    </div>
                )}
            </div>
        </li>
        <li>Jeunesse</li>
        <li><NotificationIcon /></li>
        <li>
            <a href="/YourAccount">
                <span className="profile-link" role="presentation">
                    <img className="profile-icon" 
                        src={BlueHead} alt="profil image">
                    </img>
                </span>
            </a>
            <span className="caret" role="presentation"></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;