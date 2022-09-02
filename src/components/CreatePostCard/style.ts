import styled from 'styled-components';

export const ContainerCreatePost = styled.div`
  width: 80%;
  height: fit-content;
  background-color: var(--grey-card);
  margin-top: 0.9375rem;
  border-radius: 0.375rem;
  border: 0.125rem solid var(--blue);
  font-family: 'Tajawal';
  padding: 0.75rem;

  .divInput--newpost {
    margin-top: 1rem;
    font-family: 'Tajawal';
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    color: var(--blue);
  }

  .divInput--newpost .label--newPost {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    gap: 0.2rem;
    font-weight: 700;
  }

  .input--newPost {
    border: 0.5px solid var(--blue);
    border-radius: 3px;
    background-color: var(--grey-card);
    padding: 0.2rem;
  }

  .input--newPost:focus {
    outline: none;
  }

  .footer--newPost {
    display: flex;
    justify-content: space-between;
  }

  .divbtn--newPost {
    margin-top: 0.5rem;
    display: flex;
    gap: 0.3rem;
  }

  .btn--newPost {
    padding: 0.2rem;
    border-radius: 7px;
    background-color: var(--blue-dark);
    color: var(--white);
    border: none;
    font-family: ubuntu;
    font-size: 0.6rem;
  }

  .divIcon--newPost {
    margin-top: 0.5rem;
  }

  .plane--newPost {
    background: transparent;
    border: none;
    color: var(--blue-dark);
    padding: 5px;
  }

  .div--icon textarea {
    border: none;
    resize: none;
    width: 95%;
    height: 80%;
  }

  .div--icon {
    position: relative;
    border: 0.5px solid var(--blue);
    border-radius: 5px;
    height: 4rem;
    padding: 3px;
  }

  .icon--code {
    color: var(--blue-dark);
    position: absolute;
    right: 4px;
    top: 4px;
    cursor: pointer;
  }
`;
