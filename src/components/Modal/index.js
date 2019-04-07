import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Creators as ModalActions } from "../../store/ducks/modal";
import { Creators as UserActions } from "../../store/ducks/users";

import { Container } from "./styles";

class Modal extends Component {
  state = {
    userInput: ""
  };

  handleAddUser = e => {
    e.preventDefault();

    this.props.addUserRequest(this.state.userInput);

    this.setState({ userInput: "" });
  };
  render() {
    return (
      <Container>
        <h4>Adicionar novo usuário</h4>
        <form onSubmit={this.handleAddUser}>
          <input
            type="text"
            name="username"
            placeholder="Digite o nome do usuário"
            value={this.state.userInput}
            onChange={e => this.setState({ userInput: e.target.value })}
          />
          <button type="button" onClick={() => this.props.onCloseModal(false)}>
            Cancelar
          </button>
          <button type="submit">Adicionar usuário</button>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  open: state.modal.open
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({}, UserActions, ModalActions), dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
