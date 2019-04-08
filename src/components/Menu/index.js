import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.min.css";

import { Creators as UserActions } from "../../store/ducks/users";

import { Container, List, Dev, Avatar, Name, Username } from "./styles";

const Menu = props => (
  <Container>
    <List>
      {props.users.data.map(user => (
        <Dev key={user.id}>
          <Avatar alt="" src={user.avatar} />
          <Name>
            {user.name}
            <br />
            <Username>{user.login}</Username>
          </Name>
          <div className="options">
            <i
              onClick={() => props.deleteUser(user.id)}
              className="fa fa-times-circle"
              style={{ cursor: "pointer", color: "#f006" }}
            />
            <i
              className="fa fa-chevron-right"
              style={{ cursor: "pointer", color: "#777", marginLeft: "15px" }}
            />
          </div>
        </Dev>
      ))}
    </List>
  </Container>
);

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
