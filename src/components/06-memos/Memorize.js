import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";
import "../02-useEffect/effects.css";

export const Memorize = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true)
  return (
    <>
      <h1>Memorize <Small value={counter} /></h1>
      <hr />

      <button onClick={() => increment()} className="btn btn-primary">+1</button>
      <button onClick={() => setShow(!show)} className="btn btn-primary ms-3">show/hide {JSON.stringify(show)}</button>
    </>
  )
}
