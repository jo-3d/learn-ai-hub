export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    light: string;
    dark: string;
    text: string;
    shadow: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
    wide: string;
  };
  typography: {
    fontFamily: string;
    h1: {
      fontSize: string;
      lineHeight: number;
      fontWeight: number;
    };
    h2: {
      fontSize: string;
      lineHeight: number;
      fontWeight: number;
    };
    h3: {
      fontSize: string;
      lineHeight: number;
      fontWeight: number;
    };
    body: {
      fontSize: string;
      lineHeight: number;
      fontWeight: number;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    round: string;
    pill: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  transitions: {
    fast: string;
    medium: string;
    slow: string;
  };
  zIndex: {
    header: number;
    modal: number;
    tooltip: number;
  };
};

const theme: Theme = {
  colors: {
    primary: '#2A7DE1',
    secondary: '#5E42BC',
    accent: '#00BFA6',
    light: '#F5F7FA',
    dark: '#333844',
    text: '#4A4F5C',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
  },
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    h1: {
      fontSize: '3rem',
      lineHeight: 1.2,
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.2rem',
      lineHeight: 1.3,
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.8rem',
      lineHeight: 1.4,
      fontWeight: 600,
    },
    body: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '50%',
    pill: '50px',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    fast: '0.2s',
    medium: '0.3s',
    slow: '0.5s',
  },
  zIndex: {
    header: 100,
    modal: 1000,
    tooltip: 500,
  },
};

export default theme; 