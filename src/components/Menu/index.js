import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';

import {
  Container, List, Dev, Avatar, Name, Username,
} from './styles';

const Menu = () => (
  <Container>
    <List>
      <Dev>
        <Avatar alt="" src="https://avatars2.githubusercontent.com/u/2254731?v=4" />
        <Name>
          Usuário
          <br />
          <Username>user</Username>
        </Name>
        <div style={{ marginLeft: '35%' }}>
          <i
            className="fa fa-times-circle"
            style={{ cursor: 'pointer', marginLeft: '30px', color: '#f006' }}
          />
          <i
            className="fa fa-chevron-right"
            style={{ cursor: 'pointer', color: '#777', marginLeft: '30px' }}
          />
        </div>
      </Dev>
    </List>
  </Container>
);

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Menu);
