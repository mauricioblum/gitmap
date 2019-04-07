import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Creators as ModalActions } from "../../store/ducks/modal";

import { Container } from "./styles";

const Modal = props => (
  <Container>
    <h4>Adicionar novo usuário</h4>
    <form>
      <input
        type="text"
        name="username"
        placeholder="Digite o nome do usuário"
      />
      <button type="button" onClick={() => props.onCloseModal(false)}>
        Cancelar
      </button>
      <button type="button">Adicionar usuário</button>
    </form>
  </Container>
);

const mapStateToProps = state => ({
  open: state.modal.open
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
