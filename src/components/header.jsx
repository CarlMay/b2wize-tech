import React from 'react';
import {Link} from 'react-router-dom';
import {Image} from 'semantic-ui-react';

const Header = () => {

    const iconStyle = {
        width: 'auto',
        height: 'auto',
        marginRight: '0.25rem'
    };

    const navStyle = {
        backgroundColor: '#1ed760',
    };

    const linkStyle = {
        color: '#181823',
        cursor: 'pointer !important',
        marginRight: '1rem',
        maxWidth: '25%',
        fontWeight: 'bold',
    };

    return (
        <div className={'ui secondary pointing menu'} style={navStyle}>
            <div className={'left menu'}>
                <Link to={'/B2Wize'} className={'item'} style={linkStyle}>
                    <Image src='/images/b2wize_logo_dark.png' size='mini' style={iconStyle}/>
                    <span>B2Wize</span>
                </Link>
            </div>
        </div>
    );
};

export default Header;
