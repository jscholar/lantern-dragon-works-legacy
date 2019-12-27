import React from 'react'

import NavItem from './NavItem/NavItem'
import { ROUTES as routes } from './../../routes/ROUTES'

const Navbar = () => {
    return (
        <div>
            {routes.map(route => (
                <NavItem key={route.name} path={route.path}>{route.name}</NavItem>
            ))}
        </div>
    )
}

export default Navbar
