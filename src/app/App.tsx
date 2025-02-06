import {AppRouter} from 'app/providers/router';
import {useTheme} from 'app/providers/ThemeProvider';
import {Suspense} from 'react';
import {Navbar} from 'widgets/Navbar';
import {PageLoader} from 'widgets/PageLoader';
import {Sidebar} from 'widgets/Sidebar';

import {classNames} from 'shared/lib/classNames/classNames';

const App = () => {
  const {theme} = useTheme();

  return (
    <div id="app" className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <main className={classNames('content-page')}>
          <Sidebar />
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
};

export default App;
