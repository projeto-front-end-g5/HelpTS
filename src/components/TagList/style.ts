import styled from 'styled-components';

export const ListTagContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  margin-top: 10px;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Ubuntu';
  font-style: normal;

  font-size: 12px;

  padding: 6px;

  width: fit-content;
  height: 20px;

  white-space: nowrap;

  background-color: transparent;
  border-radius: 12px;
  border: 2px solid var(--yellow);
  color: var(--yellow);

  transition: 0.4s;

  :hover {
    cursor: pointer;
    letter-spacing: 0.1em;
    box-shadow: 0px 0px 10px 1px yellow;
    background-color: var(--yellow);
    color: white;
  }

  :focus {
    letter-spacing: 0.1em;
    box-shadow: 0px 0px 10px 1px yellow;
    background-color: var(--yellow);
    color: white;
  }

  @media (min-width: 600px) {
    font-size: 15px;
    height: 25px;
    padding: 10px;
  }
`;
