import React, { useEffect, useState } from 'react'
import {
  JobOfferHero,
  JobOfferHeroText,
} from "./JobOfferElements";
import { Col, Container, Row } from 'react-bootstrap';

const JobOffer = ({ match }) => {

  const { params: { offerId } } = match;
  const [isLoading, setIsLoading] = useState(true);
  const [jobOffer, setJobOffer] = useState();

  useEffect(() => {;
    const jobOffer = JSON.parse(localStorage.getItem("jobOffers")).find((offer) => {
      return offer.id === offerId;
    });
    if (jobOffer) {
      setJobOffer(jobOffer);
      setIsLoading(false);
    }
  }, [offerId])

  const JobOfferCard = ({ title, children }) => {
    return (
      <div className="card">
        <div className="card-header">{title}</div>
        <ul className="list-group list-group-flush">
          {children}
        </ul>
      </div>
    )
  }

  const salaryDetails = (compDetails) => {
    return (compDetails.salaryTop) ?
      `${compDetails.salaryBottom}/yr - ${compDetails.salaryTop}/yr` :
      `${compDetails.salaryBottom}/yr`;
  }

  return (
    <React.Fragment>
      {console.log(jobOffer)}
      {!isLoading && jobOffer ? (
        <Container fluid>
          <JobOfferHero className="align-items-center text-center">
            <div>
              <h3>Congratualtions!</h3>
              <strong className="fs-5">The Company has offered you a position to become their new:</strong>
              <JobOfferHeroText>{jobOffer.title}</JobOfferHeroText>
            </div>
          </JobOfferHero>
          <Row className="justify-content-center py-5 fs-5">
            <Col className="col-8">
              <strong>About The Offer</strong>
              <div className="mb-4">{jobOffer.description}</div>
              <div className="container p-0">
                <div className="row">
                  <div className="col">
                    <JobOfferCard
                      title="Compensation Details"
                    >
                      <li className="list-group-item"><strong>Salary:</strong> {salaryDetails(jobOffer.compensationDetails)}</li>
                      {jobOffer.compensationDetails.signingBonus && (
                        <li className="list-group-item"><strong>Signing Bonus:</strong> {jobOffer.compensationDetails.signingBonus}</li>
                      )}
                      {jobOffer.compensationDetails.equity && (
                        <li className="list-group-item"><strong>Equity:</strong> {jobOffer.compensationDetails.equity} {jobOffer.compensationDetails.equityType}</li>
                      )}
                      {jobOffer.compensationDetails.annualEquityBonus && (
                        <li className="list-group-item"><strong>Annual Equity Bonus:</strong> {jobOffer.compensationDetails.annualEquityBonus} {jobOffer.compensationDetails.annualEquityBonusType}</li>
                      )}
                    </JobOfferCard>
                  </div>
                  {jobOffer.learningOpportunities && (
                  <div className="col">
                    <JobOfferCard
                      title="Learning Opportunities"
                    >
                      {jobOffer.learningOpportunities.map((opportunity, index) => (
                        <li key={index} className="list-group-item">{opportunity}</li>
                      ))}
                    </JobOfferCard>
                  </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center py-5 fs-5" style={{ backgroundColor: "#ededed" }}>
            <Col lg={ 8 }>
              <div>
                <strong>About The Company</strong>
                <p>Our mission is to help companies build lasting relationships with candidates and employees.</p>
                <p>We help teams clearly communicate compensation to candidates and employees through our digital offer and total rewards experiences, powered by our real-time comp and equity data.</p>
                <p><strong>For people teams:</strong> We streamline offer creation and collaboration to run a more effective closing process, better convey total compensation through our digital offer experience, improve retention through our total rewards dashboard for employees, and integrate our real-time comp and equity data to make better offers and plan for the future of their organization.</p>
                <p><strong>For candidates:</strong> We make it easy to understand their offer (digital and fully branded), which includes the role, total compensation, equity, benefits, perks, the team they’ll work with, and the culture of the company.</p>
                <p><strong>For employees:</strong> We make it easy to visualize and understand their total rewards, including how their compensation, ownership, and financial relationship with the company grows and evolves over time.</p>
              </div>
              <div className="container p-0">
                <div className="row">
                  <div className="col">
                    <JobOfferCard title="Company Details">
                      <li className="list-group-item"><strong>Name:</strong> {jobOffer.company.name}</li>
                      <li className="list-group-item"><strong>Industry:</strong> {jobOffer.company.industry}</li>
                      <li className="list-group-item"><strong>Company Size:</strong> {jobOffer.company.employeeSize}</li>
                      <li className="list-group-item"><strong>Location:</strong> {jobOffer.company.location}</li>
                    </JobOfferCard>
                  </div>
                  {jobOffer.company.culture && (
                  <div className="col">
                    <JobOfferCard title={jobOffer.company.culture.type}>
                      {jobOffer.company.culture.details.map((cultureDeet, index) => (
                        <li key={index} className="list-group-item">{cultureDeet}</li>
                      ))}
                    </JobOfferCard>
                  </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <h2>Loading</h2>
      )}
    </React.Fragment>
  )
}

export default JobOffer
