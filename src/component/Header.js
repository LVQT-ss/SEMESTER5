// Header.js
import React from 'react';
import "../style/Stylle.css";
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
const Header = () => {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div>
            <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>

                <div style={{ position: 'relative' }}>

                    <ul>
                        <li> <a className='home' href='#'
                            style={{
                                backgroundColor: theme.backgroundColor,
                                color: theme.color,
                                outline: 'none'
                            }} data-testid="toggle-theme-btn"
                        >
                            Home
                        </a></li>
                        <li> <a className='news' href='#'
                            style={{
                                backgroundColor: theme.backgroundColor,
                                color: theme.color,
                                outline: 'none'
                            }} data-testid="toggle-theme-btn"
                        >
                            News
                        </a></li>
                        <li> <a className='contact' href='#'
                            style={{
                                backgroundColor: theme.backgroundColor,
                                color: theme.color,
                                outline: 'none'
                            }} data-testid="toggle-theme-btn"
                        >
                            Contact
                        </a></li>
                        <li> <a href='#about'
                            style={{
                                backgroundColor: theme.backgroundColor,
                                color: theme.color,
                                outline: 'none'
                            }} data-testid="toggle-theme-btn" >
                            About
                        </a></li>
                        <li> <a className='switch-mode' href='#' onClick={toggle}
                            style={{

                                backgroundColor: theme.backgroundColor,
                                color: theme.color,
                                outline: 'none'
                            }} data-testid="toggle-theme-btn"
                        >
                            Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                        </a></li>
                    </ul>


                </div>

            </nav>

        </div>
    );
}

export default Header;
