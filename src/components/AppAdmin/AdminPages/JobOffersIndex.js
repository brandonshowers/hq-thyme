import React, { useState } from 'react'
import { Button, Dropdown, Modal, Table } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { BsPlusCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const JobOffersIndex = () => {

  const [deleteOfferShow, setDeleteOfferShow] = useState(false);
  const handleDeleteOfferClose = () => setDeleteOfferShow(false);
  const handleDeleteOfferShow = () => setDeleteOfferShow(true);

  const jobOffers = JSON.parse(localStorage.getItem("jobOffers"));

  const salaryDetails = (job) => {
    return (job.salaryTop) ?
      `${job.salaryBottom}/yr - ${job.salaryTop}/yr` :
      `${job.salaryBottom}/yr`;
  }

  const DeleteOfferModal = () => {
    return (
      <Modal show={deleteOfferShow} onHide={handleDeleteOfferClose}>
        <Modal.Header>
          <Modal.Title>Are you sure you want to delete this offer?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This action cannot be undone! Candidates with a link to this offer will see an offer closed page. Are you sure you want to delete this offer?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteOfferClose}>Cancel</Button>
          <Button variant="danger" onClick={handleDeleteOfferClose}>Delete Offer</Button>
        </Modal.Footer>
      </Modal>
    )
  }
  
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between">
        <h2 className="fs-4">Job Offers</h2>
        <Link to="/admin/job-offers/new" className="btn btn-primary">
          <IconContext.Provider value={{className: "bi me-2" }}><BsPlusCircle /></IconContext.Provider>
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
          <tr key={offer.id}>
            <td>{offer.title}</td>
            <td>{salaryDetails(offer.compensationDetails)}</td>
            <td>{new Date(offer.created).toDateString()}</td>
            <td>
              <Dropdown align="end">
                <Dropdown.Toggle as="div" style={{cursor: "pointer"}}>Actions</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to={`/jobs/${offer.id}`}>Public Page</Dropdown.Item>
                  <Dropdown.Item as={Link} to={`/admin/job-offers/${offer.id}/edit`}>Edit</Dropdown.Item>
                  <Dropdown.Item as={Link} to="#">Send Offer to Candidate</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="text-danger" onClick={handleDeleteOfferShow}>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          ))}
        </tbody>
      </Table>
      <DeleteOfferModal/>
    </React.Fragment>
  )
}

export default JobOffersIndex
