import * as React from "react";
import Icon, { IconProps } from "../../../../icons/Icon";

const Close: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props} viewBox="0 0 17 17">
      <path
        d="M2 2L15 15M2 15L15 2"
        stroke="#240046"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default Close;
