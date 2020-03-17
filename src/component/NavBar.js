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
            setButtonNav(true);
        })
        $( '#NavBar_button li a' ).on( 'click', function() {
            $( this ).parent().parent().find('li a.Active').removeClass( 'Active' );
            $( this ).addClass( 'Active' );
        });
    }
    function beHidden(){
        setButtonNav(false);

    }

    return(
        <div className='NavBar'>
            <a href = "/" className='Logo'>DrainBBU</a>
            {/* <div className='Menu-toggle'></div> */}
            <nav>
                <ul  id='NavBar_button'>
                    <li><NavLink exact to="/" activeClassName="is-active">Overview</NavLink></li>
                    <li><NavLink exact to="/model" activeClassName="is-active">Model</NavLink></li>
                    <li><NavLink exact to="/graph" activeClassName="is-active">Graph</NavLink></li>
                </ul>
            </nav>
            <div className='Burger' >
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            {showButtonNav && <div className="ButtonNavM" onClick={beHidden}>
                <ul  id='NavBar_button'>
                        <li><NavLink exact to="/" activeClassName="is-active">Overview</NavLink></li>
                        <li><NavLink exact to="/model" activeClassName="is-active">Model</NavLink></li>
                        <li><NavLink exact to="/graph" activeClassName="is-active">Graph</NavLink></li>
                    </ul>
                </div>}
        </div>
    );
}

export default NavBar;