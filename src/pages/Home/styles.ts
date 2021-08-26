/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2``;

export const Wrapper = styled.div`
  /* background: red; */
  border: 0.1px solid gray;
  /* border-radius: 3px; */
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  height: 50px;
  margin: 0 0 15px 0;
  font-size: 20px;
  &:focus {
    outline: none;
    border-color: red;
    box-shadow: 0px 0px 2px red;
  }
`;

export const ButtonSubmit = styled.button`
  border-radius: 50px;
  width: 150px;
  height: 50px;
  font-size: 24px;
  align-self: center;
  cursor: pointer;
  &:hover {
      background-color: red;
  }
`;
