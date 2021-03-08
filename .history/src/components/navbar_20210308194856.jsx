import React, { Component } from 'react';
class Navbar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-warning h3">
            <span>
                <img className ="mr-2" src='images/me.png' alt=""
                style={{width: "40px", height: "40px", borderRadius :"40%"}}
                />
                Achraf Mhadhbi
            </span>
            </nav> 
         );
    }
}
 
export default Navbar;