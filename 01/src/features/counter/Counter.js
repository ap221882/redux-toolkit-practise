import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, increaseByAmount } from './counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        type='text'
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(increaseByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(resetAll)}>Reset all</button>
      </div>
    </div>
  );
};

export default Counter;
