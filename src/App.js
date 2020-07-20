import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './inputSample';
import './App.css';

function App() {
  const name = 'Bye';
  const divStyle = {
    border: '1px solid red',
    width: '100px',
    height: '100px'
  }
  return (
    <Wrapper>
      <Hello isSpecial />
      <div className="graybox"></div>
      <Counter />
      <InputSample />
    </Wrapper>
  );
}

export default App;
