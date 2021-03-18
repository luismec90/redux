import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCounter, increaseCounter } from '../redux/actions';

function Products() {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.Counter.value);

  return (
    <div>
      <div>
        <h1>{counterValue}</h1>
        <button onClick={() => dispatch(increaseCounter())}>
          Increase counter
        </button>
        <button onClick={() => dispatch(decreaseCounter())}>
          Decrease counter
        </button>
      </div>
    </div>
  );
}

export default Products;
