/* import { Link } from 'react-router-dom'; */
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { formLoginSchema } from '../../validator/schema';
import { useLoginContext } from '../../contexts/login/login';

import { ContainerFormLogin, FormLogin as Form } from './style';

interface IUserLogin {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { openEye, submitLogin } = useLoginContext();

  const { register, handleSubmit } = useForm<IUserLogin>({
    resolver: yupResolver(formLoginSchema),
  });

  return (
    <ContainerFormLogin>
      <Form onSubmit={handleSubmit(submitLogin)}>
        <label htmlFor='email'>Email </label>
        <input
          id='email'
          type='text'
          placeholder='Email'
          {...register('email')}
        />
        <label htmlFor='password'>Senha</label>
        <span className='ContainerPassword'>
          <input
            id='password'
            type='password'
            placeholder='Senha'
            {...register('password')}
          />
          <button type='button' onClick={() => submitLogin}>
            {openEye ? <FaEye /> : <FaEyeSlash />}
          </button>
        </span>
        <button type='submit'>Entrar</button>
      </Form>
      <div className='ContainerLinkResgister'>
        <p>Não possui cadastro? Registre-se aqui!</p>
      </div>
    </ContainerFormLogin>
  );
};

export default FormLogin;
