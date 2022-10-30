
import React from 'react';
import Counter from "./Companents/Counter"
import IncreaseCounter from "./Companents/IncreaseCounter"
import DecraseCounter from "./Companents/DecreaseCounter"
import IncreaseByTwoCounter from "./Companents/IncreaseByTwoCounter"
import ResetCounter from './Companents/ResetCounter';
import DecreaseByTwoCounter from './Companents/DecreaseByTwoCounter';

function App() {
  return (
    <div>


      <Counter />
      <DecreaseByTwoCounter />
      <IncreaseCounter />
      <DecraseCounter />
      <IncreaseByTwoCounter />
      <ResetCounter />
    </div>
  );
}

export default App;
