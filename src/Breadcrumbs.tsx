import React, { Children, FunctionComponent, ReactNode } from 'react'
import { useTheme } from './ThemeProvider'
import { Next } from './Icons'
import componentPropType, { childrenOf } from './util'
import PropTypes from 'prop-types'

interface BreadcrumbsProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  separator?: ReactNode
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children,
  className,
  separator = <Next />,
  ...other
}) => {
  const { theme } = useTheme()
  const last = Children.count(children) - 1

  return (
    <nav className={`${theme.component.breadcrumbs.style.nav} ${className || ''}`} {...other}>
      <ol className={theme.component.breadcrumbs.style.ol}>
        {Children.map(children, (child, index) => (
          <>
            {React.cloneElement(child as React.ReactElement, { isLast: index === last })}
            {index !== last && separator}
          </>
        ))}
      </ol>
    </nav>
  )
}

interface BreadcrumbProps {
  href?: string
  isLast?: boolean
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, href, isLast }) => {
  const { theme } = useTheme()

  return isLast ? (
    <span className={theme.component.breadcrumb.style.span}>{children}</span>
  ) : (
    <a href={href || '#'} className={theme.component.breadcrumb.style.a}>
      {children}
    </a>
  )
}

/**
 * Validates the PropType by ensuring a specific component is passed
 * @param {function} component The React component you expect the prop to be
 * @returns {Error}
 */
export function componentOfType(component: FunctionComponent) {
  return (props: any, propName: string, componentName: string) => {
    const p = props[propName]
    if (p !== undefined && p.type.name !== component.name) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected type of \`${
          component.name
        }\` and received \`${p.type.name ? p.type.name : p.type}\`. Validation failed.`
      )
    }
  }
}

Breadcrumbs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([Breadcrumb]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([Breadcrumb]),
      })
    ),
  ]).isRequired,
}
