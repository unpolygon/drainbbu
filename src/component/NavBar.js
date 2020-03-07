import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.scss'

const NavBar = () => {
    useEffect(() => {
        navSlide();
    });

    function navSlide(){
        const burger = document.querySelector('.Burger');
        // const nav = document.querySelector('.nav-links');
        // const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click',() => {
            // nav.classList.toggle('nav-active');

            // navLinks.forEach((link, index) => {
            //     if(link.style.animation){
            //         link.style.animation = ''
            //     }
            //     else link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+1}s`;
            // })

            burger.classList.toggle('toggle');
        })
    }

    return(
        <div className='NavBar'>
            <a href = "#" className='Logo'>DrainBBU</a>
            <div className='Menu-toggle'></div>
            <nav>
                <ul>
                    <li><Link to="/" class='Active'>Home</Link></li>
                    <li><Link to="/Overview" >Overview</Link></li>
                    <li><Link to="/Graph" >Graph</Link></li>
                </ul>
            </nav>
            <div className='Burger'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
        </div>
    );
}

export default NavBar;