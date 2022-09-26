import { useContext } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import MenuItemLink from "./MenuItemLink";
import MenuItemButton from "./MenuItemButton";
import { NavigationContext } from "./navigation-context";
import { Routes } from "@config/routes";

// type SidebarNavigationProps = {};
const menuItems = [
  {
    text: "Projects",
    iconSrc: "/icons/projects.svg",
    href: Routes.projects,
  },
  {
    text: "Issues",
    iconSrc: "/icons/issues.svg",
    href: Routes.issues,
  },
  {
    text: "Alerts",
    iconSrc: "/icons/alert.svg",
    href: Routes.alerts,
  },
  {
    text: "Users",
    iconSrc: "/icons/users.svg",
    href: Routes.users,
  },
  {
    text: "Settings",
    iconSrc: "/icons/settings.svg",
    href: Routes.settings,
  },
];

export function SidebarNavigation() {
  const { isSidebarCollapsed, toggleSidebar } = useContext(NavigationContext);
  // const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();
  // console.log(router);
  return (
    <Nav isSidebarCollapsed={isSidebarCollapsed}>
      <Logo
        isSidebarCollapsed={isSidebarCollapsed}
        src={
          !isSidebarCollapsed
            ? "/icons/logo-large.svg"
            : "/icons/logo-small.svg"
        }
      />

      {/* upperpart */}
      <LinksList>
        {menuItems.map((menuItem, i) => {
          return (
            <MenuItemLink
              key={i}
              {...menuItem}
              isActive={router.pathname === menuItem.href}
              isSidebarCollapsed={isSidebarCollapsed}
            />
          );
        })}
      </LinksList>
      {/* lowerpart */}
      <Ul>
        <MenuItemButton
          text="Support"
          onClick={() => {
            alert("welcome");
          }}
          iconSrc="/icons/support.svg"
          isSidebarCollapsed={isSidebarCollapsed}
        />
        <MenuItemButton
          text="Collapse"
          onClick={() => {
            toggleSidebar();
          }}
          iconSrc="/icons/arrow-left.svg"
          isSidebarCollapsed={isSidebarCollapsed}
        />
      </Ul>
    </Nav>
  );
}

const Nav = styled.nav<{ isSidebarCollapsed: boolean }>`
  /* height: calc(100vh - 2 * 32px); */
  height: 100vh;
  box-sizing: border-box;
  padding: ${({ theme }) => `${theme.space[8]} ${theme.space[4]}`};
  width: ${({ isSidebarCollapsed }) =>
    !isSidebarCollapsed ? "240px" : "82px"};
  /* background-color: #101828; */
  background-color: ${({ theme }) => theme.color.gray[900]};
  display: flex;
  flex-direction: column;
`;
const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinksList = styled(Ul)`
  flex-grow: 1;
`;

const Logo = styled.img<{ isSidebarCollapsed: boolean }>`
  /* width: 118px; */
  width: ${({ isSidebarCollapsed }) =>
    !isSidebarCollapsed ? "118px" : "23px"};
  margin: 0 12px 24px;
`;
