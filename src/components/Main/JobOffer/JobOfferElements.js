import styled from "styled-components";
import { Row } from "react-bootstrap";
import heroBg1 from "../../../images/offer-bg-1.jpg"
import heroBg2 from "../../../images/offer-bg-2.jpg"
import heroBg3 from "../../../images/offer-bg-3.jpg"
import heroBg4 from "../../../images/offer-bg-4.jpg"
import heroBg5 from "../../../images/offer-bg-5.jpg"

const getRandomHeroBackground = () => {
  const min = Math.ceil(1);
  const max = Math.floor(5);
  switch (Math.floor(Math.random() * (max - min + 1)) + min) {
    case 1:
      return heroBg1;
    case 2:
      return heroBg2;
    case 3:
      return heroBg3;
    case 4:
      return heroBg4;
    case 5:
      return heroBg5;
    default:
      return heroBg1;
  }
};

export const JobOfferHero = styled(Row)`
  background-image: url(${getRandomHeroBackground()});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  height: 100vh;  
`

export const JobOfferHeroText = styled.div`
  font-size: 5rem;
  font-weight: bold;
`
