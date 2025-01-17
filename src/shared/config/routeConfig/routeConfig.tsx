import {RouteProps} from 'react-router-dom';

import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: routePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
};
