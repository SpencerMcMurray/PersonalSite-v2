interface Headers {
  title: string;
  header: string;
  subHeader: string;
}

export interface Theme {
  bg: string;
  txt: string;
  border: string;
  variant: "light" | "secondary";
  bgInv: string;
  txtInv: string;
  borderInv: string;
  variantInv: "light" | "secondary";
  headers: Headers;
}

export const getTheme = (isDark: boolean): Theme => {
  const txt = isDark ? "text-light" : "text-dark";
  const theme: Theme = {
    bg: isDark ? "bg-dark" : "bg-light",
    txt: txt,
    border: isDark ? "border-light" : "border-dark",
    variant: isDark ? "secondary" : "light",
    bgInv: isDark ? "bg-light" : "bg-secondary",
    txtInv: isDark ? "text-dark" : "text-light",
    borderInv: isDark ? "border-dark" : "border-light",
    variantInv: isDark ? "light" : "secondary",
    // Headers
    headers: {
      title: txt + " title",
      header: txt + " header",
      subHeader: txt + " sub-header",
    },
  };
  return theme;
};
