import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.scss'
import $ from 'jquery';

const NavBar = () => {
    useEffect(() => {
        navSlide();
    });

    function navSlide(){
        const burger = document.querySelector('.Burger');
        burger.addEventListener('click',() => {
            burger.classList.toggle('toggle');
        })
        $( '#NavBar_button li a' ).on( 'click', function() {
            $( this ).parent().parent().find('li a.Active').removeClass( 'Active' );
            $( this ).addClass( 'Active' );
        });
    }

    return(
        <div className='NavBar'>
            <a href = "#" className='Logo'>DrainBBU</a>
            <div className='Menu-toggle'></div>
            <nav>
                <ul  id='NavBar_button'>
                    <li><Link to="/" className='Active'>Home</Link></li>
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