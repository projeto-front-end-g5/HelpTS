import BackgroundTSParticles from '../../components/BackgroundTSParticles';
import FormRegister from '../../components/FormRegister';
import LogoRegisterLogin from '../../components/LogoRegisterLogin';
import { ContainerPageRegister, DivPageRegister } from './style';

const Register = () => (
  <>
    <BackgroundTSParticles />
    <ContainerPageRegister>
      <DivPageRegister>
        <div className='logo--pageRegister'>
          <LogoRegisterLogin />
        </div>
        <div className='container--formRegister'>
          <h3 className='title--formRegister'>Falta pouco</h3>
          <p className='text--formRegister'>
            pra você fazer parte da comunidade
          </p>
          <FormRegister />
        </div>
      </DivPageRegister>
    </ContainerPageRegister>
  </>
);

export default Register;
