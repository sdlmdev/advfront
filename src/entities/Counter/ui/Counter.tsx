import {useDispatch, useSelector} from 'react-redux';

import {Button} from 'shared/ui/Button';

import {getCounterValue} from '../model/selectors/getCounterValue/getCounterValue';
import {counterActions} from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <span data-testid="counterValue">{counterValue}</span>
      <Button data-testid="counterIncrement" onClick={increment}>
        +
      </Button>
      <Button data-testid="counterDecrement" onClick={decrement}>
        -
      </Button>
    </div>
  );
};
