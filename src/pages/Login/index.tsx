import FormLogin from '../../components/FormLogin';
import LogoRegisterLogin from '../../components/LogoRegisterLogin';
import { ContainerPageRegister, DivPageRegister } from '../Register/style';

const Login = () => (
  <ContainerPageRegister>
    <DivPageRegister>
      <div className='logo--pageRegister'>
        <LogoRegisterLogin />
      </div>
      <div className='container--formRegister'>
        <FormLogin />
      </div>
    </DivPageRegister>
  </ContainerPageRegister>
);

export default Login;
