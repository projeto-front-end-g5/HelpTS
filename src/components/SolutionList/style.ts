import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Ubuntu';
  color: var(--blue-dark);
  font-weight: 600;
`;

export const ContainerNotFound = styled.div`
  font-family: 'Ubuntu';
  color: var(--blue-dark);
  font-weight: 600;
  min-height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
