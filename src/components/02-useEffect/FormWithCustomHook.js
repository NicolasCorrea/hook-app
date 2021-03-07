import React from 'react'
import "./effects.css"
import { useForm } from '../../hooks/useForm';

const FormWithCustomHook = () => {

  const [formState, handleInputChange] = useForm({
    name: "",
    email: "",
    password: ""
  })
  const { name, email, password } = formState;

  return (
    <>
      <h1>Form With Custom Hook</h1>
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
      <div className="form-group mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Your Password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
    </>
  )
}

export default FormWithCustomHook
