import React from 'react'
import PropTypes from 'prop-types'

function Aux(props) {
    return props.children
}

Aux.propTypes = {
    children: PropTypes.node.isRequired
}

export default Aux

