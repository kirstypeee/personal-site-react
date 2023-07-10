const colors = {
  paper: "#ffffff",
  border: "#BEBFC5",
  borderHover: "#8C92AC",
  borderFocus: "#6082B6",
  disabled: "#BEBFC5",
  primary: {
    light: "#6D257B",
    main: "#50257B",
    dark: "#29174D",
  },
  neon: {
    light: "#ffd5ff",
    main: "#d42cca",
  },
  typography: {
    secondary: "#8c8d90",
  },
  error: "#CE2029",
};

const shape = {
  borderRadius: 7,
  padding: 16,
  margin: 16,
  inputHeight: 14,
};

const font = {
  families: "Tilt Neon, Open Sans Condensed, sans-serif",
  small: 12,
};

const elevation: {
  transition: string;
  [x: number]: { boxShadow: string; dropShadow?: string };
} = {
  transition: `all 0.3s cubic-bezier(.25, .8, .25, 1)`,
  1: {
    boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
    dropShadow: `3px 4px 2px rgb(0 0 0 / 0.4)`,
  },
  2: {
    boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
  },
  3: {
    boxShadow: `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`,
  },
  4: {
    boxShadow: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
  },
  5: {
    boxShadow: `0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)`,
  },
};

export const theme = {
  colors,
  shape,
  font,
  elevation,
};
