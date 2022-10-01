import styled from 'styled-components';

export const HomeWrapper = styled.div`
  font-family: 'Noto Sans', 'Arial', sans-serif;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  gap: 1rem;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;
