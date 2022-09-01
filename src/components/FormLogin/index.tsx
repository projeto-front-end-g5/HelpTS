/* import { Link } from 'react-router-dom'; */
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ContainerFormLogin, FormLogin as Form } from './style';

const FormLogin = () => {
  const [openEye, setOpenEye] = useState(false);

  <ContainerFormLogin>
    <Form>
      <label htmlFor='email'>Email </label>
      <input id='email' type='text' placeholder='Email' />
      <label htmlFor='password'>Senha</label>
      <span className='ContainerPassword'>
        <input id='password' type='password' placeholder='Senha' />
        <button type='button'>{openEye ? <FaEye /> : <FaEyeSlash />}</button>
      </span>
      <button type='submit'>Entrar</button>
    </Form>
    <div className='ContainerLinkResgister'>
      <p>Não possui cadastro? Registre-se aqui!</p>
    </div>
  </ContainerFormLogin>;
};

export default FormLogin;
