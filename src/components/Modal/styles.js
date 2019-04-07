import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 200px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 10px grey;
  position: absolute;
  top: 50%;
  left: 100%;
  justify-content: center;
  margin-top: -50px;
  margin-left: 100%;

  form {
    text-align: center;
  }

  h4 {
    font-family: sans-serif;
    text-align: center;
    margin-top: 10px;
  }

  button {
    border-radius: 5px;
    width: 150px;
    height: 60px;
    font-size: 20px;
    margin-left: 10px;
  }

  input {
    width: 95%;
    height: 32px;
    border-radius: 5px;
    outline: 0;
    margin-bottom: 25px;
  }
`;
