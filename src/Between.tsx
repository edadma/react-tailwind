import React from 'react'

interface BetweenProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Between: React.FC<BetweenProps> = ({ children, className, ...other }) => (
  <div className={`flex items-center justify-between ${className || ''}`} {...other}>
    {children}
  </div>
)
