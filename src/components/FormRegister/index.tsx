import { FormReg } from './style';

const FormRegister = () => (
  <FormReg>
    <label className='label--register'>
      Nome
      <input className='input--register' type='text' />
    </label>
    <label className='label--register'>
      Email
      <input className='input--register' type='text' />
    </label>
    <label className='label--register'>
      Telefone
      <input className='input--register' type='text' />
    </label>
    <label className='label--register'>
      GitHub
      <input className='input--register' type='text' />
    </label>
    <label className='label--register'>
      Senha
      <input className='input--register' type='text' />
    </label>
    <label className='label--register'>
      Confirmar senha
      <input className='input--register' type='text' />
    </label>
    <button className='btn--register' type='submit'>
      Cadastrar
    </button>
  </FormReg>
);

export default FormRegister;