export interface Theme {
  primary: string;
  //secondary: string;
  primaryInv: string;
  //secondaryInv: string;
}

export const getTheme = (isDark: boolean): Theme => {
  let theme: Theme = {
    primary: isDark ? "text-light bg-dark" : "text-dark bg-light",
    primaryInv: isDark ? "text-dark bg-light" : "text-light bg-dark"
  };
  return theme;
};
