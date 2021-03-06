const tintColorLight = "#F5AB60";
const white = "#FFF";
const black = "#000";
const inactiveTintColor = "#ADADAF";
const backgroundLight = "#F2F2F2";
const backgroundWhite = "#F9F9F9";
const icon = "#CCC";
const textWhite = "#F6F6F9";

export default {
  light: {
    text: black,
    background: backgroundLight,
    backgroundWhite,
    tint: tintColorLight,
    inactive: inactiveTintColor,
    tabIconDefault: icon,
    tabIconSelected: tintColorLight,
    primary: tintColorLight,
    textWhite,
    white,
  },
  dark: {
    text: white,
    background: black,
    backgroundWhite,
    tint: white,
    tabIconDefault: icon,
    inactive: inactiveTintColor,
    tabIconSelected: white,
    textWhite,
    white,
  },
};
