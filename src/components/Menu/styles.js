import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #fff;
  height: 95vh;
  width: 400px;
  border-radius: 5px;
  box-shadow: 1px 1px 10px 1px grey;
  margin-top: 5%;
  margin-left: 5%;
`;

export const List = styled.ul`
  list-style-type: none;
  padding-top: 20px;
  padding-left: 20px;
  width: 100%;
`;

export const Dev = styled.li`
  font-size: 18px;
  font-weight: bold;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid lightgray;
  margin-top: 5px;
  margin-bottom: 5px;

  .options {
    margin-left: 50%;
    white-space: nowrap;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 20px;
  white-space: nowrap;
  width: 20%;
`;

export const Username = styled.small`
  color: #666;
`;
