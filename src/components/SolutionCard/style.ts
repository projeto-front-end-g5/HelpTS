import styled from 'styled-components';

export const ContainerSolutions = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const DivSolutionCard = styled.li`
  width: 100%;
  min-height: 7rem;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border: none;
  border-left: 5px solid var(--blue);
  border-right: 5px solid var(--blue);
  border-radius: 10px;
  background-color: var(--grey-card);

  .card1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.3rem;
  }

  .card2 {
    font-family: ubuntu;

    font-size: 0.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }

  .card2 .countLike--card {
    display: flex;
    align-items: center;
    font-weight: 500;
  }

  .card1 .title--card {
    font-family: 'Ubuntu';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: var(--blue);
    padding-top: 5px;
    word-break: break-all;
  }

  .card1 {
    font-family: 'Ubuntu';
    display: flex;
    align-items: flex-start;
    font-size: 1rem;
  }

  .tag--card {
    font-size: 1rem;
    color: var(--grey-dark);
  }

  .hash--card {
    font-family: 'Ubuntu';
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: var(--grey-dark);
    cursor: pointer;
    background: transparent;
    border: none;
  }

  .span--tags {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  .div--btnlike {
    display: flex;
    align-self: flex-end;
  }

  .btn--like {
    font-size: 1.5rem;
    background-color: transparent;
    border: none;
    color: var(--green);
  }

  .countLike--card {
    font-size: 1rem;
    color: var(--grey-dark);
  }
`;
