import { useRef } from "react"
import "../02-useEffect/effects.css"
export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
    console.log(inputRef);
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        name="name"
        id="name"
        placeholder="Your Name"
      />

      <button
        className="btn btn-primary mt-3"
        onClick={handleClick}
      >
        Focus
      </button>

    </>
  )
}
