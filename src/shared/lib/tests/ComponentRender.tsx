import {render} from '@testing-library/react';
import {ReactNode} from 'react';
import {I18nextProvider} from 'react-i18next';
import {MemoryRouter} from 'react-router-dom';

import i18ForTests from 'shared/config/i18n/i18ForTests';
import {routePath} from 'shared/config/routeConfig/routeConfig';

export interface ComponentRenderOptions {
  route?: string;
}

export const ComponentRender = (
  component: ReactNode,
  options: ComponentRenderOptions = {},
) => {
  const {route = routePath.main} = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18ForTests}>{component}</I18nextProvider>,
    </MemoryRouter>,
  );
};
