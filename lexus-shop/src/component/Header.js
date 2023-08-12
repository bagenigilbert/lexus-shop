import React from 'react';

const Header =()=>{
    return(
     <header>
        {/*creating the logo*/}  
             <div className="logo">Your Logo</div>

             //creating search bar component
             <input type="text" placeholder="Search products..." />
      </header>
        );
}