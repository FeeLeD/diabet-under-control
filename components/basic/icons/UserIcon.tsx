import React, { FC } from "react";
import { IconProps } from "interfaces/icons";

const UserIcon: FC<IconProps> = ({
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
        d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M3 19.9998C3.91247 18.4796 5.22451 17.2172 6.8043 16.3396C8.3841 15.462 10.176 15 12.0001 15C13.8241 15 15.616 15.4621 17.1958 16.3397C18.7756 17.2174 20.0876 18.4797 21 20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserIcon;
