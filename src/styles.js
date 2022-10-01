import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoadingSpinner = styled.div`
  &.lds-dual-ring {
    display: inline-block;
    width: 72px;
    height: 72px;
    margin: 2rem auto;

    &:after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #334444;
      border-color: #334444 transparent #334444 transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Hero = styled.div`
  background: #131313;
  padding: 0 1rem;
  color: #fff;
`;

export const HeroText = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 1.5rem;
  font-weight: 500;
  opacity: 0.87;
`;

export const BackButton = styled(Link)`
  color: inherit;
  opacity: 0.54;
  text-decoration: none;
  font-size: 2.4rem;
  font-weight: 900;
  margin-right: 1rem;
  display: inline-block;
  vertical-align: middle;
  &:hover {
    opacity: 1;
  }
`;
