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
<<<<<<< HEAD
            <a href = "#" className='Logo'>Logo</a>
=======
            <a href = "#" className='Logo'>DrainBBU</a>
            <div className='Menu-toggle'></div>
>>>>>>> 8d024dc9c3313aaa9b2d8d308a204c4a07fc3524
            <nav>
                <ul  id='NavBar_button'>
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