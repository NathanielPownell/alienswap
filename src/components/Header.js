import React from 'react'
import './header.css'
import punkLogo from '../assets/header/alienswap.png'
import searchImg from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'
import hamburger from '../assets/hamburger.png'

const Header = () => {
    return (
        <>
        <div className='header'>
            <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' alt='' />
            </div>
            <div className='searchbar'>
                <div className='searchIconContainer'>
                    <img className='searchImg' src={searchImg} alt=''></img>
                </div>
                <input className='searchInput' placeholder='Collection, item or user' />
            </div>
            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className='headerActions'>
                <div className='themeSwitchContainer'>
                    <img src={themeSwitchIcon} />
                </div>
            </div>
            <div className='loginBtn'>JOIN TODAY</div>
        </div>
        <div className='mobile'>
            <img src={hamburger} />
            <img className='punkLogo' src={punkLogo} />
        </div>
        </>
    )
}

export default Header;