const colors = {
  paper: "#ffffff",
  paperContrast: "#000000",
  border: "#e4e4e4",
  borderHover: "#8C92AC",
  borderFocus: "#6082B6",
  disabled: "#e4e4e4",
  primary: {
    lightest: "#C778D7",
    light: "#6D257B",
    main: "#50257B",
    dark: "#29174D",
  },
  neon: {
    light: "#ffd5ff",
    main: "#d42cca",
  },
  typography: {
    primary: "#210F32",
    secondary: "#8c8d90",
    light: "#ffffff",
  },
  error: "#CE2029",
};

const shape = {
  borderRadius: 7,
  padding: 16,
  margin: 16,
  inputHeight: 14,
  responsive: {
    margin: "min(2vw, 16px)",
  },
};

const font = {
  families: "Open Sans,Tilt Neon,Open Sans Condensed,Inconsolata,sans-serif",
  small: "1vw",
  medium: "1.2vw",
  large: "2vw",
  xxl: "7vw",
  responsive: {
    small: "clamp(0.5rem, 1vw, 1rem)",
    medium: "clamp(0.75rem, 1.2vw, 1.25rem)",
    large: "clamp(1rem, 2vw, 2rem)",
    xxl: "clamp(2rem, 7vw, 5rem)",
  },
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

const neoShadow = {
  primary: {
    main: `20px 20px 60px #441f69,
    -20px -20px 60px #5c2b8d`,
    dark: `20px 20px 60px #231441,
    -20px -20px 60px #2f1a59`,
    darkInset: `inset 20px 20px 60px #231441,
    inset -20px -20px 60px #2f1a59`,
  },
  paper: `4px 4px 8px #d8d8d8,
  -4px -4px 8px #ffffff`,
  paperInset: `inset 1px 1px 2px #d9d9d9, inset -1px -1px 2px #ffffff`,
};

export const theme = {
  colors,
  shape,
  font,
  elevation,
  neoShadow,
};

export const device = {
  mobile: `(max-width: 550px)`,
};
