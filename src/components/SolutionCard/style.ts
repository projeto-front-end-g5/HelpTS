import styled from 'styled-components';


export const ContainerSolutions = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DivSolutionCard = styled.li`
  width: 100%;
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  border: none;
  border-left: 5px solid var(--blue);
  border-right: 5px solid var(--blue);
  border-radius: 10px;
  background-color: var(--grey-card);
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    box-shadow: 1px 2px 3px grey;
  }

  @media (min-width: 600px) {
    min-height: 90px;
  }

  @media (min-width: 768px) {
    min-height: 100px;
  }

  @media (min-width: 1200px) {
    min-height: 130px;
  }

  .card1 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    margin-left: 10px;
    margin-bottom: 5px;

    @media (min-width: 700px) {
      margin-left: 20px;
    }
  }

  .card2 {
    font-family: ubuntu;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    margin-right: 10px;
    margin-bottom: 5px;

    @media (min-width: 700px) {
      margin-right: 20px;
    }
  }

  .card2 .countLike--card {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 12px;
    margin-top: 2px;

    @media (min-width: 600px) {
      font-size: 14px;
    }

    @media (min-width: 900px) {
      font-size: 16px;
    }

    @media (min-width: 1200px) {
      font-size: 18px;
    }
  }

  .card1 .title--card {
    font-family: 'Ubuntu';
    font-weight: 700;
    font-size: 11px;
    line-height: 130%;
    color: var(--blue);
    padding-top: 5px;
    word-break: break-all;

    @media (min-width: 600px) {
      font-size: 14px;
    }

    @media (min-width: 900px) {
      font-size: 16px;
    }

    @media (min-width: 1200px) {
      font-size: 18px;
    }
  }

  .card1 {
    font-family: 'Ubuntu';
    display: flex;
    align-items: flex-start;
  }

  .tag--card {
    font-size: 12px;
    color: var(--grey-dark);

    @media (min-width: 600px) {
      font-size: 14px;
    }

    @media (min-width: 900px) {
      font-size: 16px;
    }

    @media (min-width: 1200px) {
      font-size: 18px;
    }
  }

  .hash--card {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: 'Ubuntu';
    font-size: 12px;
    color: var(--grey-dark);
    cursor: pointer;

    @media (min-width: 600px) {
      font-size: 14px;
    }

    @media (min-width: 900px) {
      font-size: 16px;
    }

    @media (min-width: 1200px) {
      font-size: 18px;
    }
  }

  .div--btnlike {
    display: flex;
    align-self: flex-end;
  }

  .btn--like {
    font-size: 12px;
    background-color: transparent;
    border: none;
    color: var(--green);

    margin-top: 5px;

    @media (min-width: 600px) {
      font-size: 14px;
    }

    @media (min-width: 900px) {
      font-size: 16px;
    }

    @media (min-width: 1200px) {
      font-size: 18px;
    }
  }

  .countLike--card {
    font-size: 1rem;
    color: var(--grey-dark);
  }
`;
