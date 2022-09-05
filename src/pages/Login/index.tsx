import { ImHome } from 'react-icons/im';
import BackgroundTSParticles from '../../components/BackgroundTSParticles';
import FormLogin from '../../components/FormLogin';
import LogoRegisterLogin from '../../components/LogoRegisterLogin';
import { ContainerPageRegister, DivPageRegister } from '../Register/style';

const Login = () => (
  <>
    <BackgroundTSParticles />
    <ContainerPageRegister>
      <DivPageRegister>
        <button className='btn--home' type='button'>
          <ImHome />
        </button>
        <div className='logo--pageRegister'>
          <LogoRegisterLogin />
        </div>
        <div className='container--formRegister'>
          <FormLogin />
        </div>
      </DivPageRegister>
    </ContainerPageRegister>
  </>
);

export default Login;
