import React, { FC } from "react";
import { IconProps } from "interfaces/icons";

const StableIcon: FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "#252525",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7283 12.364L15.3644 18.728M21.7283 12.364L15.3644 6.00005M21.7283 12.364H2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StableIcon;
