import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css"
import { useFetch } from "../../hooks/useFetch"
export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>Multiple Custom Hooks</h1>
      <hr />
      {
        loading ?
          <div className="alert alert-info" role="alert">
            <strong>Loading...</strong>
          </div>
          :
          <figure className="text-end">
            <blockquote className="blockquote text-right">
              <p className="mb-2">{quote}</p>
              <footer className="blockquote-footer">
                <cite title={author}>{author}</cite>
              </footer>
            </blockquote>
          </figure>
      }


      <button type="button" className="btn btn-primary" onClick={() => increment()}>Next Quote</button>


    </>
  )
}
