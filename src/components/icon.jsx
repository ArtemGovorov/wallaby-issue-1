import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = ({ faIcon }) => <FontAwesomeIcon icon={faIcon} />

Icon.propTypes = {
  faIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
}
