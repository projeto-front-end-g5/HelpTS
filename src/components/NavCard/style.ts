import styled from 'styled-components';

export const NavTypesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 30px;

  width: 90%;

  .create--type {
    display: flex;
    align-items: center;

    font-size: 20px;

    width: fit-content;
    height: fit-content;

    border-radius: 50%;

    color: var(--yellow);
    background-color: var(--blue-dark);

    @media (min-width: 600px) {
      font-size: 25px;
    }

    @media (min-width: 1024px) {
      font-size: 30px;
      font-weight: 800;
    }
  }

  .nav--params {
    display: flex;

    font-size: 18px;

    @media (min-width: 600px) {
      font-size: 22px;
    }
  }
`;
