import React from 'react'
import { Dropdown, Table } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { BsPlusCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import jobOffersJSON from '../../database/job-offers.json'

const JobOffers = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between">
        <h2 className="fs-4">Job Offers</h2>
        <Link to="/job-offers/new" className="btn btn-primary">
          <IconContext.Provider value={{ className: "bi me-2" }}><BsPlusCircle /></IconContext.Provider>
          Create Job Offer
        </Link>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Salary</th>
            <th>Posted</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {jobOffersJSON.jobOffers.map((job, index) => (
          <tr key={ job.id }>
            <td>{ job.title }</td>
            <td>{ job.salaryRange.bottom + " - " + job.salaryRange.top }</td>
            <td>{ job.datePosted }</td>
            <td>
              <Dropdown align="end">
                <Dropdown.Toggle as={ 'div' }>Actions</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link className="text-decoration-none" to={ `/jobs/${ job.id }` }>Public Page</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className="text-decoration-none" to={ `/job-offers/${ job.id }/edit` }>Edit</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <Link className="text-decoration-none text-danger" to={ `/job-offers/${ job.id }/delete` }>Delete</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  )
}

export default JobOffers
