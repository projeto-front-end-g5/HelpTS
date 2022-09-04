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

function Header() {
  const { darkMode, user, DarkLight, UserExists } = useDashboardContext();

  return (
    <HeaderContainer>
      <h1>
        Help<span>TS</span>
      </h1>

      {user ? (
        <div className='DarkMode-ImgUser-Logout'>
          <DarkModeImgUserContainer>
            <DarkModeButton onClick={() => DarkLight()}>
              {darkMode ? <BiSun /> : <MdOutlineDarkMode />}
            </DarkModeButton>
            <UserImage>
              <img alt='' />
            </UserImage>
          </DarkModeImgUserContainer>
          <ButtonLogout type='submit' onClick={() => UserExists()}>
            {user ? 'Logout' : 'Login'}
          </ButtonLogout>
        </div>
      ) : (
        <div className='DarkMode-Logout'>
          <DarkModeContainer>
            <DarkModeButton onClick={() => DarkLight()}>
              {darkMode ? <BiSun /> : <MdOutlineDarkMode />}
            </DarkModeButton>
          </DarkModeContainer>
          <ButtonLogout type='submit' onClick={() => UserExists()}>
            {user ? 'Logout' : 'Login'}
          </ButtonLogout>
        </div>
      )}
    </HeaderContainer>
  );
}
export default Header;


