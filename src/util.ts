import PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import _ from 'lodash'

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

export const childType = (child: ReactNode, name: string, parent: string) => {
  if (_.matchesProperty('type.name', name)(child))
    throw new Error(`child component '${name}' must be used with component '${parent}'`)
}
