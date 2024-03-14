import * as React from "react";
import Icon, { IconProps } from "../../../../icons/Icon";

const ArrowLeft: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props} viewBox="0 0 12 20">
      <path
        d="M10 2L2 10L10 18"
        stroke="#240046"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ArrowLeft;
