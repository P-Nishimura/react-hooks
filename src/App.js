import React, { useState } from 'react';

const App = (props) => {
  const initialState = props;
  const [name, setName] = useState(initialState.name);
  const [price, setPrice] = useState(initialState.price);

  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  };

  return (
    <>
      <p>現在の{name}は{price}です。</p>
      <button onClick={() => {setPrice(price + 1)}}>+1</button>
      <button onClick={() => {setPrice(price - 1)}}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </>
  );
}

App.defaultProps = {
  name: 'Nishimura',
  price: 1000,
};

export default App;
