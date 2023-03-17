import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formRegisterSchema } from '../../validator/schema';
import { useRegisterContext } from '../../contexts/register/register';
import { FormReg, LabelErrors } from './style';

interface IFormRegister {
  name: string;
  email: string;
  contact: string;
  github: string;
  password: string;
  passwordConfirm: string;
}

const FormRegister = () => {
  const { submitRegister } = useRegisterContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>({
    resolver: yupResolver(formRegisterSchema),
  });

  return (
    <FormReg onSubmit={handleSubmit(submitRegister)}>
      <LabelErrors>
        <label htmlFor='name' className='label--register'>
          Nome
        </label>
        <p>{errors.name?.message}</p>
      </LabelErrors>
      <input
        id='name'
        className='input--register'
        type='text'
        placeholder='Nome'
        {...register('name')}
      />
      <LabelErrors>
        <label htmlFor='email' className='label--register'>
          Email
        </label>
        <p>{errors.email?.message}</p>
      </LabelErrors>
      <input
        id='email'
        className='input--register'
        type='text'
        placeholder='Email'
        {...register('email')}
      />
      <LabelErrors>
        <label htmlFor='contact' className='label--register'>
          Telefone
        </label>
        <p>{errors.contact?.message}</p>
      </LabelErrors>
      <input
        id='contact'
        className='input--register'
        type='text'
        placeholder='Telefone'
        {...register('contact')}
      />
      <LabelErrors>
        <label htmlFor='github' className='label--register'>
          GitHub
        </label>
        <p>{errors.github?.message}</p>
      </LabelErrors>
      <input
        id='github'
        className='input--register'
        type='text'
        placeholder='GitHub'
        {...register('github')}
      />
      <LabelErrors>
        <label htmlFor='password' className='label--register'>
          Senha
        </label>
        <p>{errors.password?.message}</p>
      </LabelErrors>
      <input
        id='password'
        className='input--register'
        type='password'
        placeholder='Senha'
        {...register('password')}
      />
      <LabelErrors>
        <label htmlFor='passwordConfirm' className='label--register'>
          Confirmar senha
        </label>
        <p>{errors.passwordConfirm?.message}</p>
      </LabelErrors>
      <input
        id='passwordConfirm'
        className='input--register'
        type='password'
        placeholder='Confirme sua senha'
        {...register('passwordConfirm')}
      />

      <button className='btn--register' type='submit'>
        Cadastrar
      </button>
    </FormReg>
  );
};

export default FormRegister;
