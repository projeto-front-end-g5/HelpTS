import { MdOutlineDarkMode } from 'react-icons/md';
import { BiSun } from 'react-icons/bi';

import {
  ButtonLogout,
  DarkModeButton,
  DarkModeContainer,
  DarkModeImgUserContainer,
  HeaderContainer,
  UserImage,
} from './style';
import { useDashboardContext } from '../../contexts/dashboard/dashboard';
import { useLoginContext } from '../../contexts/login/login';

function Header() {
  const { darkMode, DarkLight, navigate } = useDashboardContext();
  const { token } = useLoginContext();

  return (
    <HeaderContainer>
      <h1>
        Help<span>TS</span>
      </h1>

      {token ? (
        <div className='DarkMode-ImgUser-Logout'>
          <DarkModeImgUserContainer>
            <DarkModeButton onClick={() => DarkLight()}>
              {darkMode ? <BiSun /> : <MdOutlineDarkMode />}
            </DarkModeButton>
            <UserImage>
              <img alt='' />
            </UserImage>
          </DarkModeImgUserContainer>
          <ButtonLogout
            type='submit'
            onClick={() => {
              window.localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </ButtonLogout>
        </div>
      ) : (
        <div className='DarkMode-Logout'>
          <DarkModeContainer>
            <DarkModeButton onClick={() => DarkLight()}>
              {darkMode ? <BiSun /> : <MdOutlineDarkMode />}
            </DarkModeButton>
          </DarkModeContainer>
          <ButtonLogout type='submit' onClick={() => navigate('/login')}>
            Login
          </ButtonLogout>
        </div>
      )}
    </HeaderContainer>
  );
}
export default Header;
