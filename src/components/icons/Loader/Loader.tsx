import * as React from "react";
import cn from "classnames";

export type LoaderProps = {
  size: "l" | "s" | "xxs";
  className: string;
};

const Loader: React.FC<LoaderProps> = ({
  size = "l",
  className,
}: LoaderProps) => {
  return (
    <svg
      className={cn("loader", `loader_size-${size}`, className)}
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63 33.0015C62.9997 39.3368 60.9938 45.5093 57.2698 50.6345C53.5458 55.7598 48.2949 59.5745 42.2696 61.532C36.2443 63.4895 29.754 63.4893 23.7288 61.5315C17.7036 59.5736 12.4529 55.7586 8.72921 50.6332C5.0055 45.5078 2.99995 39.3351 3 32.9998C3.00005 26.6645 5.00568 20.4918 8.72947 15.3665C12.4533 10.2411 17.704 6.42616 23.7292 4.46839C29.7544 2.51062 36.2447 2.51053 42.27 4.46814"
        stroke="#240046"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Loader;
