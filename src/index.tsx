/* eslint-disable prettier/prettier */
// Добавлен в prettierignore потому что импорт App должен быть после импорта стилей

import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import {StoreProvider} from 'app/providers/StoreProvider';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './app/styles/index.scss';
import './shared/config/i18n/i18n';

import App from './app/App';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
