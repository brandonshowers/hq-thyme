import { Link, NavLink } from "react-router-dom"

const AppSidebar = ({ className }) => {
  return (
    <div className={ className } style={{ width: "280px" }}>
      <Link to="/" className="text-white text-decoration-none p-0 fs-4">hq:thyme</Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/job-offers" className="nav-link">Job Offers</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/settings" className="nav-link">Settings</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default AppSidebar
