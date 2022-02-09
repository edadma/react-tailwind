import React, { FC } from 'react'

interface FixedProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  visible: boolean
}

export const Fixed: FC<FixedProps> = ({ children, className, visible, ...rest }) => (
  <div className={`fixed ${visible ? 'visible' : 'invisible'} ${className || ''}`} {...rest}>
    {children}
  </div>
)
