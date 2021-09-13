import React from 'react'
import {
  Button,
  Col,
  Form,
  Row
} from 'react-bootstrap'
import { ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'

const JobOffersNew = () => {
  return (
    <React.Fragment>
      <h2 className="fs-4">Create Job Offer</h2>
      <Formik
        initialValues={{
          title: "",
          description: "",
          salaryTop: "",
          salaryBottom: "",
          positionType: "",
          hiringManager: "",
          specialNotes: "",
          isRemotePosition: false
        }}
        validationSchema={
          Yup.object({
            title: Yup.string()
              .min(12, "Title must be at least 12 characters long")
              .max(120, "Title cannot be more than 120 characters")
              .required("Offer Title is required"),
            description: Yup.string()
              .required("Job description is required"),
            salaryBottom: Yup.string()
              .required("Salary is required"),
            positionType: Yup.string()
              .oneOf(
                ["full-time", "part-time", "contract"],
                "Choose a valid position type"
              )
              .required("Position type is required"),
            hiringManager: Yup.string()
              .oneOf(
                ["Dan Barrett", "Nick"],
                "Select a valid hiring manager"
              )
              .required("Hiring manager is required"),
          })
        }
        onSubmit={( values ) => {
          console.log( values );
          // Submit logic to follow
        }}
      >
        {({
          values,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="jobTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Job Title"
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.title }
              />
              <ErrorMessage
                name="title"
                component="div"
                className="d-block invalid-feedback"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                placeholder=""
                style={{ height: '150px' }}
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.description }
              />
              <ErrorMessage
                name="description"
                component="div"
                className="d-block invalid-feedback"
              />
            </Form.Group>
            <Row className="mb-3">
              <span>Salary Range</span>
              <Form.Group as={ Col } controlId="salaryBottom">
                <Form.Label>Bottom</Form.Label>
                <Form.Control
                  type="text"
                  name="salaryBottom"
                  placeholder="$104,300"
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.salaryBottom }
                />
              </Form.Group>
              <Form.Group as={ Col } controlId="salaryTop">
                <Form.Label>Top</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="$175,831"
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.salaryTop }
                />
              </Form.Group>
              <ErrorMessage
                name="salaryBottom"
                component="div"
                className="d-block invalid-feedback"
              />
            </Row>
            <Form.Group className="mb-3" controlId="positionType">
              <Form.Label>Position Type</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  name="positionType"
                  label="Full-time"
                  id="positionType-fullTime"
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value="full-time"
                  />
                <Form.Check
                  inline
                  type="radio"
                  name="positionType"
                  label="Part-time"
                  id="positionType-partTime"
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value="part-time"
                  />
                <Form.Check
                  inline
                  type="radio"
                  name="positionType"
                  label="Contract"
                  id="positionType-contract"
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value="contract"
                  />
              </div>
              <ErrorMessage
                name="positionType"
                component="div"
                className="d-block invalid-feedback"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="hiringManager">
              <Form.Label>Hiring Manager</Form.Label>
              <Form.Control
                as="select"
                name="hiringManager"
                aria-label="Default select example"
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.hiringManager }
              >
                <option disabled value="">Choose Manager...</option>
                <option value="Dan Barrett">Dan Barrett</option>
                <option value="Nick">Nick</option>
              </Form.Control>
              <ErrorMessage
                name="hiringManager"
                component="div"
                className="d-block invalid-feedback"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="specialNotes">
              <Form.Label>Special Notes</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.specialNotes }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="isRemotePosition">
              <Form.Check
                type="checkbox"
                label="Is Remote Position?"
                name="isRemotePosition"
                checked={ values.isRemotePosition }
                onChange={ handleChange }
                onBlur={ handleBlur }
              />
              <Form.Text id="remotePositionHelpBox" muted>
                Select this checkbox if the offer you are creating involves a remote position.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Job Offer
            </Button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}

export default JobOffersNew
