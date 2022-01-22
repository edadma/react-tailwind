import React, { Children, ReactNode } from 'react'
import { useTheme } from './ThemeProvider'
import { Next } from './Icons'
import componentPropType from './util'
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

Breadcrumb.propTypes = {
  isLast: PropTypes.bool,
}

Breadcrumbs.propTypes = {
  children: componentPropType(Breadcrumb),
}
