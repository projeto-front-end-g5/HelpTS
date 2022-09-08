import styled from 'styled-components';

export const BtnHomeLogoHelpTSContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 30px;
  }

  .btn--home--container {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-top: 10px;

    width: 90%;

    button {
      background: transparent;
      border: none;
      border-radius: 5px;
      color: var(--blue-dark);

      font-size: 15px;
    }
  }
`;
