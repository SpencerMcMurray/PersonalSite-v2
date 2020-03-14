export interface Theme {
  bg: string;
  txt: string;
  border: string;
  bgInv: string;
  txtInv: string;
  borderInv: string;
}

export const getTheme = (isDark: boolean): Theme => {
  let theme: Theme = {
    bg: isDark ? "bg-dark" : "bg-light",
    txt: isDark ? "text-light" : "text-dark",
    border: isDark ? "border-light" : "border-dark",
    bgInv: isDark ? "bg-light" : "bg-dark",
    txtInv: isDark ? "text-dark" : "text-light",
    borderInv: isDark ? "border-dark" : "border-light"
  };
  return theme;
};
