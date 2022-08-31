import styled from 'styled-components';

export const DivSolutionCard = styled.div`
  width: 85%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  border: 1px solid black;
  padding: 0px 10px;

  .card1 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    background-color: transparent;
    border: none;
    color: var(--green);
  }
`;
