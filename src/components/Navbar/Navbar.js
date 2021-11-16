import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const search_icon = <FontAwesomeIcon icon={faSearch}/>
const shopping_basket_icon = <FontAwesomeIcon icon={faShoppingBag}/>

export default function Navbar() {
    return (
        <nav className='Navbar'>
            <div className='NavList-left'>
                <Link to='/' ><div className='Logo'>HAKK</div></Link>
             <ul className='List-left'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/women'>Women</Link></li>
                <li><Link to='/men'>Men</Link></li>
                <li><Link to='/kids'>Kids</Link></li>
             </ul>
            </div>

            <div className='NavList-right'>
                <div className='icon'>{search_icon}</div>
             <ul className='List-right'>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
             </ul>
                <Link to='/shopping-bag'><div className='icon'>{shopping_basket_icon}</div></Link>
            </div>
            

            
        </nav>
    )
}
