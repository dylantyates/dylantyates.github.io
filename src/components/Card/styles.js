import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled.div`
  background: #fff;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  text-align: center;
  max-width: 100%;
  border-radius: 0.25rem;
  @media screen and (min-width: 767px) {
    min-width: 320px;
  }
`;

// CardImage uses image prop from component (Card/index.js)
export const CardImage = styled.div`
  max-width: 100%;
  height: 12rem;
  display: block;
  background: url(${({image}) => `./media/images/${image}`}) no-repeat center center;
  background-size: cover;
`;

export const CardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const CardBody = styled.div`
  font-weight: 300;
  font-size: 1.25rem;
`;

export const CardButton = styled(Link)`
  display: block;
  text-decoration: none;
  background: #2963FF;
  color: #fff;
  margin-top: 1rem;
  padding: 1rem;
  font-weight: 700;
  position: relative;
  text-transform: uppercase;
  font-size: 1.25rem;
`;
