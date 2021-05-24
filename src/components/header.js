import React from 'react';


const getTheYear = () => {
    const newDate = new Date;
    return newDate.getFullYear();
}

const Header = () => {
    return <div> It's the year { getTheYear() }</div>
}

export default Header;