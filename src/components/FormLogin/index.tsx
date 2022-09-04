import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { formLoginSchema } from '../../validator/schema';
import { useLoginContext } from '../../contexts/login/login';

import { ContainerFormLogin, FormLogin as Form } from './style';

interface IUserLogin {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { openEye, submitLogin, typeInput, changeStateOpenEyes } =
    useLoginContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(formLoginSchema),
  });

  return (
    <ContainerFormLogin>
      <Form onSubmit={handleSubmit(submitLogin)}>
        <label htmlFor='email'>Email </label>
        <input
          className='email--login'
          id='email'
          type='text'
          placeholder='Email'
          {...register('email')}
        />
        {errors && <p>{errors.email?.message}</p>}
        <label htmlFor='password'>Senha</label>
        <span className='ContainerPassword'>
          <input
            className='input--password'
            id='password'
            type={typeInput}
            placeholder='Senha'
            {...register('password')}
          />
          <button
            className='btn--password'
            type='button'
            onClick={() => changeStateOpenEyes()}
          >
            {openEye ? (
              <FaEye className='iconLogin' />
            ) : (
              <FaEyeSlash className='iconLogin' />
            )}
          </button>
        </span>
        {errors && <p>{errors.password?.message}</p>}
        <button className='btn--login' type='submit'>
          Entrar
        </button>
      </Form>
      <div className='ContainerLinkResgister'>
        <p className='textlink--login'>
          Não possui cadastro? Registre-se{' '}
          <Link className='clique' to='/register'>
            aqui!
          </Link>
        </p>
      </div>
    </ContainerFormLogin>
  );
};

export default FormLogin;
