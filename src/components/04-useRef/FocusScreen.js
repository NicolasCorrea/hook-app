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
        class="form-control"
        name="name"
        id="name"
        placeholder="Your Name"
      />

      <button
        class="btn btn-primary mt-3"
        onClick={handleClick}
      >
        Focus
      </button>

    </>
  )
}
