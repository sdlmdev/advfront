import {CounterScheme} from '../types/counterScheme';
import {counterActions, counterReducer} from './counterSlice';

describe('Тесты counterSlice', () => {
  test('Уменьшение значения счетчика', () => {
    const state: CounterScheme = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: state.value - 1,
    });
  });

  test('Увеличение значения счетчика', () => {
    const state: CounterScheme = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: state.value + 1,
    });
  });

  test('Проверка работоспособности с неопределенным стейтом', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
