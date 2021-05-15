import React, { FC } from "react";
import { IconProps } from "interfaces/icons";

const EatIcon: FC<IconProps> = ({
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
        d="M11.9565 9.86957C11.9565 9.86957 11.9774 9.08063 11.9565 5.69565C11.943 3.50122 11.4348 2.04348 11.4348 2.04348M16.1304 9.34783C16.1304 9.34783 15.233 7.49053 15.6087 5.69565C16.0754 3.46595 17.6957 1 17.6957 1M7.78261 9.86957C7.78261 9.86957 8.68488 8.68281 8.82609 7.78261C8.98709 6.75622 8.30435 5.17391 8.30435 5.17391M13 25C20.515 25 23.3238 20.089 24.3735 16.4181C24.9809 14.2941 23.2091 12.4783 21 12.4783H5C2.79086 12.4783 1.0191 14.2941 1.62648 16.4181C2.67623 20.089 5.48495 25 13 25Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EatIcon;
