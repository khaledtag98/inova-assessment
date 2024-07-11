import { createTheme } from "@mui/material/styles";
import { arEG, enUS } from "@mui/material/locale";

import { LANGS, LANGS_DIRS, LANGS_FONTS } from "../constants/global";

const localesMap = {
  [LANGS.ar]: arEG,
  [LANGS.en]: enUS,
};

function makeTheme({ lang }) {
  return createTheme(
    {
      direction: LANGS_DIRS[lang],
      typography: {
        fontFamily: `${LANGS_FONTS[lang]}, Helvetica, Arial, sans-serif`,
        h5: {
          fontWeight: 500,
        },
        subtitle1: {
          fontWeight: 500,
        },
      },
      palette: {
        background: {
          default: "#1e1e1e",
          paper: "#1e1e1e",
        },
        primary: {
          main: "#0a0a0a",
        },
        primaryBg: "#e0e7fc",
        secondary: {
          main: "#FFA303",
        },

        text: {
          primary: "#ffffff",
          secondary: "#607180",
        },

        info: {
          main: "#03A9F4",
        },
        infoBg: "#EFF3FE",

        warning: {
          main: "#FFA303",
        },
        warningBg: "#FFF7D4",

        success: {
          main: "#29BF56",
          contrastText: "#FFF",
        },
        successBg: "#F0FBF3",

        error: {
          main: "#FC2424",
        },
        errorBg: "#FFEFEF",

        action: {
          disabled: "#D5D9E5",
          disabledBackground: "none",
        },
      },

      // MUI components overrides
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            body {
              background-color: #FAFBFF;
            }
            #root {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }
          `,
        },
        MuiPaper: {
          defaultProps: {
            elevation: 0,
          },
          styleOverrides: {
            root: {
              borderRadius: 0,
            },
          },
        },
        MuiButton: {
          defaultProps: {
            size: "large",
            variant: "contained",
            disableElevation: true,
          },
          styleOverrides: {
            root: {
              color: "#FFFFFF",
              textTransform: "none",
              borderRadius: "6px",
              padding: "8px 16px",
            },
            sizeLarge: {
              height: 40,
            },
            outlined: {
              "&:active": {
                borderColor: "transparent",
              },
              "&:disabled": {
                borderColor: "transparent",
                backgroundColor: "#FCFCFC",
              },
            },
            contained: {
              "&:disabled": {
                color: "#FFF",
                opacity: 0.3,
              },
            },
          },
        },
      },
    },
    localesMap[lang]
  );
}

export default makeTheme;
