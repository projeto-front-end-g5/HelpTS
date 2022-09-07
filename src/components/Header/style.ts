import { ReactNode } from 'react';
import styled from 'styled-components';

interface IHeaderContainer {
  children: ReactNode;
  backGroundColorHeader: string;
  backGroundColorDark: string;
  theme: string;
}

export const HeaderContainer = styled.header<IHeaderContainer>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4rem;

  /*  background-color: ${({
    theme,
    backGroundColorDark,
    backGroundColorHeader,
  }) => (theme === 'light' ? backGroundColorHeader : backGroundColorDark)}; */

  h1 {
    font-family: 'ubuntu';
    font-style: normal;

    font-weight: 500;
    font-size: 1.125rem;
    letter-spacing: -0.1125rem;
    text-shadow: 0 0.0625rem 0 var(--blue-dark);

    margin-left: 1rem;
    color: var(--blue);

    @media (min-width: 320px) {
      font-size: 1.375rem;
    }

    @media (min-width: 600px) {
      font-size: 1.375rem;
    }

    @media (min-width: 1200px) {
      font-size: 1.5625rem;
    }
  }

  span {
    font-weight: 900;
  }

  .DarkMode-ImgUser-Logout {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 42%;

    margin-right: 1.4375rem;

    @media (min-width: 375px) {
      width: 38%;
    }

    @media (min-width: 420px) {
      width: 31%;
    }

    @media (min-width: 500px) {
      width: 27%;
    }

    @media (min-width: 600px) {
      width: 23%;
    }

    @media (min-width: 700px) {
      width: 20%;
    }

    @media (min-width: 768px) {
      width: 18%;
    }

    @media (min-width: 980px) {
      width: 15%;
    }

    @media (min-width: 1200px) {
      width: 18%;
    }

    @media (min-width: 1700px) {
      width: 12%;
    }
  }

  .DarkMode-Logout {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-right: 1.4375rem;

    width: 32%;

    @media (min-width: 375px) {
      width: 27%;
    }

    @media (min-width: 420px) {
      width: 24%;
    }

    @media (min-width: 500px) {
      width: 20%;
    }

    @media (min-width: 600px) {
      width: 18%;
    }

    @media (min-width: 700px) {
      width: 16%;
    }

    @media (min-width: 768px) {
      width: 13%;
    }

    @media (min-width: 980px) {
      width: 10%;
    }

    @media (min-width: 1200px) {
      width: 12%;
    }

    @media (min-width: 1700px) {
      width: 9%;
    }
  }
`;

export const DarkModeImgUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 4.0625rem;

  @media (min-width: 1200px) {
    width: 5.625rem;
  }
`;

export const DarkModeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DarkModeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.375rem;

  width: 1.875rem;
  height: 1.875rem;

  border-radius: 50%;
  border: none;

  background-color: var(--blue-dark);
  color: var(--yellow);

  @media (min-width: 1200px) {
    width: 2.5rem;
    height: 2.5rem;

    font-size: 1.5625rem;
  }

  :hover {
    cursor: pointer;
  }
`;

export const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.875rem;
  height: 1.875rem;

  border-radius: 50%;

  background-color: var(--white);

  @media (min-width: 1200px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  :hover {
    cursor: pointer;
  }
`;

export const ButtonLogout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'tajawal';
  font-style: normal;
  font-weight: 600;
  font-size: 0.8125rem;

  width: 3.75rem;
  height: 1.875rem;

  border: none;
  border-radius: 8px;

  background-color: var(--grey-light);

  @media (min-width: 1200px) {
    width: 5.625rem;
    height: 2.5rem;

    font-size: 1rem;
  }

  :hover {
    cursor: pointer;
  }
`;
