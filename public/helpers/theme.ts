interface Headers {
  title: string;
  header: string;
  subHeader: string;
}

export interface Theme {
  bg: string;
  txt: string;
  border: string;
  variant: "light" | "dark";
  bgInv: string;
  txtInv: string;
  borderInv: string;
  variantInv: "light" | "dark";
  headers: Headers;
}

export const getTheme = (isDark: boolean): Theme => {
  const txt = isDark ? "text-light" : "text-dark";
  const theme: Theme = {
    bg: isDark ? "bg-dark" : "bg-light",
    txt: txt,
    border: isDark ? "border-light" : "border-dark",
    variant: isDark ? "light" : "dark",
    bgInv: isDark ? "bg-light" : "bg-dark",
    txtInv: isDark ? "text-dark" : "text-light",
    borderInv: isDark ? "border-dark" : "border-light",
    variantInv: isDark ? "dark" : "light",
    // Headers
    headers: {
      title: txt + " title",
      header: txt + " header",
      subHeader: txt + " sub-header",
    },
  };
  return theme;
};
