import React from 'react';
import"./Como.css";
function Header() {
    return (
        <div>
            <nav>
                <h4>app name</h4>

                <ul>
                    <li><a href='/home'>home</a></li>
                    <li><a href='/login'>login</a> </li>
                    <li><a href='/register'> register</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;