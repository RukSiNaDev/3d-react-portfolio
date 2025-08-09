import React, { useState } from 'react'
import { navLinks } from '../constants/index.js';
import { useLanguage } from "../context/LanguageContext";

const NavItems = ({ onClick = () => { } }) => (
    <div>
        <ul className="nav-ul">
            {navLinks.map((item) => (
                <li key={item.id} className="nav-li">
                    <a href={item.href} className="nav-li_a" onClick={onClick}>
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);


const Nabar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { lang, toggleLang } = useLanguage();
    
    return (
        <header className='text-white fixed top-0 left-0 right-0 z-50 bg-[#A0C878]'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex items-center justify-between items-center
                 py-5 mx-auto c-space'>
                    <a href='/' className='text-white font-bold text-xl 
                    hover:text-[#FFFDF6] transition-colors'>
                        Ruksina
                    </a>
                    <div className='flex items-center'>
                        <button className='flex sm:hidden mr-2 cursor-pointer' onClick={toggleLang}>
                            {lang === 'th' ? <img className='w-8' src='./assets/eng-icon.png' /> : <img className='w-8' src='./assets/thai-icon.png' />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#FFFDF6] hover:text-white focus:outline-none sm:hidden flex"
                            aria-label="Toggle menu">
                            <img src={isOpen ? './assets/close.svg' : './assets/menu.svg'} alt="toggle" className="w-6 h-6" />
                        </button>
                    </div>
                    <nav className="sm:flex hidden">
                        <NavItems />
                        <button className='ml-2 cursor-pointer' onClick={toggleLang}>
                            {lang === 'th' ? <img className='w-8' src='./assets/eng-icon.png' /> : <img className='w-8' src='./assets/thai-icon.png' />}
                        </button>
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems onClick={() => setIsOpen(!isOpen)} />
                </nav>
            </div>
        </header>
    )
}

export default Nabar