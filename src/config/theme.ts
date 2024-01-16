export const Breakpoints = {
  XXS: 320,
  XS: 540,
  SMALL: 768,
  MEDIUM: 960,
  LARGE: 1200,
  XL: 1440,
};

export interface ColorLevels {
  100?: string, //Lighter
  200?: string, //Light
  300?: string, //Default
  400?: string, //Dark
  500?: string, //Darker
  600?: string, //Darkest
}

export interface SpacingLevels {
  "0125": string;
  "025": string;
  "050": string;
  "075": string;
  100: string;
  150: string;
  200: string;
  250: string;
  300: string;
  350: string;
  400: string;
  500: string;
  750: string;
  1000: string;
};

export interface ThemeInterface {
  color: {
    action: {
      primary: ColorLevels,
      secondary: ColorLevels,
      destructive: ColorLevels,
    }
    surface: ColorLevels,
    text: ColorLevels,
    accent: {
      alert: ColorLevels,
      warning: ColorLevels,
      success: ColorLevels,
      info: ColorLevels,
      utility: ColorLevels,
    }
  },
  spacing: {
    pixel: SpacingLevels,
    rem: SpacingLevels,
  }
  // breakpoint: BreakpointLevels,
}

export const Theme: ThemeInterface = {
  color: {
    action: {
      primary: {
        100: "#BBCFF1",
        200: "#6793E0",
        300: "#2457B2",
        400: "#1C4387",
        500: "#153266",
      },
      secondary: {
        100: "#F2F5F4",
        200: "#E1E5E4",
        300: "#A8AFAC",
        400: "#6E7A75",
        500: "#23332D",
      },
      destructive: {
        100: "#FAE6E9",
        200: "#F5ABB8",
        300: "#CC314B",
        400: "#A32B36",
        500: "#410F14",
      },
    },
    surface: {
      100: "#FFFFFF",
      200: "#F7F9F8",
      300: "#F1F3F2",
      400: "#E3E7E5",
      500: "#D6DBD9",
    },
    text: {
      100: "#FFFFFF",
      200: "#B0B3B2",
      300: "#919795",
      400: "#6E7573",
      500: "#3F4643",
      600: "#151F1B",
    },
    accent: {
      alert: {
        100: "#FFEEF1",
        200: "#ECBAC2",
        300: "#D98B98",
        400: "#DE2C4B",
        500: "#991F34",
      },
      warning: {
        100: "#FAF5E1",
        200: "#F2E096",
        300: "#E5CF73",
        400: "#E0BE38",
        500: "#A38718",
      },
      success: {
        100: "#DFF7E3",
        200: "#A9EBB4",
        300: "#74D684",
        400: "#46C25A",
        500: "#267533",
      },
      info: {
        100: "#E1EFFA",
        200: "#9DD0F5",
        300: "#5EB0EB",
        400: "#2698EB",
        500: "#216DA3",
      },
      utility: {
        100: "#FAEADC",
        200: "#FAB67D",
        300: "#EB9D5E",
        400: "#F7811E",
        500: "#914C12",
      },
    }
  },
  spacing: {
    pixel: {
      "0125": "2px",
      "025": "4px",
      "050": "8px",
      "075": "12px",
      100: "16px",
      150: "24px",
      200: "32px",
      250: "40px",
      300: "48px",
      350: "56px",
      400: "64px",
      500: "80px",
      750: "120px",
      1000: "160px",
    },
    rem: {
      "0125": "0.125rem",
      "025": "0.25rem",
      "050": "0.5rem",
      "075": "0.75rem",
      100: "1rem",
      150: "1.5rem",
      200: "2rem",
      250: "2.5rem",
      300: "3rem",
      350: "3.5rem",
      400: "4rem",
      500: "5rem",
      750: "7.5rem",
      1000: "10rem",
    },
  },
}
