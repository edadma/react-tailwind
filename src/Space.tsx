import React from 'react'

interface SpaceProps {
  direction?: 'x' | 'y'
  space?: number
}

const spaceClass: any = {
  0: { x: 'space-x-0', y: 'space-y-0' },
  0.5: { x: 'space-x-0.5', y: 'space-y-0.5' },
  1: { x: 'space-x-1', y: 'space-y-1' },
  1.5: { x: 'space-x-1.5', y: 'space-y-1.5' },
  2: { x: 'space-x-2', y: 'space-y-2' },
  2.5: { x: 'space-x-2.5', y: 'space-y-2.5' },
  3: { x: 'space-x-3', y: 'space-y-3' },
  3.5: { x: 'space-x-3.5', y: 'space-y-3.5' },
  4: { x: 'space-x-4', y: 'space-y-4' },
  5: { x: 'space-x-5', y: 'space-y-5' },
  6: { x: 'space-x-6', y: 'space-y-6' },
  7: { x: 'space-x-7', y: 'space-y-7' },
}

export const Space: React.FC<SpaceProps> = ({ children, direction = 'x', space = 2 }) => {
  const clas = spaceClass[space][direction]

  return direction === 'x' ? (
    <span className={clas}>{children}</span>
  ) : (
    <div className={clas}>{children}</div>
  )
}
