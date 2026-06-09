import { createTheme } from '@mui/material';

import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    xl: React.CSSProperties;
    l: React.CSSProperties;
    s: React.CSSProperties;
    xs: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    xl?: React.CSSProperties;
    l?: React.CSSProperties;
    s?: React.CSSProperties;
    xs?: React.CSSProperties;
  }

  interface Palette {
    tableFree: Palette['primary'];
    tableOcc: Palette['primary'];
    tableRes: Palette['primary'];
  }

  interface PaletteOptions {
    tableFree?: PaletteOptions['primary'];
    tableOcc?: PaletteOptions['primary'];
    tableRes?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    xl: true;
    l: true;
    s: true;
    xs: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    xl: {
      fontSize: '24px',
    },
    l: {
      fontSize: '20px',
    },
    s: {
      fontSize: '12px',
    },
    xs: {
      fontSize: '8px',
    },
  },
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    primary: {
      main: '#393939',
      light: '#F9F9F9',
      dark: '#222222',
    },
    grey: {
      100: '#F0F0F0',
      200: '#7D7D7D',
      300: '#cecece',
      400: '#EEEEEE',
    },
    warning: {
      main: '#FFB648',
    },
    info: {
      main: '#9BC1FF',
    },

    tableFree: {
      main: '#C5E1A5',
      light: '#FFFFFF',
      contrastText: '#000000',
    },
    tableOcc: {
      main: '#FFE68E',
      light: '#FFF9E2',
      contrastText: '#000000',
    },
    tableRes: {
      main: '#FF5858', // Red Badge
      light: '#FFE8E8', // Red-tinted Card
      contrastText: '#FFE8E8',
    },
  },
});
