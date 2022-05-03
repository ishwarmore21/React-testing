import { useCounter } from '../Helper/useCounter';

export const Counter = () => {
    const {count,increment,decrement} = useCounter();
  return (
    <>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </>
  )
}
