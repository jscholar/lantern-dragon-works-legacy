import React from 'react'
import PropTypes from 'prop-types'

import classes from "./Profile.module.scss"

function Profile(props) {
    return (
        <div className={classes.Profile}>
            <div className={classes.name}>
                {props.name}
            </div>
            <div className={classes.bio}>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.element.isRequired
}

export default Profile

