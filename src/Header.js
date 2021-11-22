import React, { Component } from "react";
import './Header.css'


class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <ul>
                   <li> <img src="logo1.png"/></li>
                    <li>Home</li>
                    <li>product</li>
                   <li>Cart</li>
                </ul>

            
            </React.Fragment>
        )
    }
}

export default Header;