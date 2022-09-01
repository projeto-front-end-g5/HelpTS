import * as yup from 'yup';

export const formLoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um email válido!')
    .required('Email obrigatório!'),
  password: yup
    .string()
    .required('Senha obrigatória!')
    .matches(
      /(^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$ %^&*_-])).{8,}$/,
      'Necessário ter no mínimo 8 digítos, 1 letra maiuscúla, 1 minuscúla, 1 número e 1 caracter especial!'
    ),
});

export const formRegisterSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório!'),
  email: yup.string().email('Insira um email válido!').required(),
  contact: yup
    .string()
    .required()
    .matches(
      /\([1-9]{2}\)9[1-9]\d{4}/,
      'Insira um DDD sem parenteses e um número com 11 digítos sem espaços ou traço!'
    ),
  github: yup.string().required('Necessário inserir a URL!'),
  password: yup
    .string()
    .required('Senha obrigatória!')
    .matches(
      /(^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$ %^&*_-])).{8,}$/,
      'Necessário ter no mínimo 8 digítos, 1 letra maiuscúla, 1 minuscúla, 1 número e 1 caracter especial!'
    ),
  passwordConfirm: yup
    .string()
    .required('Confirmação de senha obrigatória!')
    .oneOf([yup.ref('password')], 'Confirmação deve ser igual a senha!'),
});
