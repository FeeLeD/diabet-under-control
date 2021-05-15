import React, { FC } from "react";
import { IconProps } from "interfaces/icons";

const GraphIcon: FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "#252525",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9V21M10.5 14V21M20.5 21V5.5M16 21V11M1 5V21C1 23.2091 2.79086 25 5 25H21C23.2091 25 25 23.2091 25 21V5C25 2.79086 23.2091 1 21 1H5C2.79086 1 1 2.79086 1 5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GraphIcon;
