import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'
import { BiLogIn } from 'react-icons/bi'
import { GrContact } from 'react-icons/gr'
import { FiShoppingCart } from 'react-icons/fi'





export default function Navbar() {
    return (
        <nav className='Navbar'>
            <div className='NavList-left'>
                <Link to='/' ><div className='Logo'>Logo</div></Link>
             <ul className='List-left'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/women'>Women</Link></li>
                <li><Link to='/men'>Men</Link></li>
                <li><Link to='/kids'>Kids</Link></li>
             </ul>
            </div>

            <div className='NavList-right'>
                <div className='icon'><FiSearch/>  <input type='text' placeholder='Search products' /></div>
                
             
                <div><Link to='/login'><BiLogIn/> Login</Link></div>
                <div><Link to='/contact'><GrContact /> Contact</Link></div>
                <div><Link to='/shopping-bag'><FiShoppingCart /> Shopping bag(1)</Link></div>
             
                
            </div>
            

            
        </nav>
    )
}
