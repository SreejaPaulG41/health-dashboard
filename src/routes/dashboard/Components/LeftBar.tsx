import React from 'react';
import Logo from '../../../Components/LeftSIdebar/Logo';
import NavBar from '../../../Components/LeftSIdebar/NavBar';

const LeftBar: React.FC = () => {
    return <div className='bg-indigo-50 pt-2'>
        <Logo />
        <NavBar />
    </div>;
}

export default LeftBar;
