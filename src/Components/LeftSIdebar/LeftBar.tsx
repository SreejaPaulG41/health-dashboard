import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';

const LeftBar: React.FC = () => {
    return <div className='bg-indigo-50 pt-2'>
        <Logo />
        <NavBar />
    </div>;
}

export default LeftBar;
