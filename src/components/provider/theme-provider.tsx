"use client";

import { createContext, useContext, useEffect, useState } from "react";

const THEME = ["system", "dark", "light"] as const;
type Theme = (typeof THEME)[number];

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme?: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>();

  useEffect(() => {
    if (document)
      setTheme(
        document.cookie.match(/theme=(light|dark|system)/)?.[1] as Theme
      );
  }, []);

  useEffect(() => {
    if (theme) {
      document.cookie = `theme=${theme}; path=/; max-age=31536000;`;
      document.documentElement.classList.remove(...THEME);
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
