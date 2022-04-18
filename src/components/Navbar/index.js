import React from 'react';
import { Link, Route } from 'react-router-dom';
import { menus } from '../../constants/NavBar';
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
    const user = JSON.parse(localStorage.getItem('User'))
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <nav className="nav nav-pills nav-fill">
                        {showMenus(menus)}
                    </nav>
                </div>
                <span className='flex-center'><ion-icon name="person-circle-outline"></ion-icon>{user.name} - {user.title}</span>
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
