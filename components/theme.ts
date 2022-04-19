import { css } from 'styled-components';

export const theme = {
  global: {
    setFocus: (color: string) => {
      return css`
        &:focus {
          outline: none;
          box-shadow: 0 0 8px 3px ${color};
        }
      `;
    },
    setInputFocus: (color: string) => {
      return css`
        &:focus {
          outline: none;
          border-color: ${color};
        }
      `;
    },
    setFocusAndFocusWithin: (color: string) => {
      return css`
        &:focus-within {
          outline: none;
          border-color: ${color};
        }
      `;
    },
  },
  colors: {
    primary: '#054755',
    secondary: '#041428',
    tertiary: '#041c30',
    accentPrimary: '#934FEA',
    accentSecondary: '#0c2131',
  },
  button: {
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.4)`,
  },
  input: {
    fontSize: '1rem',
    padding: '.75rem',
  },
};
