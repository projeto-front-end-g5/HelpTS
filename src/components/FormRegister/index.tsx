import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formRegisterSchema } from '../../validator/schema';
import { useRegisterContext } from '../../contexts/register/register';

import { FormReg } from './style';

interface IFormRegister {
  name: string;
  email: string;
  contact: string;
  github: string;
  password: string;
  passwordConfirm: string;
}

const FormRegister = () => {
  const { submitFormRegister } = useRegisterContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>({
    resolver: yupResolver(formRegisterSchema),
  });

  return (
    <FormReg onSubmit={handleSubmit(submitFormRegister)}>
      <label className='label--register'>
        Nome
        <input
          className='input--register'
          type='text'
          placeholder='Nome'
          {...register('name')}
        />
        {errors.name && <p>{errors.name?.message}</p>}
      </label>
      <label className='label--register'>
        Email
        <input
          className='input--register'
          type='text'
          placeholder='Email'
          {...register('email')}
        />
        {errors.email && <p>{errors.email?.message}</p>}
      </label>
      <label className='label--register'>
        Telefone
        <input
          className='input--register'
          type='text'
          placeholder='Telefone'
          {...register('contact')}
        />
        {errors.contact && <p>{errors.contact?.message}</p>}
      </label>
      <label className='label--register'>
        GitHub
        <input
          className='input--register'
          type='text'
          placeholder='GitHub'
          {...register('github')}
        />
        {errors.github && <p>{errors.github?.message}</p>}
      </label>
      <label className='label--register'>
        Senha
        <input
          className='input--register'
          type='password'
          placeholder='Senha'
          {...register('password')}
        />
        {errors.password && <p>{errors.password?.message}</p>}
      </label>
      <label className='label--register'>
        Confirmar senha
        <input
          className='input--register'
          type='password'
          placeholder='Confirme sua senha'
          {...register('passwordConfirm')}
        />
        {errors.passwordConfirm && <p>{errors.passwordConfirm?.message}</p>}
      </label>
      <button className='btn--register' type='submit'>
        Cadastrar
      </button>
    </FormReg>
  );
};

export default FormRegister;
