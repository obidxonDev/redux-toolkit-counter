import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, amoutInc } from './context/counter';
import { useState } from 'react';

function App() {

  const counter = useSelector(s => s.counter.value)
  const dispatch = useDispatch()

  const [incNum, setIncNum] = useState(1)
  const [decNum, setDecNum] = useState(1)

  // console.log(incNum);
  // console.log(decNum);

  function handleInc(e){
    e.preventDefault()
    dispatch(increment(incNum))
  }
  
  function handleDec(e){
    e.preventDefault()
    dispatch(decrement(decNum))
  }

  return (
    <div className="app">
      <h1>Redux Toolkit Counter</h1>
      <div className="count-div"> { counter } </div>
      <div className="inc-input">
        <form action="">
          <input required type="number" placeholder='Enter Number' value={incNum} onChange={(e) => setIncNum(e.target.value)} />
          <button onClick={handleInc} className='inc'>+</button>
        </form>
      </div>
      <div className="dec-input">
        <form action="">
          <input type="number" placeholder='Enter Number' value={decNum} onChange={(e) => setDecNum(e.target.value)} />
          <button onClick={handleDec} className='dec'>-</button>
        </form>
      </div>
    </div>
  );
}

export default App;
