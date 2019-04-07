import React from 'react';

import { Container } from './styles';

const Modal = () => (
  <Container>
    <h4>Adicionar novo usuário</h4>
    <form>
      <input type="text" name="username" placeholder="Digite o nome do usuário" />
      <button type="button">Cancelar</button>
      <button type="button">Adicionar usuário</button>
    </form>
  </Container>
);

export default Modal;
