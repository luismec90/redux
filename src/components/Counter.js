import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseCounter, increaseCounter } from '../redux/actions';

function Counter() {
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-4">
      <button
        className="btn btn-primary"
        onClick={() => dispatch(increaseCounter())}
      >
        Increase counter
      </button>
      <button
        className="btn btn-primary ml-3"
        onClick={() => dispatch(decreaseCounter())}
      >
        Decrease counter
      </button>
    </div>
  );
}

export default Counter;
