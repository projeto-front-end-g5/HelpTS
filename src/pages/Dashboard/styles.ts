import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  .main--dashboard {
    width: 70%;
    min-width: 290px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonAll = styled.button`
  border: none;
  background-color: var(--blue-dark);
  color: var(--white);
  padding: 0.4rem;
  border-radius: 5px;
  font-family: 'Tajawal';
  align-self: center;
  margin: 20px;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    opacity: 0.8;
  }
`;

export const DivCardDash = styled.div`
  width: 100%;
  min-width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;
