const fontWeight = {
  light: "300",
  regular: "400",
  regular_2: "500",
  bold: "700",
  black: "900",
};
const colors = {
  black: "#2D2D2D",
  black_2: "#42444C",
  white: "#FFFFFF",
  hotPink: "#FF1C7C",
  pink: "#FF417D",
  gray: "#AAABB3",
  grayFontColor: "#919299",
  grayLineColor: "#F2F3F7",
  blue: "#7dc9fc",
};
const device = {
  mobileS: `only screen and (max-width: 290px)`,
  mobile: `only screen and (max-width: 450px)`,
  tablet: `only screen and (max-width: 768px)`,
  tabletL: `only screen and (max-width: 1024px)`,
};
const theme = {
  fontWeight,
  colors,
  device,
};

export default theme;
