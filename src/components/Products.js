import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from '../redux/actions';

function Products() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.Notification.message);

  return (
    <div>
      Products
      <div>
        <h1>{message}</h1>
        <button
          onClick={() =>
            dispatch(notification({ message: 'Hola mundo', type: 'success' }))
          }
        >
          Increase counter
        </button>
      </div>
    </div>
  );
}

export default Products;
