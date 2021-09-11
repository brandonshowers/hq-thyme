import { Link, NavLink } from "react-router-dom"
import { BsGear, BsHouseDoor, BsPerson, BsTable } from 'react-icons/bs'
import { IconContext } from "react-icons"
import { Dropdown } from "react-bootstrap"

const AppSidebar = ({ className }) => {
  return (
    <div className={ className } style={{ width: "280px" }}>
      <Link to="/" className="text-white text-decoration-none p-0 fs-4">hq:thyme</Link>
      <hr />
      <IconContext.Provider value={{ className: "bi me-2" }}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link text-white">
            <BsHouseDoor/>
            { " Home " }
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/job-offers" className="nav-link text-white">
            <BsTable/>
            { " Job Offers " }
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/settings" className="nav-link text-white">
            <BsGear/>
            { " Settings " }
          </NavLink>
        </li>
      </ul>
      </IconContext.Provider>
      <hr />
      <Dropdown>
        <Dropdown.Toggle to="#" as={Link} variant="dark" className="text-decoration-none text-white">
          <BsPerson/> <strong>Michelle Dockery</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item to="#" as={Link}>Sign Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default AppSidebar
