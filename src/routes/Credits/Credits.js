import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Profile from "../../components/Profile/Profile"

import profiles from "./../../constants/profiles"

export class Credits extends Component {
    static propTypes = {
        
    }
    
    render() {
        return (
            <div>
                {profiles.map((profileInfo) => (
                    <Profile {...profileInfo} />
                ))}
            </div>
        )
    }
}

export default Credits
