import React from 'react'

interface CenterProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Center: React.FC<CenterProps> = ({ children, className, ...other }) => (
  <div className={`text-center ${className || ''}`} {...other}>
    {children}
  </div>
)
