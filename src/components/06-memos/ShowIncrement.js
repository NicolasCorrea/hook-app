import React from "react"

export const ShowIncrement = React.memo(({ increment }) => {
  
  console.log("me volvi a mostrar")
  return (
    <button
      className="btn btn-primary"
      onClick={increment}
    >
      +1
    </button>
  )
})
