import React from 'react';
import * as Icons from '../../themese/Icon'

const Icon = (props) => {
  const { type, color, onClick, className, stroke, fill } = props
  const IconJSX = Icons[type]

  if (!IconJSX) return null

  return (
    <span onClick={onClick}>
      {IconJSX({
        color: color,
        type: type,
        className: className,
        stroke: stroke,
        fill:fill
      })}
    </span>
  );
}

export default Icon;