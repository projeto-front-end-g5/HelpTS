import styled from 'styled-components';


export const DivSolutionCard = styled.div`
  width: 100%;
  min-height: 75px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: none;
  border-left: 5px solid var(--blue);
  border-right: 5px solid var(--blue);
  border-radius: 5px;
  background-color: var(--grey-card);

  .card1 {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  }

  .card2 {
    font-family: ubuntu;

    font-size: 0.6rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card2 .countLike--card {
    display: flex;
    align-items: center;
    font-weight: 500;
  }

  .card1 .title--card {
    font-family: ubuntu;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    color: var(--blue);
    padding-top: 5px;
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
