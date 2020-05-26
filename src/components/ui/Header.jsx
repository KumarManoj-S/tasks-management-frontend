import React from 'react';
import '../../css/header.css'

const Header = (props) => {
    return (
        <div className="header">
            {props.children}
        </div>
    );
};

export default Header;