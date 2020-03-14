interface Theme {
  primary: string;
  secondary: string;
  primaryInv: string;
  secondaryInv: string;
}

export const getTheme = (isDark: boolean): Theme => {
  let theme: Theme = {
    primary: isDark ? "" : "string",
    secondary: isDark ? "" : "string",
    primaryInv: isDark ? "" : "string",
    secondaryInv: isDark ? "" : "string"
  };
  return theme;
};
