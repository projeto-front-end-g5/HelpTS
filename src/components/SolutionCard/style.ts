import styled from 'styled-components';

export const DivPai = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivSolutionCard = styled.div`
  width: 400px;
  min-height: 75px;
  display: flex;
  justify-content: space-between;
  /* margin: 0 auto; */
  padding: 0px 10px;
  border: none;
  border-left: 5px solid var(--blue);
  border-right: 5px solid var(--blue);
  border-radius: 5px;
  background-color: var(--grey-card);

  .card1 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .card1 .title--card {
    font-family: ubuntu;
    color: var(--blue);
  }

  .card1 .hash--card {
    font-family: ubuntu;
    display: flex;
    align-items: center;
    font-size: 0.6rem;
  }

  .span--tags {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .div--btnlike {
    display: flex;
    align-self: flex-end;
  }

  .btn--like {
    font-size: 1.2rem;
    background-color: transparent;
    border: none;
    color: var(--green);
  }
`;
