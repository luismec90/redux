import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import { loadCounter } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCounter());
  }, []);

  return (
    <div className="container">
      <Header />
      <Counter />
    </div>
  );
}

export default App;
