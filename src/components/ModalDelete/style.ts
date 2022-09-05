import styled from 'styled-components';

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--blue-dark);
  padding: 20px;

  h3 {
    margin-bottom: 50px;
    text-align: center;
    font-family: 'Ubuntu';
  }

  .Container-buttons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  button {
    padding: 15px 60px;
    border: none;
    border-radius: 10px;
    background-color: var(--blue-dark);
    color: var(--grey-light);
    font-family: 'Ubuntu';
    font-size: 1rem;

    :hover {
      opacity: 0.8;
      transition: 0.5s;
    }
  }
`;
