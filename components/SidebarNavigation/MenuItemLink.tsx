import Link from "next/link";
import styled from "styled-components";

type MenuItemLinkProps = { text: string; iconSrc: string; href: string };

function MenuItemLink({ text, iconSrc, href }: MenuItemLinkProps) {
  //   console.log(iconSrc);
  return (
    <ListItem>
      <Link href={href} passHref>
        <Anchor target="_blank">
          <Icon src={iconSrc} alt={`${text} icon`} />
          {text}
        </Anchor>
      </Link>
    </ListItem>
  );
}

const ListItem = styled.li`
  padding: 8px 12px;
`;
const Anchor = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`;
const Icon = styled.img`
  margin-right: 12px;
`;

export default MenuItemLink;
