import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from 'widgets/Sidebar';

import {ComponentRender} from 'shared/lib/tests/ComponentRender';

describe('Тесты сайдбара', () => {
  test('Рендер', () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Переключатель', () => {
    ComponentRender(<Sidebar />);

    const toggleBtn = screen.getByTestId('sidebar-toggle');
    const sidebar = screen.getByTestId('sidebar');

    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(sidebar).toHaveClass('collapsed');
  });
});
