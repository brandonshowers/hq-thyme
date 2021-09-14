import { Link, NavLink } from "react-router-dom"
import { BsGear, BsHouseDoor, BsPerson, BsTable } from 'react-icons/bs'
import { IconContext } from "react-icons"
import { Dropdown } from "react-bootstrap"

const AdminSidebar = ({ className }) => {
  return (
    <div className={ className }>
      <Link to="/admin" className="text-white text-decoration-none p-0 fs-4">hq:thyme</Link>
      <hr />
      <IconContext.Provider value={{ className: "bi me-2" }}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink exact to="/admin" className="nav-link text-white">
            <BsHouseDoor/>
            { " Home " }
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/job-offers" className="nav-link text-white">
            <BsTable/>
            { " Job Offers " }
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/settings" className="nav-link text-white">
            <BsGear/>
            { " Settings " }
          </NavLink>
        </li>
      </ul>
      </IconContext.Provider>
      <hr />
      <Dropdown>
        <Dropdown.Toggle variant="dark" to="#" className="text-decoration-none text-white">
          <BsPerson/> <strong>Michelle Dockery</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item to="#">Sign Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default AdminSidebar
