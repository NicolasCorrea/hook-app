import { useState } from "react"
import "../02-useEffect/effects.css"
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks"
export const RealExampleRef = () => {

  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Real Example Ref</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>

      {show && <MultipleCustomHooks />}

    </>
  )
}
