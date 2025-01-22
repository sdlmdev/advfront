import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from 'widgets/Sidebar';

import {renderWithTranslation} from 'shared/lib/tests/renderWithTranslation';

describe('Тесты сайдбара', () => {
  test('Рендер', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Переключатель', () => {
    renderWithTranslation(<Sidebar />);

    const toggleBtn = screen.getByTestId('sidebar-toggle');
    const sidebar = screen.getByTestId('sidebar');

    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(sidebar).toHaveClass('collapsed');
  });
});
