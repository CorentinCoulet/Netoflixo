import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Netoflixo from '../assets/Netflix-logo.png';
import BlueHead from '../assets/blueHead.png';
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
    <nav className='flex flex-row justify-between h-16 bg-gradiente items-center mb-3.5 px-0.5 relative transition duration-400 ease-in-out text-lg'>
      <ul className='flex flex-row list-none p-0 m-0 items-center justify-center'>
        <li className='list-none px-3'>
            <Link to="/browse">
                <img src={Netoflixo} alt="logo Netflix" className='h-8 w-24'/>
            </Link> 
        </li>

        <li className='list-none px-3'>
            <Link to="/browse" className='no-underline cursor-pointer text-inherit hover:no-underline hover:text-grayHov'>Accueil</Link>
        </li>

        <li className='list-none px-3'>
            <Link to="/browse/series" className='no-underline cursor-pointer text-inherit hover:no-underline hover:text-grayHov'>Séries</Link>
        </li>

        <li className='list-none px-3'>
            <Link to="/browse/films" className='no-underline cursor-pointer text-inherit hover:no-underline hover:text-grayHov'>Films</Link>
        </li>

        <li className='list-none px-3'>
            <Link to="/latest" className='no-underline cursor-pointer text-inherit hover:no-underline hover:text-grayHov'>Nouveautés les plus regardées</Link>  
        </li>

        <li className='list-none px-3'>
            <Link to="/browse/my-list" className='no-underline cursor-pointer text-inherit hover:no-underline hover:text-grayHov'>Ma liste</Link>
        </li>

        <li className='list-none px-3'>
            <Link to="/browse/original-audio" className='no-underline cursor-pointer text-inherit hover:no-underline hover:text-grayHov'>Explorer par langue</Link>
        </li>
      </ul>
      <ul className='flex flex-row list-none p-0 m-0 items-center justify-center'>
        <li className='list-none px-3'>
            <div className={`relative cursor-pointer flex items-center ease-out duration-300 ${isMenuOpen && 'w-52 pr-5 bg-borderOpen'}`}>
                <svg onClick={toggleMenu} className='w-6 h-6 p-1.5'>
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
                    <input type="text" placeholder="Titres, personnes, genres" className={`border-none outline-none bg-transparent text-white ${isMenuOpen && 'w-36 bg-transparent'}`} />
                    </div>
                )}
            </div>
        </li>
        <li className='list-none px-3 no-underline cursor-pointer text-inherit hover:no-underline hover:text-grayHov'>Jeunesse</li>
        <li className='list-none px-3'><NotificationIcon /></li>
        <li className='list-none px-3'>
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