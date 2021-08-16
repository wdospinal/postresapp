const tintColorLight = "#F5AB60";
const white = "#FFF";
const black = "#000";
const inactiveTintColor = "#ADADAF";
const backgroundLight = "#F2F2F2";
const icon = "#CCC";

export default {
  light: {
    text: black,
    background: backgroundLight,
    tint: tintColorLight,
    inactive: inactiveTintColor,
    tabIconDefault: icon,
    tabIconSelected: tintColorLight,
    primary: tintColorLight,
    white,
  },
  dark: {
    text: white,
    background: black,
    tint: white,
    tabIconDefault: icon,
    inactive: inactiveTintColor,
    tabIconSelected: white,
  },
};
