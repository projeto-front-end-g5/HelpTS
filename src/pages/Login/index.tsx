import { ImHome } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import BackgroundTSParticles from '../../components/BackgroundTSParticles';
import FormLogin from '../../components/FormLogin';
import LogoRegisterLogin from '../../components/LogoRegisterLogin';
import { ContainerPageRegister, DivPageRegister } from '../Register/style';
import { BtnHomeLogoHelpTSContainer } from './style';

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackgroundTSParticles />
      <ContainerPageRegister>
        <DivPageRegister>
          <BtnHomeLogoHelpTSContainer>
            <div className='btn--home--container'>
              <button onClick={() => navigate('/dashboard')} type='button'>
                <ImHome />
              </button>
            </div>
            <div className='logo--pageRegister'>
              <LogoRegisterLogin />
            </div>
          </BtnHomeLogoHelpTSContainer>

          <div className='container--formRegister'>
            <FormLogin />
          </div>
        </DivPageRegister>
      </ContainerPageRegister>
    </>
  );
};

export default Login;
