import Hello from './components/Hello'
import Comment from './components/Comment';
import MyButton from './components/Button';
import Counter from './components/Counter';
import CounterReducer from './components/CounterReducer';

import { useReducer, useState } from 'react';
import CounterWithEffects from './components/CounterWithEffects';
import Timer from './components/Timer';
import UseRef from './components/UseRef';


export default function App() {

  const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, {
    stateCount: 0
  })

  const [isShown, setIsShown] = useState(true);
  return (
    <>
      <Hello name="Jane" />
      <Hello name="Doe" />
      <hr/>

      <Comment username="khan" time={new Date().toString()}>
        <h3>HI, </h3>
        <p>this is comment</p>
      </Comment>

      <hr/>

      <MyButton onClick={handleClick}> Click me</MyButton>

      <hr/>

      <Counter count={count} setCount={setCount}/>

      <hr/>

      <CounterReducer 
        count={state.stateCount} 
        onClick={() => dispatch({
          type: 'increment',
          num: 1
        })} 
        >Increment With Reducer</CounterReducer>

      <CounterReducer 
        count={state.stateCount} 
        onClick={() => dispatch({
          type: 'decrement',
          num: 1
        })} 
        >Decrement With Reducer</CounterReducer>

        <p>The count is: {state.stateCount}</p>

      <hr/>

      <button onClick={() => setIsShown(!isShown) }>{isShown ? 'Hide Counter': 'Show Counter'}</button>

      { isShown ? <CounterWithEffects /> : null }

      <hr/>

      <Timer />

      <hr/>

      <UseRef />
    </>
  );
}


function reducer(state, action)
{
  switch (action.type) {
    case "increment":
      return {stateCount: state.stateCount + action.num}
    case "decrement":
      return {stateCount: state.stateCount - action.num}
    default:
      throw new Error("Unknown action type");
  }
}


function handleClick(e)
{
  console.log(e.target)
}

