import {DeepPartial} from '@reduxjs/toolkit';
import {StateScheme} from 'app/providers/StoreProvider';

import {getCounter} from './getCounter';

describe('Тесты getCounter', () => {
  test('Получение объекта значения счетчика', () => {
    const state: DeepPartial<StateScheme> = {
      counter: {
        value: 10,
      },
    };

    expect(getCounter(state as StateScheme)).toEqual(state.counter);
  });
});
