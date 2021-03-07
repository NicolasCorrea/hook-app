import { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const heavyProcess = (itera) => {
    for (let i = 0; i < itera; i++) {
      console.log("Ahi vamos...")
    }
    return `${itera} iterations performed`
  }
  
  const memoHeavy = useMemo(() => heavyProcess(counter), counter)


  return (
    <>
      <h1>Memorize <small>{counter}</small> </h1>
      <hr />
      
      <p>{memoHeavy}</p>
      
      <button onClick={() => increment()} className="btn btn-primary">+1</button>
      <button onClick={() => setShow(!show)} className="btn btn-primary ms-3">show/hide {JSON.stringify(show)}</button>
    </>
  )
}
