import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Netoflixo from '../assets/Netflix-logo.png';
import BlueHead from '../assets/blueHead.png';
import NotificationIcon from './NotificationIcon';
import Search from '../assets/search.png';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => { 

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const inputRef = useRef<HTMLElement | null>(null);
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
          if (inputRef.current && !inputRef.current.contains(event.target as HTMLElement)) {
            setIsMenuOpen(false);
          }
        };

        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
        
        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('scroll', handleScroll);
        
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
          document.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <nav className={`flex flex-row justify-between w-full h-16 bg-gradiente items-center px-3.5 fixed top-0 transition duration-400 ease-in-out text-lg ${scrolled && 'bg-blackNeto'}`}>
      <ul className='flex flex-row list-none p-0 mx-3.5 items-center justify-center'>
        <li className='list-none px-3'>
            <Link to="/browse">
                <img src={Netoflixo} alt="logo Netflix" className='h-8 w-24 ml-2 mr-3'/>
            </Link> 
        </li>

        <li className='list-none px-3'>
            <Link to="/browse" className='no-underline cursor-pointer text-sm hover:no-underline hover:text-grayHov'>Accueil</Link>
        </li>

        <li className='list-none px-3'>
            <Link to="/browse/series" className='no-underline cursor-pointer text-sm hover:no-underline hover:text-grayHov'>Séries</Link>
        </li>

        <li className='list-none px-3'>
            <Link to="/browse/films" className='no-underline cursor-pointer text-sm hover:no-underline hover:text-grayHov'>Films</Link>
        </li>

        <li className='list-none px-3'>
            <Link to="/latest" className='no-underline cursor-pointer text-sm hover:no-underline hover:text-grayHov'>Nouveautés les plus regardées</Link>  
        </li>

        <li className='list-none px-3'>
            <Link to="/browse/my-list" className='no-underline cursor-pointer text-sm hover:no-underline hover:text-grayHov'>Ma liste</Link>
        </li>

        <li className='list-none px-3'>
            <Link to="/browse/original-audio" className='no-underline cursor-pointer text-sm hover:no-underline hover:text-grayHov'>Explorer par langue</Link>
        </li>
      </ul>
      <ul className='flex flex-row list-none p-0 m-0 items-center justify-center'>
        <li className='list-none px-3'>
            <div className={`relative cursor-pointer flex items-center ease-out duration-300 ${isMenuOpen && 'w-max pr-5 bg-borderOpen border-2 border-white'}`}>
                <img src={Search} alt='icone de recherche' onClick={toggleMenu} className='w-8 h-8 p-1.5' />
                {isMenuOpen && (
                    <div ref={inputRef as React.MutableRefObject<HTMLDivElement | null>}>
                    <input type="text" placeholder="Titres, personnes, genres" className={`border-none outline-none bg-transparent text-white ${isMenuOpen && 'bg-transparent'}`} />
                    </div>
                )}
            </div>
        </li>
        <li className='list-none px-3 no-underline cursor-pointer text-sm hover:no-underline hover:text-grayHov'>Jeunesse</li>
        <li className='list-none px-3'><NotificationIcon /></li>
        <li className='list-none px-3 mr-8'>
            <a href="/YourAccount">
                <span role="presentation">
                    <img className="w-9 h-9 rounded" 
                        src={BlueHead} alt="profil image">
                    </img>
                </span>
            </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;