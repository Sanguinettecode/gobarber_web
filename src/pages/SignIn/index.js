import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo.svg';
import { authRequest } from '~/store/modules/Auth/actions';

export default function SignIn() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Este precisa ser um email válido')
      .required('O campo email é obrigatório'),
    password: Yup.string().required('A senha é muito importante'),
  });

  const dispatch = useDispatch();
  const loadign = useSelector(state => state.auth.loadign);
  function handleSubmit({ email, password }) {
    dispatch(authRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu email" />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <button type="submit"> {loadign ? 'Carregando...' : 'Entrar'}</button>
        <Link to="/register">Criar conta agora</Link>
      </Form>
    </>
  );
}
