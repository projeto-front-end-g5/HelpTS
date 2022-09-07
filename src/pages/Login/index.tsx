import { motion } from 'framer-motion';
import { ImHome } from 'react-icons/im';
import { Link } from 'react-router-dom';
import BackgroundTSParticles from '../../components/BackgroundTSParticles';
import FormLogin from '../../components/FormLogin';
import LogoRegisterLogin from '../../components/LogoRegisterLogin';
import { ContainerPageRegister, DivPageRegister } from '../Register/style';
import { BtnHomeLogoHelpTSContainer } from './style';

const Login = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <BackgroundTSParticles />
    <ContainerPageRegister>
      <DivPageRegister>
        <BtnHomeLogoHelpTSContainer>
          <div className='btn--home--container'>
            <button type='button'>
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
  </motion.div>
);

export default Login;
