import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import { updateUserRequest } from '~/store/modules/User/actions';
import AvatarInput from './AvatarInput';

export default function Profile() {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateUserRequest(data));
  }
  return (
    <Container>
      <Form initialData={userData} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de email" />
        <hr />
        <Input
          name="oldpassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" placeholder="Nova senha" />
        <Input name="confirmpassword" placeholder="Confirme a nova senha" />
        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="submit">Sair do GoBarber</button>
    </Container>
  );
}
