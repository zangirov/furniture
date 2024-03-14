import * as React from "react";
import Icon, { IconProps } from "../Icon";

const Location: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props} viewBox="0 0 16 24">
      <path
        d="M15 8.79432C15 12.7231 8 22.2059 8 22.2059C8 22.2059 1 12.7231 1 8.79432C1 6.91122 1.7375 5.10525 3.05025 3.7737C4.36301 2.44215 6.14348 1.69409 8 1.69409C9.85652 1.69409 11.637 2.44215 12.9497 3.7737C14.2625 5.10525 15 6.91122 15 8.79432Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00001 11.1606C9.28868 11.1606 10.3333 10.101 10.3333 8.79387C10.3333 7.48675 9.28868 6.42712 8.00001 6.42712C6.71135 6.42712 5.66668 7.48675 5.66668 8.79387C5.66668 10.101 6.71135 11.1606 8.00001 11.1606Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default Location;
