import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';

import './Navigation.css';

export default class Navigation extends Component {

    render() {
      const navigation = this.props.navItems.map((item, index) => {
        index += 1; // increment for logic purposes when viewing in the DOM e.g. first nav item will be [navLink_1] instead of [navLink_0]
        return <li key={`navItem_${index}`}><a key={`navLink_${index}`} href={item.url} id={`navLink_${index}`}>{item.text}</a></li>;
      })
        return (
            <ul className="nav">
                {navigation}
                <a href="/shoppingCart" className="shoppingCart"><FontAwesomeIcon icon={faShoppingCart} /></a>
            </ul>
        );
    }
}