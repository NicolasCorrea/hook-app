import React, { useEffect, useState } from 'react'
import "./effects.css"
import { Message } from './Message';
const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: "",
    email: ""
  })
  const { name, email } = formState;
  useEffect(() => {
    // console.log("inicio componente");

  }, [])

  useEffect(() => {
    // console.log("cambio formulario");

  }, [formState])

  useEffect(() => {
    // console.log("email cambio");

  }, [email])



  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }


  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your Name"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Your Email"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "123" && <Message />}
    </>
  )
}

export default SimpleForm
