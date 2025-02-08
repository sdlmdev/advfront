import {DeepPartial} from '@reduxjs/toolkit';
import {StateScheme} from 'app/providers/StoreProvider';

import {getCounterValue} from './getCounterValue';

describe('Тесты getCounterValue', () => {
  test('Получение значения счетчика', () => {
    const state: DeepPartial<StateScheme> = {
      counter: {
        value: 10,
      },
    };

    expect(getCounterValue(state as StateScheme)).toEqual(state.counter.value);
  });
});
