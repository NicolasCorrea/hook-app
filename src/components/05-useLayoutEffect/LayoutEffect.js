
import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "./layout.css"
import { useFetch } from "../../hooks/useFetch"
export const LayoutEffect = () => {

  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = !!data && data[0];
  
  const pTag = useRef()
  const [boxSize, setBoxSize] = useState({})
  
  
  
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect())
  }, [quote])
  
  
  return (
    <>
      <h1>Layout Effect</h1>
      <hr />

      <figure className="text-end">
        <blockquote className="blockquote text-right">
          <p ref={pTag} className="mb-2">{quote}</p>
        </blockquote>
      </figure>
      
    <pre>
      {JSON.stringify(boxSize, null, 3)}
    </pre>


      <button type="button" className="btn btn-primary" onClick={() => increment()}>Next Quote</button>


    </>
  )
}
