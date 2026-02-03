export type Theme = {
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    accent: string;
    bgDark: string;
    bgDarkAlt: string;
    bgDarkHover: string;
    borderDark: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    success: string;
    youtube: string;
  };
  gradients: {
    primary: string;
    hero: string;
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
    glow: string;
    glowStrong: string;
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
    primary: '#2196F3',
    primaryLight: '#64B5F6',
    primaryDark: '#1976D2',
    accent: '#4FC3F7',
    bgDark: '#0D1117',
    bgDarkAlt: '#161B22',
    bgDarkHover: '#21262D',
    borderDark: '#30363D',
    textPrimary: '#E6EDF3',
    textSecondary: '#8B949E',
    textMuted: '#6E7681',
    success: '#3FB950',
    youtube: '#FF0000',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #4FC3F7 0%, #2196F3 50%, #1976D2 100%)',
    hero: 'linear-gradient(135deg, #4FC3F7 0%, #2196F3 50%, #1976D2 100%)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontSize: '3rem',
      lineHeight: 1.2,
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.2rem',
      lineHeight: 1.3,
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
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
    small: '6px',
    medium: '10px',
    large: '16px',
    round: '50%',
    pill: '50px',
  },
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.3)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.4)',
    large: '0 8px 30px rgba(0, 0, 0, 0.5)',
    glow: '0 0 20px rgba(79, 195, 247, 0.3)',
    glowStrong: '0 0 30px rgba(79, 195, 247, 0.4)',
  },
  transitions: {
    fast: '0.15s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
  },
  zIndex: {
    header: 100,
    modal: 1000,
    tooltip: 500,
  },
};

export default theme;
