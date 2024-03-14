import * as React from 'react';
import Icon, { IconProps } from '../Icon';

const Check: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props} viewBox='0 0 66 66'>
      <path d="M63 3L23 63L3 33"
        strokeWidth="5"
        stroke="currentColor"
      />
    </Icon>
  )
}

export default Check;