import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink to="/home" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link">Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}
