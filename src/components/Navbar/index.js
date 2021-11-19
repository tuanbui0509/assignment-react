import React, { useContext } from 'react';
import { Link, Route } from 'react-router-dom';
import { Context } from '../../store/context/Context';

const menus = [
    {
        label: 'Dashboard',
        to: '/',
        exact: true
    },
    {
        label: 'User',
        to: '/user',
        exact: false
    },
    {
        label: 'Schedule',
        to: '/schedule',
        exact: false
    },
    {
        label: 'Login',
        to: '/login',
        exact: false
    }
]
// custom Link
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    let paths
    if (to === '/') {
        paths = ['/', '/dashboard', '/dashboard/*']
    }
    else if (to === '/schedule') {
        paths = ['/schedule', '/schedule/*']
    }
    else {
        paths = to
    }
    return (
        <Route
            path={paths}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let active = match ? 'active' : ''
                return (
                    <Link className={`nav-link ${active}`} to={to}>{label}</Link>
                )
            }}
        />
    );
}

const Menu = () => {
    const { login } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <nav className="nav nav-pills nav-fill">
                        {showMenus(menus)}
                    </nav>
                </div>
                {login ? <span>{login.email}</span> : null}
            </div>
        </nav>
    )
}

const showMenus = (menus) => {

    let result = null;
    if (menus.length > 0) {
        result = menus.map((menu, index) => {
            return (
                <MenuLink
                    key={index}
                    label={menu.label}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                />
            );
        })
    }
    return result;
}

export default Menu
