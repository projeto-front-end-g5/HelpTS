import * as yup from 'yup';

export const formLoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um email válido!')
    .required('Email obrigatório!'),
  password: yup
    .string()
    .required('Senha obrigatória!')
    .min(8, 'No mínimo 8 digitos')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      'Necessário ter 1 letra maiuscúla, 1 minuscúla, 1 número e 1 caracter especial!'
    ),
});

export const formRegisterSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório!'),
  email: yup
    .string()
    .email('Insira um email válido!')
    .required('Email obrigatório!'),
  contact: yup
    .string()
    .required('Contato obrigatório!')
    .min(11, 'Número com 11 digitos')
    .matches(
      /[1-9]{2}9[1-9]\d{4}/,
      'Insira um DDD sem parenteses e um número com 9 digitos sem espaços ou traço!'
    ),
  github: yup.string().required('Necessário inserir a URL!'),
  password: yup
    .string()
    .required('Senha obrigatória!')
    .min(8, 'No mínimo 8 digitos')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      'Necessário ter 1 letra maiuscúla, 1 minuscúla, 1 número e 1 caracter especial!'
    ),
  passwordConfirm: yup
    .string()
    .required('Confirmação de senha obrigatória!')
    .oneOf([yup.ref('password')], 'Confirmação deve ser igual a senha!'),
});