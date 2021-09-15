import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import uuid from 'react-uuid'

const JobOfferNew = ({ history }) => {
  return (
    <div className="col">
      <h2 className="p-3 pb-0 fs-4">Create Job Offer</h2>
      <Formik
        initialValues={{
          title: "",
          hiringManager: "",
          compensationDetails: {
            salaryTop: "",
            salaryBottom: "",
            equity: "",
            equityType: "",
            annualEquityBonus: "",
            annualEquityBonusType: "",
            signingBonus: "",
          },
          positionType: "",
          positionLocation: "",
          isRemotePosition: false,
          description: "",
          specialNotes: "",
          company: {
            about: "Our mission is to help companies build lasting relationships with candidates and employees. We help teams clearly communicate compensation to candidates and employees through our digital offer and total rewards experiences, powered by our real-time comp and equity data. For people teams: We streamline offer creation and collaboration to run a more effective closing process, better convey total compensation through our digital offer experience, improve retention through our total rewards dashboard for employees, and integrate our real-time comp and equity data to make better offers and plan for the future of their organization. For candidates: We make it easy to understand their offer (digital and fully branded), which includes the role, total compensation, equity, benefits, perks, the team they’ll work with, and the culture of the company. For employees: We make it easy to visualize and understand their total rewards, including how their compensation, ownership, and financial relationship with the company grows and evolves over time.",
            employeeSize: "11-50",
            industry: "Computer Software",
            location: "New York, NY",
            name: "hq:thyme"
          }
        }}
        validationSchema={
          Yup.object({
            title: Yup.string()
              .min(12, "Title must be at least 12 characters long")
              .max(120, "Title cannot be more than 120 characters")
              .required("Offer Title is required"),
            description: Yup.string()
              .required("Job description is required"),
            compensationDetails: Yup.object().shape({
              salaryBottom: Yup.number().required("Salary is required"),
              salaryTop: Yup.number(),
              equity: Yup.number(),
              equityType: Yup.string().oneOf([
                "Preferred Stock",
                "Common Stock",
                "Stock Options"
              ], "Select a valid equity type"),
              annualEquityBonus: Yup.number(),
              annualEquityBonusType: Yup.string().oneOf([
                "Preferred Stock",
                "Common Stock",
                "Stock Options"
              ], "Select a valid equity bonus type"),
              signingBonus: Yup.number(),
            }),
            positionType: Yup.string()
              .oneOf(
                ["full-time", "part-time", "contract"],
                "Choose a valid position type"
              )
              .required("Position type is required"),
            positionLocation: Yup.string(),
            hiringManager: Yup.string().oneOf([
                "Dan Barrett",
                "Nick Gavronsky",
                "Rick Pereira"
              ], "Select a valid hiring manager")
              .required("Hiring manager is required"),
          })
        }
        onSubmit={( values ) => {
          const jobs = JSON.parse(localStorage.getItem("jobOffers"));
          jobs.push({
            id: uuid(),
            created: new Date().toISOString(),
            title: values.title,
            hiringManager: values.hiringManager,
            compensationDetails: {
              salaryTop: values.compensationDetails.salaryTop,
              salaryBottom: values.compensationDetails.salaryBottom,
              equity: values.compensationDetails.equity,
              equityType: values.compensationDetails.equityType,
              annualEquityBonus: values.compensationDetails.annualEquityBonus,
              annualEquityBonusType: values.compensationDetails.annualEquityBonusType,
              signingBonus: values.compensationDetails.signingBonus,
            },
            learningOpportunities: [
              "Mentorship",
              "Conference fee reimbursement",
              "Regular pair-programming sessions",
              "Reimbursement for online courses, books, resources, etc."
            ],      
            positionType: values.positionType,
            positionLocation: values.positionLocation,
            isRemotePosition: values.isRemotePosition,
            description: values.description,
            specialNotes: values.specialNotes,
            company: {
              about: values.company.about,
              employeeSize: values.company.employeeSize,
              industry: values.company.industry,
              location: values.company.location,
              name: values.company.name,
              culture: {
                type: "Team-first Progressive Culture",
                details: [
                  "True transparency",
                  "Employees are friends with people in other departments",
                  "Regular team socializing outside of work",
                  "People take pride in their work"
                ]
              }      
            }
          });
          localStorage.setItem("jobOffers", JSON.stringify(jobs));
          history.push("/admin/job-offers");
        }}
      >
        {({
          values,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="p-3">
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
                <Form.Group as={Col} controlId="hiringManager">
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
                    <option value="Nick Gavronsky">Nick Gavronsky</option>
                    <option value="Rick Pereira">Rick Pereira</option>
                  </Form.Control>
                  <ErrorMessage
                    name="hiringManager"
                    component="div"
                    className="d-block invalid-feedback"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="positionLocation">
                  <Form.Label>Position Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="positionLocation"
                    placeholder="New York, NY"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.positionLocation }
                  />
                  <ErrorMessage
                    name="positionLocation"
                    component="div"
                    className="d-block invalid-feedback"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="positionType">
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
              </Row>
              <Form.Group controlId="isRemotePosition">
                <Form.Check
                  type="checkbox"
                  label="Is this a remote position?"
                  name="isRemotePosition"
                  checked={ values.isRemotePosition }
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                />
                <Form.Text id="remotePositionHelpBox" muted>
                  Select this checkbox if the offer you are creating is a remote position within your company.
                </Form.Text>
              </Form.Group>
            </div>
            <div className="p-3" style={{ backgroundColor: "#ededed" }}>
              <h2 className="fs-5">Compensation Details</h2>
              <Row className="mb-3">
                <Form.Group as={ Col } controlId="compensationDetails.salaryBottom">
                  <Form.Label>Salary Bottom</Form.Label>
                  <Form.Control
                    type="text"
                    name="compensationDetails.salaryBottom"
                    placeholder="104300"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.compensationDetails.salaryBottom }
                  />
                </Form.Group>
                <Form.Group as={ Col } controlId="compensationDetails.salaryTop">
                  <Form.Label>Salary Top</Form.Label>
                  <Form.Control
                    type="text"
                    name="compensationDetails.salaryTop"
                    placeholder="175831"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.compensationDetails.salaryTop }
                  />
                </Form.Group>
                <Form.Text id="salaryHelpBox" muted>
                  For a fixed salary, leave Salary Top field blank.
                </Form.Text>
                <ErrorMessage
                  name="compensationDetails.salaryBottom"
                  component="div"
                  className="d-block invalid-feedback"
                />
                <ErrorMessage
                  name="compensationDetails.salaryTop"
                  component="div"
                  className="d-block invalid-feedback"
                />
              </Row>
              <Row className="mb-3">
                <Form.Group as={ Col } controlId="compensationDetails.equity">
                  <Form.Label>Equity</Form.Label>
                  <Form.Control
                    type="text"
                    name="compensationDetails.equity"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.compensationDetails.equity }
                  />
                </Form.Group>
                <Form.Group as={ Col } controlId="compensationDetails.equityType">
                  <Form.Label>Equity Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="compensationDetails.equityType"
                    aria-label="Default select example"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.compensationDetails.equityType }
                  >
                    <option disabled value="">Choose Equity Type...</option>
                    <option value="Preferred Stock">Preferred Stock</option>
                    <option value="Common Stock">Common Stock</option>
                    <option value="Stock Options">Stock Options</option>
                  </Form.Control>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={ Col } controlId="compensationDetails.annualEquityBonus">
                  <Form.Label>Annual Equity Bonus</Form.Label>
                  <Form.Control
                    type="text"
                    name="compensationDetails.annualEquityBonus"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.compensationDetails.annualEquityBonus }
                  />
                </Form.Group>
                <Form.Group as={ Col } controlId="compensationDetails.annualEquityBonusType">
                  <Form.Label>Annual Equity Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="compensationDetails.annualEquityBonusType"
                    aria-label="Default select example"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.compensationDetails.annualEquityBonusType }
                  >
                    <option disabled value="">Choose Annual Equity Type...</option>
                    <option value="Preferred Stock">Preferred Stock</option>
                    <option value="Common Stock">Common Stock</option>
                    <option value="Stock Options">Stock Options</option>
                  </Form.Control>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={ Col } controlId="compensationDetails.signingBonus">
                  <Form.Label>Signing Bonus</Form.Label>
                  <Form.Control
                    type="text"
                    name="compensationDetails.signingBonus"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.compensationDetails.signingBonus }
                  />
                </Form.Group>
                <ErrorMessage
                  name="compensationDetails.signingBonus"
                  component="div"
                  className="d-block invalid-feedback"
                />
              </Row>
            </div>
            <div className="p-3">
              <h2 className="fs-5">Company Details</h2>
              <Form.Group className="mb-3" controlId="companyAbout">
                <Form.Label>About</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ height: '150px' }}
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  value={ values.company.about }
                />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="companyEmployeeSize">
                  <Form.Label>Employee Size</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.company.employeeSize }
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="companyIndustry">
                  <Form.Label>Industry</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.company.industry }
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="companyLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.company.location }
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="companyName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={ handleChange }
                    onBlur={ handleBlur }
                    value={ values.company.name }
                  />
                </Form.Group>
              </Row>
            </div>
            <div className="p-3" style={{ backgroundColor: "#ededed" }}>
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
              <Button variant="primary" type="submit">
                Submit Job Offer
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default JobOfferNew
