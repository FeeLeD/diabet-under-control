import React, { FC } from "react";
import { IconProps } from "interfaces/icons";

const SettingsIcon: FC<IconProps> = ({
  width = 26,
  height = 24,
  color = "#252525",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6909 21.2532L23.4636 14.2532C24.3904 12.894 24.3904 11.1058 23.4636 9.74654L18.6909 2.74664C17.9458 1.65383 16.7087 1 15.386 1H10.614C9.29134 1 8.0542 1.65383 7.3091 2.74664L2.53639 9.74654C1.60959 11.1058 1.60959 12.894 2.53638 14.2532L7.3091 21.2532C8.0542 22.3461 9.29135 22.9999 10.614 22.9999H15.386C16.7087 22.9999 17.9458 22.3461 18.6909 21.2532Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SettingsIcon;
