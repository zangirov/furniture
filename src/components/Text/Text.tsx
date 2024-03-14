import * as React from "react";
import "./Text.module.scss";
import cn from "classnames";

export type TextTypes = {
  className?: string;
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  view?: "title" | "button" | "input" | "p-20px" | "p-30px";
  color?: "primary" | "secondary" | "accent";
  weight?: "ligth" | "normal" | "medium" | "bold";
  children?: React.ReactNode;
  maxLines?: number;
};

const Text: React.FC<TextTypes> = ({
  className,
  tag: Tag = "p",
  view = "p-20px",
  color,
  weight,
  children,
  maxLines,
}) => {
  return (
    <Tag
      className={cn(
        className,
        "text",
        `text_weigth-${weight}`,
        `text_view-${view}`,
        color && `text_color-${color}`,
        !!maxLines && "text_multi-ellipsis"
      )}
      style={{'--max-lines-count': maxLines} as React.CSSProperties}
    >
      {children}
    </Tag>
  );
};

export default Text;
