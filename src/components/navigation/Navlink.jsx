import React from 'react';
import { Link } from 'react-router-dom';

function NavLink(props) {
    const { link, children } = props;
    return (
        <Link to={link} className='font-semibold text-black no-underline py-2 px-3 hover:bg-black  hover:text-white transition'>
            {children}
        </Link>
    );
}

export default NavLink;
