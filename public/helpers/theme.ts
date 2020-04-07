interface Headers {
  title: string;
  header: string;
  subHeader: string;
}

export interface Theme {
  bg: string;
  txt: string;
  border: string;
  bgInv: string;
  txtInv: string;
  borderInv: string;
  headers: Headers;
}

export const getTheme = (isDark: boolean): Theme => {
  const txt = isDark ? "text-light" : "text-dark";
  const theme: Theme = {
    bg: isDark ? "bg-dark" : "bg-light",
    txt: txt,
    border: isDark ? "border-light" : "border-dark",
    bgInv: isDark ? "bg-light" : "bg-dark",
    txtInv: isDark ? "text-dark" : "text-light",
    borderInv: isDark ? "border-dark" : "border-light",
    // Headers
    headers: {
      title: txt + " title",
      header: txt + " header",
      subHeader: txt + " sub-header",
    },
  };
  return theme;
};
