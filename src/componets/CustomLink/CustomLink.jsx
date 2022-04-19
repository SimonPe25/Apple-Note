import React from 'react';
import {Link, useMatch} from 'react-router-dom';
import './CustomLink'

const CustomLink = ({children, to, className, ...props}) => {
    const math = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link 
        to={to}
       className={math ? "active" : "none"}
    //     style={{
    //         backgroundColor : math ? "green" : "white"       
    // }}
        {...props}>
        {children}
        </Link>
    );
};

export default CustomLink;