import Link from "next/link";
import styled from "styled-components";

type MenuItemLinkProps = {
  text: string;
  iconSrc: string;
  href: string;
  isActive: boolean;
  isSidebarCollapsed: boolean;
};

function MenuItemLink({
  text,
  iconSrc,
  href,
  isActive,
  isSidebarCollapsed,
}: MenuItemLinkProps) {
  //   console.log(iconSrc);
  return (
    <ListItem isActive={isActive}>
      <Link href={href} passHref>
        <Anchor>
          <Icon src={iconSrc} alt={`${text} icon`} />
          {!isSidebarCollapsed ? text : ""}
        </Anchor>
      </Link>
    </ListItem>
  );
}

export const ListItem = styled.li<{ isActive?: boolean }>`
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[5]}`};
  background-color: ${(props) => {
    if (props.isActive) return "#009cffba";
    return "transparent";
  }};
  border-radius: 6px;
`;

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.color.gray[100]};
`;

export const Icon = styled.img`
  margin-right: ${({ theme }) => theme.space[3]}; ;
`;

export default MenuItemLink;
