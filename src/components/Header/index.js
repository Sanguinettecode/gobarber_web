import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/images/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Andre trindade</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/52/abott@adorable.png"
              alt="Andre trindade"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
