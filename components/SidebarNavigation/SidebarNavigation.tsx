import { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import MenuItemLink from "./MenuItemLink";
import MenuItemButton from "./MenuItemButton";
import { NavigationContext } from "./navigation-context";
import { Routes } from "@config/routes";
import { breakpoint, color, space, zIndex } from "@styles/theme";
import { Button } from "@components/Button";

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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  // console.log(router);
  return (
    <FixedContainer>
      <Header isSidebarCollapsed={isSidebarCollapsed}>
        <Logo
          isSidebarCollapsed={isSidebarCollapsed}
          src={
            isSidebarCollapsed
              ? "/icons/logo-small.svg"
              : "/icons/logo-large.svg"
          }
          alt="logo"
        />
        <MenuButton onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuIcon
            src={isMobileMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
            alt={isMobileMenuOpen ? "close menu" : "open menu"}
          />
        </MenuButton>
      </Header>
      <MenuOverlay isMobileMenuOpen={isMobileMenuOpen} />
      <Nav
        isSidebarCollapsed={isSidebarCollapsed}
        isMobileMenuOpen={isMobileMenuOpen}
      >
        {/* upperpart */}
        <LinksList>
          {menuItems.map((menuItem, i) => {
            return (
              <MenuItemLink
                key={i}
                {...menuItem}
                isActive={
                  router.pathname === menuItem.href ||
                  (router.pathname === "/dashboard" &&
                    menuItem.text === "Projects")
                }
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
          <CollapseMenuItemButton
            text="Collapse"
            onClick={() => {
              toggleSidebar();
            }}
            iconSrc="/icons/arrow-left.svg"
            isSidebarCollapsed={isSidebarCollapsed}
          />
        </Ul>
      </Nav>
    </FixedContainer>
  );
}

const containerStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media (min-width: ${breakpoint("desktop")}) {
    width: 17.5rem;
    height: 100vh;
  }
`;

const FixedContainer = styled.div`
  ${containerStyles}
  position: fixed;
  @media (min-width: ${breakpoint("desktop")}) {
    position: relative;
  }
`;
const Header = styled.header<{ isSidebarCollapsed: boolean }>`
  /* background-color: ${({ theme }) => theme.color.gray[900]}; */
  box-sizing: border-box;
  background: ${color("gray", 900)};
  width: calc(100%);
  /* height: ${({ theme }) => theme.size.headerHeight}; */
  padding: ${space(2, 4)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${zIndex("header")};

  @media (min-width: ${breakpoint("desktop")}) {
    /* height: unset; */
    padding: ${space(8, 4, 6)};
    width: ${({ isSidebarCollapsed }) =>
      !isSidebarCollapsed ? "240px" : "82px"};
  }
`;

const MenuOverlay = styled.div<{ isMobileMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${color("gray", 700)};
  z-index: ${(props) => zIndex("header")(props) - 1};

  opacity: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "60%" : "0%")};
  transform: translateX(
    ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "0" : "100%")}
  );
  transition: opacity 300ms,
    transform 0s
      ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "0s" : "300ms")};

  @media (min-width: ${breakpoint("desktop")}) {
    display: none;
  }
`;

const Nav = styled.nav<{
  isSidebarCollapsed: boolean;
  isMobileMenuOpen: boolean;
}>`
  /* height: calc(100vh - 2 * 32px); */
  /* background-color: #101828; */
  /* background-color: ${({ theme }) => theme.color.gray[900]}; */
  /* padding: ${({ theme }) => `${theme.space[8]} ${theme.space[4]}`}; */
  /* height: 100vh; */
  box-sizing: border-box;
  /* width: 100%; */
  width: 19.5rem;
  background: ${color("gray", 900)};
  padding: ${space(1, 2, 6)};
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: ${zIndex("header")};
  transform: ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 300ms;

  @media (min-width: ${breakpoint("desktop")}) {
    transform: none;
    width: ${({ isSidebarCollapsed }) =>
      !isSidebarCollapsed ? "240px" : "82px"};
  }
`;

const MenuIcon = styled.img`
  display: block;
  width: ${({ theme }) => theme.space[10]};
`;

const MenuButton = styled(Button)`
  /* @media (min-width: ${({ theme }) => `${theme.breakpoint.desktop}`}) {
  } */
  @media (min-width: ${breakpoint("desktop")}) {
    display: none;
  }
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
  width: 7.375rem;

  @media (min-width: ${({ theme }) => `${theme.breakpoint.desktop}`}) {
    margin: ${({ theme }) => `${theme.space[0]} ${theme.space[4]}`};

    width: ${({ isSidebarCollapsed }) =>
      !isSidebarCollapsed ? "7.375rem" : "1.4375rem"};
  }

  /* margin: 0 12px 24px; */
`;

const CollapseMenuItemButton = styled(MenuItemButton)`
  display: none;
  @media (min-width: ${breakpoint("desktop")}) {
    display: list-item;
  }
`;
