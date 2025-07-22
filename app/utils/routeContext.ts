// SSR/CSR-safe route context for active link highlighting
import { createContext, useContext } from 'react';

export interface RouteContextType {
  pathname: string;
  hash: string;
}

export const RouteContext = createContext<RouteContextType>({ pathname: '', hash: '' });

export function useRouteContext() {
  return useContext(RouteContext);
}
