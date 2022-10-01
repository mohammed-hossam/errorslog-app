import { Button } from "@components/Button";
// import styled from "styled-components";
import { ListItem, Anchor, Icon } from "./MenuItemLink";

type MenuItemButtonProps = {
  className?: string;
  text: string;
  iconSrc: string;
  onClick: () => void;
  isSidebarCollapsed: boolean;
};

function MenuItemButton({
  className,
  text,
  iconSrc,
  onClick,
  isSidebarCollapsed,
}: MenuItemButtonProps) {
  //   console.log(iconSrc);
  return (
    <ListItem className={className}>
      <Anchor as={Button} onClick={onClick}>
        <Icon src={iconSrc} alt={`${text} icon`} />
        {!isSidebarCollapsed ? text : ""}
      </Anchor>
    </ListItem>
  );
}

// const ListItem = styled.li`
//   padding: 8px 12px;
// `;

// const Icon = styled.img`
//   margin-right: 12px;
// `;

export default MenuItemButton;
