import React from 'react';

const Header =()=>{
    return(
        <header>
            {/*creating the logo*/}  
             <div className="logo">Logo</div>

             {/*creating search bar component*/}
             <input type="text" placeholder="Search products..." />
             
             {/*creating navigation menu with links to different parts of the website*/}
             <nav>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/categories'>categories</a></li>
                    <li><a href='/cart'>cart</a></li>
                    <li><a href='/account'>account</a></li>
                </ul>
             </nav>

             {/*creating links to sign in or creating a new account*/}
             <div className='user-account'>
             <a href="/login">Login</a> | <a href="/register">Register</a>
             </div>
                   {/* Adding a button */}
                  <button className='header'>search</button>

        </header>
        );
}
export default Header;