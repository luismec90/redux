import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseCounter, increaseCounter } from '../redux/actions';

function Counter() {
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-4">
      <button
        className="btn btn-primary"
        onClick={() => dispatch(increaseCounter(2))}
      >
        Increase counter by 2
      </button>
      <button
        className="btn btn-primary ml-3"
        onClick={() => dispatch(decreaseCounter(2))}
      >
        Decrease counter by 2
      </button>
    </div>
  );
}

export default Counter;
