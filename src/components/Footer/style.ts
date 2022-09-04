import styled from 'styled-components';

export const FootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'ubuntu';
  font-style: normal;

  width: 100%;

  background-color: var(--blue);

  position: relative;
  bottom: 0;
  left: 0;
  right: 0;

  .div-one {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 11px;

    width: 100%;
    min-height: 30px;

    background-color: var(--grey-card);

    @media (min-width: 500px) {
      min-height: 40px;
      font-size: 13px;
    }

    @media (min-width: 1000px) {
      min-height: 50px;
      font-size: 16px;
    }
  }

  .div-two {
    display: flex;
    flex-direction: column;

    font-family: 'tajawal';

    width: 90%;

    color: var(--white);

    @media (min-width: 600px) {
      flex-direction: row;
      align-items: center;

      height: 200px;
    }

    .divSection {
      display: flex;
      flex-direction: column;

      width: 100%;

      h2 {
        font-weight: 800;
      }

      @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
      }

      @media (min-width: 1000px) {
        h2 {
          font-size: 20px;
        }
      }
    }

    .section-one {
      margin-top: 10px;

      @media (min-width: 600px) {
        width: 25%;
        margin-top: 0;
      }

      @media (min-width: 1300px) {
        width: 20%;
      }

      .divbottom {
        margin-top: 5px;
        font-size: 10px;

        .text {
          font-size: 12px;

          @media (min-width: 1000px) {
            font-size: 14px;
          }

          @media (min-width: 1200px) {
            font-size: 16px;
          }
        }

        @media (min-width: 600px) {
          margin-top: 10px;
        }
      }
    }

    .section-two {
      margin-top: 5px;

      .divbottom h3 {
        display: flex;
        align-items: center;
      }

      .divbottom ul {
        margin-top: 10px;
      }

      .divbottom ul li {
        display: flex;
      }

      .divbottom ul li h3 {
        font-size: 14px;

        @media (min-width: 1000px) {
          font-size: 16px;
        }
      }

      .icon {
        color: var(--white);
        margin-right: 5px;

        @media (min-width: 1000px) {
          font-size: 22px;
        }
      }

      @media (min-width: 500px) {
        flex-direction: column;
        display: flex;
      }

      @media (min-width: 600px) {
        margin-top: 0;
      }
    }

    .section-three {
      margin-top: 5px;

      .divbottom ul {
        display: flex;

        margin-top: 5px;
      }

      .dev-photos {
        width: 40px;
        height: 40px;

        @media (min-width: 1000px) {
          width: 50px;
          height: 50px;
        }

        @media (min-width: 1700px) {
          width: 60px;
          height: 60px;
        }

        @media (min-width: 1900px) {
          width: 70px;
          height: 70px;
        }
      }

      @media (min-width: 600px) {
        margin-top: 0;

        .divbottom {
          margin-top: 10px;
        }
      }
    }
  }
`;
