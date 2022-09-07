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

  .aparece {
    display: flex;
  }

  .desaparece {
    display: none;
  }

  .codearea {
    height: 80px;
  }

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
    font-size: 1rem;
    gap: 0.2rem;
    font-weight: 700;

    p {
      color: #9b2226;
      font-size: 0.75rem;
    }
  }

  .label--select {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    gap: 0.2rem;
    font-weight: 700;

    p {
      color: #9b2226;
      font-size: 0.75rem;
    }

    #tag {
      border: 0.5px solid var(--blue);
      border-radius: 3px;
      background-color: var(--grey-card);
      padding: 0.35rem;
      color: var(--blue-dark);

      :focus {
        outline: 1px solid var(--blue-dark);
      }

      option {
        font-family: 'Ubuntu';
        color: var(--blue-dark);
      }
    }
  }

  .input--newPost {
    border: 0.5px solid var(--blue);
    border-radius: 3px;
    background-color: var(--grey-card);
    padding: 0.35rem;
    color: var(--blue-dark);

    :focus {
      outline: 1px solid var(--blue-dark);
    }
  }

  .input--newText {
    background-color: var(--grey-card);
    border: none;
    padding: 0.35rem;
    color: var(--blue-dark);

    :focus {
      outline: none;
    }
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
    padding: 6px;
    border-radius: 7px;
    background-color: var(--blue-dark);
    color: var(--white);
    border: none;
    font-family: ubuntu;
    font-size: 0.7rem;
    cursor: pointer;

    :hover {
      opacity: 0.8;
      transition: 0.5s;
    }
  }

  .divIcon--newPost {
    margin-top: 0.5rem;
  }

  .plane--newPost {
    background: transparent;
    border: none;
    color: var(--blue-dark);
    padding: 5px;
    font-size: 1rem;

    :hover {
      opacity: 0.8;
      transition: 0.5s;
    }
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

  .div--iconCode {
    border: none;
    position: relative;
  }

  .icon--code {
    color: var(--blue-dark);
    position: absolute;
    font-size: 1rem;
    right: 4px;
    top: 4px;
    cursor: pointer;
  }

  .icon--code2 {
    color: var(--white);
    position: absolute;
    font-size: 1rem;
    right: 4px;
    top: 4px;
    cursor: pointer;
  }
`;
