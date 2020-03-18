import React,{useEffect , useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../style/NavBar.scss'
import $ from 'jquery';

const NavBar = () => {
    const [showButtonNav,setButtonNav] = useState(false);
    const [showNavB,setNavB] = useState(true);
    useEffect(() => {
        navSlide();
    });

    function navSlide(){
        const burger = document.querySelector('.Burger');
        burger.addEventListener('click',() => {
            burger.classList.toggle('toggle');
            $('nav').toggleClass('nav-active');
        })
    }

    return(
        <div className='NavBar'>
            <a href = "/" className='Logo'>DrainBBU</a>
            {/* <div className='Menu-toggle'></div> */}
            <nav>
                <ul  id='NavBar_button'>
                    <li><NavLink exact to="/" activeClassName="Active">Overview</NavLink></li>
                    <li><NavLink exact to="/model" activeClassName="Active">Model</NavLink></li>
                    <li><NavLink exact to="/graph" activeClassName="Active">Graph</NavLink></li>
                </ul>
            </nav>
            <div className='Burger' >
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </div>
    );
}

export default NavBar;