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
  confirmPassword: string;
}

const FormRegister = () => {
  const { submitFormRegister } = useRegisterContext();
  const { register, handleSubmit } = useForm<IFormRegister>({
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
      </label>
      <label className='label--register'>
        Email
        <input
          className='input--register'
          type='text'
          placeholder='Email'
          {...register('email')}
        />
      </label>
      <label className='label--register'>
        Telefone
        <input
          className='input--register'
          type='text'
          placeholder='Telefone'
          {...register('contact')}
        />
      </label>
      <label className='label--register'>
        GitHub
        <input
          className='input--register'
          type='text'
          placeholder='GitHub'
          {...register('github')}
        />
      </label>
      <label className='label--register'>
        Senha
        <input
          className='input--register'
          type='text'
          placeholder='Senha'
          {...register('password')}
        />
      </label>
      <label className='label--register'>
        Confirmar senha
        <input
          className='input--register'
          type='text'
          placeholder='Confirme sua senha'
          {...register('confirmPassword')}
        />
      </label>
      <button className='btn--register' type='submit'>
        Cadastrar
      </button>
    </FormReg>
  );
};

export default FormRegister;
