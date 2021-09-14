import React, { useEffect, useState } from 'react'
import { Dropdown, Table } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { BsPlusCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import jobOffersJSON from '../../../database/job-offers.json'

const JobOffersIndex = () => {

  const [jobOffers, setJobOffers] = useState(JSON.parse(localStorage.getItem("jobOffers")));

  useEffect(() => {
    if (!localStorage.getItem("jobOffers")) {
      const jobs = jobOffersJSON.jobOffers;
      localStorage.setItem("jobOffers", JSON.stringify(jobs));
      setJobOffers(jobs);
    }
  }, [])

  const salaryDetails = (job) => {
    return (job.salaryTop) ?
      `${job.salaryBottom}/yr - ${job.salaryTop}/yr` :
      `${job.salaryBottom}/yr`;
  }
  
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between">
        <h2 className="fs-4">Job Offers</h2>
        <Link to="/admin/job-offers/new" className="btn btn-primary">
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
          {jobOffers && jobOffers.map((offer, index) => (
          <tr key={ offer.id }>
            <td>{ offer.title }</td>
            <td>{ salaryDetails(offer) }</td>
            <td>{ new Date(offer.created).toDateString() }</td>
            <td>
              <Dropdown align="end">
                <Dropdown.Toggle as={ 'div' }>Actions</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link className="text-decoration-none" to={ `/jobs/${ offer.id }` }>Public Page</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className="text-decoration-none" to={ `/admin/job-offers/${ offer.id }/edit` }>Edit</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className="text-decoration-none" to="#">Send Offer to Candidate</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <Link className="text-decoration-none text-danger" to={ `/admin/job-offers/${ offer.id }/delete` }>Delete</Link>
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

export default JobOffersIndex
