import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 0rem;
  height: 14rem;

  .div-one {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    border: none;
    background-color: var(--grey-card);

    > h1 {
      color: var(--blue-dark);
      font-size: 0.85rem;
      font-family: 'Ubuntu';
    }
  }

  .div-two {
    display: flex;
    align-items: center;
    height: 11.5rem;
    background-color: var(--blue);
    justify-content: space-around;
  }

  .section-one {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 28%;
    height: 100%;
  }

  .section-two {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 28%;
    height: 100%;

    > ul {
      > li {
        display: flex;
        > a > img {
          width: 1.25rem;
          color: var(--grey-light);
        }
      }
    }
  }

  .section-three {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 28%;
    height: 100%;

    > ul {
      display: flex;
      > li {
      }
    }
  }
  color: (--black);

  .title {
    color: var(--grey-light);
    font-size: 1.25rem;
    font-weight: 600;
    font-family: 'Ubuntu';
  }
  .text {
    color: var(--grey-light);
    font-size: 0.8rem;
    font-family: 'Ubuntu';
  }

  .icon {
    font-size: 1.2rem;
    border: none;
    color: var(--grey-light);
  }
  .dev-photos {
    width: 3.5rem;
    color: var(--grey-light);
  }

  .divTitle {
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .divbottom {
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .ulPhotos {
    display: flex;
  }
  .liLinks {
    display: flex;
  }
  @media (max-width: 610px) {
    .div-two {
      width: 100%;
      height: auto;
      flex-direction: column;
    }

    .ulPhotos {
      flex-wrap: wrap;
    }
    .section-one {
      width: 90%;
    }
    .section-two {
      width: 90%;
    }
    .section-three {
      width: 90%;
    }
    .divTitle {
      width: 100%;
    }
    .divbottom {
      width: 100%;
    }
    .title {
      font-size: 1rem;
    }
    .text {
      font-size: 0.6rem;
    }
    .dev-photos {
      width: 2.5rem;
    }
  }
  @media (max-width: 940px) {
    .ulPhotos {
      flex-wrap: wrap;
    }
  }
`;
