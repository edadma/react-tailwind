import PropTypes from 'prop-types'
import { FunctionComponent } from 'react'

export function childrenOf(...types: Array<FunctionComponent>) {
  let fieldType = PropTypes.shape({
    type: PropTypes.oneOf(types),
  })

  return PropTypes.oneOfType([fieldType, PropTypes.arrayOf(fieldType)])
}

/**
 * Generates the correct PropType when trying to ensure a specific Component
 * @param {Class} component the React component you expect the children to be
 * @returns {PropType}
 */
export default function componentPropType(component: FunctionComponent) {
  const componentShape = PropTypes.shape({
    type: PropTypes.oneOf([component]),
  })

  // Need to accept the class, false (conditional rendering) or a combination in array form
  return PropTypes.oneOfType([
    componentShape,
    PropTypes.oneOf([false]),

    PropTypes.arrayOf(PropTypes.oneOfType([componentShape, PropTypes.oneOf([false])])),
  ])
}
