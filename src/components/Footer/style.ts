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
        font-size: 12px;
        font-weight: 800;
      }

      @media (min-width: 400px) {
        h2 {
          font-size: 14px;
        }
      }

      @media (min-width: 500px) {
        h2 {
          font-size: 16px;
        }
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

      .divSectionTwoThree {
        display: flex;
        justify-content: space-between;

        margin-top: 10px;
        margin-bottom: 10px;

        width: 100%;

        @media (min-width: 600px) {
          width: 62%;
          margin-top: 0;
          margin-bottom: 0;
        }

        @media (min-width: 700px) {
          width: 60%;
        }

        @media (min-width: 950px) {
          width: 55%;
        }

        @media (min-width: 1000px) {
          width: 60%;
        }

        @media (min-width: 1100px) {
          width: 58%;
        }

        @media (min-width: 1400px) {
          width: 55%;
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

          @media (min-width: 600px) {
            margin-top: 5px;

            font-size: 10px;
          }

          @media (min-width: 700px) {
            font-size: 12px;
          }

          @media (min-width: 1000px) {
            font-size: 16px;
          }
        }
      }
    }

    .section-two {
      margin-top: 5px;

      .divbottom h3 {
        display: flex;
      }

      .divbottom ul {
        margin-top: 4px;
      }

      .divbottom ul li {
        display: flex;
      }

      .divbottom ul li h3 {
        font-size: 12px;

        @media (min-width: 400px) {
          font-size: 14px;
        }

        @media (min-width: 500px) {
          font-size: 16px;
        }

        @media (min-width: 600px) {
          font-size: 12px;
          align-items: center;
        }

        @media (min-width: 700px) {
          font-size: 14px;
        }

        @media (min-width: 1000px) {
          font-size: 16px;
          margin-left: 5px;
        }
      }

      .icon {
        color: var(--white);
        margin-right: 2px;
        :hover {
          box-shadow: 0px 3px 13px 3px rgba(255, 255, 255, 1);
        }

        font-size: 10px;

        @media (min-width: 400px) {
          font-size: 12px;
        }

        @media (min-width: 500px) {
          font-size: 16px;
        }

        @media (min-width: 600px) {
          font-size: 12px;
        }

        @media (min-width: 700px) {
          font-size: 16px;
        }

        @media (min-width: 1000px) {
          font-size: 25px;
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
        width: 100%;
      }

      .divbottom ul li {
        :hover {
          cursor: pointer;
          .tooltip {
            visibility: visible;
          }
        }
      }

      .tooltip {
        visibility: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        z-index: 999;

        font-size: 8px;
        font-weight: 600;

        width: fit-content;

        @media (min-width: 400px) {
          font-size: 10px;
        }

        @media (min-width: 400px) {
          font-size: 11px;
        }

        @media (min-width: 500px) {
          font-size: 12px;
        }

        @media (min-width: 900px) {
          font-size: 14px;
        }
      }

      .tooltipDev {
        position: absolute;
        left: 100%;
        top: 0;
        margin-top: 10px;

        transform: translateX(-50%);
        background-color: var(--yellow);
        color: var(--blue);
        white-space: nowrap;
        padding: 5px 10px;
        border-radius: 5px;

        @media (min-width: 600px) {
          ::before {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 95%;
            transform: translateX(-50%);
            border: 6px solid;
            border-color: #0000 #0000 var(--yellow) #0000;
          }
        }

        @media (min-width: 600px) {
          margin-left: 12px;
        }

        @media (min-width: 700px) {
          margin-left: 15px;
        }

        @media (min-width: 800px) {
          margin-left: 18px;
        }

        @media (min-width: 1000px) {
          margin-left: 22px;
        }

        @media (min-width: 1700px) {
          margin-left: 30px;
        }

        @media (min-width: 1900px) {
          margin-left: 35px;
        }
      }

      .dev-photos {
        width: 27px;
        height: 27px;

        @media (min-width: 400px) {
          width: 35px;
          height: 35px;
        }

        @media (min-width: 500px) {
          width: 40px;
          height: 40px;
        }

        @media (min-width: 600px) {
          width: 35px;
          height: 35px;
        }

        @media (min-width: 700px) {
          width: 40px;
          height: 40px;
        }

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
      }
    }
  }
`;
