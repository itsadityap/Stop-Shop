import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";

import {ReactComponent as Nyklogo } from '../../assets/download.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return(
        <Fragment>
            <div className='navigation'>
                <Link className = 'logo-container' to='/'>
                    <Nyklogo className = 'logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to = '/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to = '/auth'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;