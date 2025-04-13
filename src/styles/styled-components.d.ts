import * as styled from 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: any;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'css': any;
    }
  }
} 