import { MdOutlineDarkMode } from 'react-icons/md';
import { BiSun } from 'react-icons/bi';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
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
  const {
    darkMode,
    navigate,
    changeTheme,
    backGroundColorHeader,
    backGroundColorDark,
    currentTheme,
  } = useDashboardContext();
  const { token } = useLoginContext();

  const username = localStorage.getItem('userName');

  return (
    <HeaderContainer
      theme={currentTheme}
      backGroundColorHeader={backGroundColorHeader}
      backGroundColorDark={backGroundColorDark}
    >
      <h1>
        Help<span>TS</span>
      </h1>

      {token ? (
        <div className='DarkMode-ImgUser-Logout'>
          <DarkModeImgUserContainer>
            <DarkModeButton onClick={() => changeTheme()}>
              {darkMode ? <BiSun /> : <MdOutlineDarkMode />}
            </DarkModeButton>
            <UserImage>
              <Avatar sx={{ width: 32, height: 32, bgcolor: deepOrange[500] }}>
                {username && username[0]}
              </Avatar>
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
            <DarkModeButton onClick={() => changeTheme()}>
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
