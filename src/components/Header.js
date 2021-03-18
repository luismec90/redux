import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const counterValue = useSelector((state) => state.counter.value);
  return <h3 className="mt-5 text-center">The count is: {counterValue}</h3>;
}

export default Header;
