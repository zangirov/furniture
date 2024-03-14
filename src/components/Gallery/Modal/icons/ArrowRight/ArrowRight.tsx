import * as React from "react";
import Icon, { IconProps } from "../../../../icons/Icon";

const ArrowRight: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props} viewBox="0 0 12 20">
      <path
        d="M2 18L10 10L2 2"
        stroke="#240046"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ArrowRight;
