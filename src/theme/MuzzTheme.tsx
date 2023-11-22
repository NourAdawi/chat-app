import {
  createTheme,
  darken,
  lighten,
  responsiveFontSizes,
} from "@mui/material/styles";

const themeColors = {
  primary: "#fa1e76",
  secondary: "#d5e8ed",
  success: "#44D600",
  warning: "#FFA319",
  error: "#FF1943",
  info: "#33C2FF",
  black: "#333c49",
  white: "#ffffff",
  primaryAlt: "#000C57",
  trueWhite: "#ffffff",
  grey: "#959696",
};

const colors = {
  secondary: {
    lighter: lighten(themeColors.secondary, 0.85),
    light: lighten(themeColors.secondary, 0.25),
    main: themeColors.secondary,
    dark: darken(themeColors.secondary, 0.2),
  },
  primary: {
    lighter: lighten(themeColors.primary, 0.85),
    light: lighten(themeColors.primary, 0.3),
    main: themeColors.primary,
    dark: darken(themeColors.primary, 0.2),
  },
  success: {
    lighter: lighten(themeColors.success, 0.85),
    light: lighten(themeColors.success, 0.3),
    main: themeColors.success,
    dark: darken(themeColors.success, 0.2),
  },
  warning: {
    lighter: lighten(themeColors.warning, 0.85),
    light: lighten(themeColors.warning, 0.3),
    main: themeColors.warning,
    dark: darken(themeColors.warning, 0.2),
  },
  error: {
    lighter: lighten(themeColors.error, 0.85),
    light: lighten(themeColors.error, 0.3),
    main: themeColors.error,
    dark: darken(themeColors.error, 0.2),
  },
  info: {
    lighter: lighten(themeColors.info, 0.85),
    light: lighten(themeColors.info, 0.3),
    main: themeColors.info,
    dark: darken(themeColors.info, 0.2),
  },
};

let MuzzTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: colors.primary.light,
      main: colors.primary.main,
      dark: colors.primary.dark,
    },
    secondary: {
      light: colors.secondary.light,
      main: colors.secondary.main,
      dark: colors.secondary.dark,
    },
    error: {
      light: colors.error.light,
      main: colors.error.main,
      dark: colors.error.dark,
      contrastText: themeColors.trueWhite,
    },
    success: {
      light: colors.success.light,
      main: colors.success.main,
      dark: colors.success.dark,
      contrastText: themeColors.trueWhite,
    },
    info: {
      light: colors.info.light,
      main: colors.info.main,
      dark: colors.info.dark,
      contrastText: themeColors.trueWhite,
    },
    warning: {
      light: colors.warning.light,
      main: colors.warning.main,
      dark: colors.warning.dark,
      contrastText: themeColors.trueWhite,
    },
    grey: {
      50: "#FBFBFB",
      100: "#F3F5F6",
      200: "#E8EAED",
      300: "#DCE0E5",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
    common: {
      white: themeColors.trueWhite,
    },
    text: {
      primary: colors.secondary.main,
      secondary: themeColors.grey,
      disabled: themeColors.grey,
    },
  },
  typography: {
    caption: {
      fontWeight: 500,
      letterSpacing: "-0.025em",
      color: themeColors.grey,
      lineHeight: "-1.5",
    },
  },
});

MuzzTheme = responsiveFontSizes(MuzzTheme);

export { MuzzTheme };
