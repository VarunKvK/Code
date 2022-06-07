import React from "react";
import './container.css';
import { Icon } from '@iconify/react';

function PetContainer() {
    return (
        <div className="firstpage">
            <div className="menucontainer">
                <div className="menuicon">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <Icon icon="cil:animal" color="black" className="paws" />
                <h1 className="header">ThePets<span className='fullstop'>.</span></h1>
                <Icon icon="clarity:shopping-cart-line" color="black" className="cart" />
                <Icon icon="bx:user-circle" color="#ffc700" className="user"/>
            </div>
            <div className="content">
                <Icon icon="cil:animal" color="black" className="paws" />
                <div className="doggo">
                    <img src="./dog.png" alt="Dog" className="dog" />
                </div>
            </div>
        
        </div>

    );
}

export default PetContainer;