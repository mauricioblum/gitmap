import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Creators as ModalActions } from "../../store/ducks/modal";
import { Creators as UserActions } from "../../store/ducks/users";

import { Container } from "./styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Modal extends Component {
  state = {
    userInput: ""
  };

  handleAddUser = e => {
    e.preventDefault();

    this.props.addUserRequest(this.state.userInput, this.props.coords);
    if (!!this.props.users.error) {
      toast.error(this.props.users.error);
    } else {
      this.props.onCloseModal();
    }

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
        <ToastContainer />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  open: state.modal.open,
  coords: state.modal.coords,
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({}, UserActions, ModalActions), dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
