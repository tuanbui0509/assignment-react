import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

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
    return (
        <Route
            path={to}
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
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <nav className="nav nav-pills nav-fill">
                        {showMenus(menus)}
                    </nav>

                </div>
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
