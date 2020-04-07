import { createContext } from "react";

export interface ThemeContextInterface {
  isDark: boolean;
  flipLights(): void;
}

const ThemeContext = createContext<ThemeContextInterface>({
  isDark: false,
  flipLights: () => console.log("default!"),
});
export default ThemeContext;
