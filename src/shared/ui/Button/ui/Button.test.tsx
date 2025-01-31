import {render, screen} from '@testing-library/react';

import {Button} from 'shared/ui';

describe('Тесты кнопки', () => {
  test('Рендер', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('Наличие класса', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toHaveClass('default');
    screen.debug();
  });
});
