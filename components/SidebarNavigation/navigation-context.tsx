import {
  createContext,
  useState,
  ReactNode,
  // Dispatch,
  // SetStateAction,
} from "react";

type NavigationContextType = {
  isSidebarCollapsed: boolean;
  // setSidebarCollapsed: Dispatch<SetStateAction<boolean>>;
  toggleSidebar: () => void;
};

const defaultContext: NavigationContextType = {
  isSidebarCollapsed: false,
  // setSidebarCollapsed: () => null,
  toggleSidebar: () => {},
};

export const NavigationContext = createContext(defaultContext);

type NavigationContextProviderProps = {
  children: ReactNode;
};

export function NavigationProvider({
  children,
}: NavigationContextProviderProps) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(
    defaultContext.isSidebarCollapsed
  );

  return (
    <NavigationContext.Provider
      value={{
        isSidebarCollapsed,
        // setSidebarCollapsed,
        toggleSidebar: () => setSidebarCollapsed((isCollapsed) => !isCollapsed),
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
