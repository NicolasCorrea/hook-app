import "./counter.css"
import { useCounter } from "../../hooks/useCounter"

const CounterWithHook = () => {
  const { state, increment, decrement, reset } = useCounter(10)
  return (
    <>
      <h1>Counter With Hook: {state}</h1>
      <hr />
      <button className={"btn btn-primary"} onClick={() => increment()}>+1</button>
            &nbsp;
      <button className={"btn btn-primary"} onClick={() => decrement()}>-1</button>
            &nbsp;
      <button className={"btn btn-primary"} onClick={reset}>Reset</button>
    </>
  )
}

export default CounterWithHook
