import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo.svg';
import { signUpRequest } from '~/store/modules/Auth/actions';

export default function SignUn() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Insira um nome válido'),
    email: Yup.string()
      .email('Este precisa ser um email válido')
      .required('O campo email é obrigatório'),
    password: Yup.string()
      .min(6, 'A senha precisa ter 6 ou mais digitos')
      .required('A senha é muito importante'),
  });

  const dispatch = useDispatch();

  function handlerSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handlerSubmit}>
        <Input name="name" type="text" placeholder="Digite seu Nome" />
        <Input name="email" type="email" placeholder="Digite seu Email" />
        <Input name="password" type="password" placeholder="Digite sua Senha" />
        <button type="submit"> Criar Conta</button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
