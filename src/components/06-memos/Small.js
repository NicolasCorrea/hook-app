import React from "react"

export const Small = React.memo(({ value }) => {
  console.log("me renderize")
  return <small>{value}</small>
})
