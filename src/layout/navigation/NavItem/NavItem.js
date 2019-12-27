import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavItem = props => {
    return (
        <div>
            <NavLink to={props.path}>
                {props.children}
            </NavLink>
        </div>
    )
}

NavItem.propTypes = {
    /**
     * Label for NavItem
     */
    children: PropTypes.string.isRequired,

    /**
     * path to route
     */
    path: PropTypes.string.isRequired
}

export default NavItem
