import styled from "styled-components";
import MenuItemLink from "./MenuItemLink";
import MenuItemButton from "./MenuItemButton";

// type SidebarNavigationProps = {};
const menuItems = [
  {
    text: "Projects",
    iconSrc: "/icons/projects.svg",
    href: "https://www.google.com/",
  },
  {
    text: "Issues",
    iconSrc: "/icons/issues.svg",
    href: "https://www.google.com/",
  },
  {
    text: "Alerts",
    iconSrc: "/icons/alert.svg",
    href: "https://www.google.com/",
  },
  {
    text: "Users",
    iconSrc: "./icons/users.svg",
    href: "https://www.google.com/",
  },
  {
    text: "Settings",
    iconSrc: "/icons/settings.svg",
    href: "https://www.google.com/",
  },
];

export function SidebarNavigation() {
  return (
    <Nav>
      {/* upperpart */}
      <Ul>
        {menuItems.map((menuItem, i) => {
          return <MenuItemLink key={i} {...menuItem} />;
        })}
      </Ul>
      {/* lowerpart */}
      <Ul>
        <MenuItemButton
          text="Support"
          onClick={() => {
            alert("welcome");
          }}
          iconSrc="/icons/support.svg"
        />
        <MenuItemButton
          text="Collapse"
          onClick={() => {
            alert("welcome");
          }}
          iconSrc="/icons/arrow-left.svg"
        />
      </Ul>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 100vh;
  width: 20%;
  background-color: #101828;
`;
const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
