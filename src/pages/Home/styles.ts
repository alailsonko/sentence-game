/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2``;

export const TitleResult = styled.h2`
  align-self: center;
`;

export const Wrapper = styled.div`
  background: var(--main-card-color);
  border: 0.1px solid gray;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 180px;
  padding: 3px;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 180%;
    /* background-color: red; */
    p {
      margin: 3px 0;
      color: red;
    }
    div {
      align-self: center;
    }
  }
`;

export const Input = styled(Field)`
  height: 30px;
  margin: 0 0 5px 0;
  font-size: 20px;
  border-color: ${(props) => (props.touched && props.errors ? 'red' : '#A736AD')};
  border-width: 4px;
  outline: none;
  &:focus {
    outline: none;
    border-width: 4px;
    border-color: ${(props) => (props.touched && props.errors ? 'red' : '#A736AD')};
    box-shadow: 0px 0px 2px red;
  }
`;

export const Button = styled.button`
  border-radius: 50px;
  width: 150px;
  height: 40px;
  font-size: 24px;
  align-self: center;
  cursor: pointer;
`;

export const ButtonNext = styled(Button)`
  background-color: var(--main-btn-success-color);
`;

export const ButtonBack = styled(Button)`
  background-color: var(--main-btn-color);
`;
