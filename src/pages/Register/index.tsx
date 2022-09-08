import { motion } from 'framer-motion';
import { ImHome } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

import BackgroundTSParticles from '../../components/BackgroundTSParticles';
import FormRegister from '../../components/FormRegister';
import LogoRegisterLogin from '../../components/LogoRegisterLogin';
import { ContainerPageRegister, DivPageRegister } from './style';

const Register = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundTSParticles />
      <ContainerPageRegister>
        <DivPageRegister>
          <div className='logo--btnHome-container'>
            <div className='btn--home'>
              <button onClick={() => navigate('/dashboard')} type='button'>
                <ImHome />
              </button>
            </div>
            <div className='logo--pageRegister'>
              <LogoRegisterLogin />
            </div>
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
    </motion.div>
  );
};

export default Register;
