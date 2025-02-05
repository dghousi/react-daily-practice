import { useCallback, useMemo, useState, lazy, Suspense } from 'react';
const MyButton = lazy(() => import('./MyButton'));

function MemoApp() {
  
  const [num, setNum] = useState(10)
  const [logValue, setLogValue] = useState('')

  const fibValue = useMemo(() => {
    console.log('Fib value')
    return fib(num)
  }, [num])

  const onClickLog = useCallback(() => {
    console.log(logValue)
  }, [logValue])

  return (
    <div className="App">
      <h1>Fib {num} is {fibValue}</h1>

      <input 
        type='number' 
        value={num} 
        onChange={(event) => setNum(parseInt(event.target.value))} />

      <input 
        type='text'
        value={logValue}
        onChange={(event) => setLogValue(event.target.value)} />

        {
          logValue.length > 0 ?
          <Suspense fallback={<span>Loading ....</span>}><MyButton onClick={onClickLog}> Log Value </MyButton></Suspense>
           :
          null
        }
        
    </div>
  );
}

function fib(num) {
  if (num === 2) return 1
  if (num === 1) return 1
  return fib(num-1) + fib(num-2)
}

export default MemoApp;
