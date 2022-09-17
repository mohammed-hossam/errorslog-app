import styled from "styled-components";

type MenuItemButtonProps = {
  text: string;
  iconSrc: string;
  onClick: () => void;
};

function MenuItemButton({ text, iconSrc, onClick }: MenuItemButtonProps) {
  //   console.log(iconSrc);
  return (
    <ListItem>
      <Button onClick={onClick}>
        <Icon src={iconSrc} alt={`${text} icon`} />
        {text}
      </Button>
    </ListItem>
  );
}

const ListItem = styled.li`
  padding: 8px 12px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  cursor: pointer;
  //reset some default button css
  background-color: transparent;
  border: none;
  line-height: normal;
  margin: 0;
  padding: 0;
`;
const Icon = styled.img`
  margin-right: 12px;
`;

export default MenuItemButton;
