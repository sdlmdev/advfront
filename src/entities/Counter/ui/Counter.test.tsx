import {screen} from '@testing-library/react';

import {ComponentRender} from 'shared/lib/tests/ComponentRender';

import {Counter} from './Counter';

describe('Тесты счетчика', () => {
  test('Проверка значения счетчика', () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    expect(screen.getByTestId('counterValue')).toHaveTextContent('10');
  });

  test('Уменьшение значения счетчика', () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    const decrementButton = screen.getByTestId('counterDecrement');
    decrementButton.click();

    expect(screen.getByTestId('counterValue')).toHaveTextContent('9');
  });

  test('Увеличение значения счетчика', () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    const incrementButton = screen.getByTestId('counterIncrement');
    incrementButton.click();

    expect(screen.getByTestId('counterValue')).toHaveTextContent('11');
  });
});
