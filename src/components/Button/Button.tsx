import * as React from "react";
import style from "./Button.module.scss";
import cn from "classnames";
import Text from "../Text";
import Loader from "../icons/Loader";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  loading: boolean;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  className,
  loading,
  children = null,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        `style.${className}`,
        style.button,
        props.disabled && style.button_disabled,
      )}
      disabled={props.disabled || loading}
    >
      {loading && <Loader className="button__loader" size="s" />}
      <Text>{children}</Text>
    </button>
  );
};

export default Button;
