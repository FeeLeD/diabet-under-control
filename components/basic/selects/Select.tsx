import React, { FC, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  ButtonProps,
  MenuListProps,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "components/basic/icons/";
import { MainButton } from "components/basic/buttons";

interface Props {
  defaultMenuItem?: string;
  menuItems: string[];
  menuButtonText?: string;
  menuButtonProps?: ButtonProps;
  menuListProps?: MenuListProps;
  onItemChange?: (item: string) => void;
}

const Select: FC<Props> = ({
  defaultMenuItem,
  menuItems,
  menuButtonText = "",
  menuButtonProps,
  menuListProps,
  onItemChange = () => {},
}) => {
  const [chosenItem, setChosenItem] = useState(defaultMenuItem ?? "");

  const onMenuItemClick = (item: string) => {
    setChosenItem(item);
    onItemChange(item);
  };

  return (
    <Menu>
      <MenuButton
        as={MainButton}
        bg="neutral.50"
        rightIcon={<ChevronDownIcon color="#696C74" />}
        {...menuButtonProps}
      >
        {!chosenItem ? menuButtonText : chosenItem}
      </MenuButton>
      <MenuList {...menuListProps}>
        {menuItems.map((menuItem, i) => (
          <MenuItem
            key={i}
            bg={menuItem === chosenItem ? "neutral.50" : "none"}
            onClick={() => onMenuItemClick(menuItem)}
          >
            {menuItem}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Select;
