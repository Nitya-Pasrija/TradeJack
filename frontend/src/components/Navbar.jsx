import React from 'react';
import Hamburger from 'hamburger-react';

function Navbar() {
    return (
        <div className='w-full h-16 px-8 mb-2 flex justify-between items-center bg-blue-700 '>
            <div className='text-2xl font-bold'>TradeJack</div>
            <div className='flex space-x-4'>
            {/* <Hamburger onToggle={toggled => ...} /> */}
                <a href='/'>Home</a>
                <a href='/'>Property</a>
                <a href='/'>Dealers</a>
                <a href='/'>Exporter</a>
                <a href='/'>Importer</a>
                <a href='/'>LabourAgency</a>
                <a href='/'>Policy</a>
                <button className='bg-white px-3 rounded-md'>SignIn</button>
            </div>
        </div>
    )
}

export default Navbar