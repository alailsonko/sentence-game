/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { Dispatch } from 'redux';
import {
  SET_ANSWER,
  SET_NEXT_QUESTION,
  SET_RESULT,
  RESTART,
  SET_BACK_QUESTION,
} from './game.types';

interface IQuestion {
    id: number,
    answer: string,
    question: string,
}

interface ActionDispatchType {
    type: string;
    payload?: any;
}

export const setAnswer = (answer: string, currentQuestion: IQuestion) => async (
  dispatch: Dispatch<ActionDispatchType>,
) => {
  const cq = currentQuestion;
  cq.answer = answer;
  dispatch({
    type: SET_ANSWER,
    payload: cq,
  });
};

export const setNextQuestion = (currentQuestion: IQuestion) => async (
  dispatch: Dispatch<ActionDispatchType>,
) => {
  dispatch({
    type: SET_NEXT_QUESTION,
    payload: currentQuestion,
  });
  if (currentQuestion.id === 4) {
    dispatch({
      type: SET_RESULT,
    });
  }
};

export const setBackQuestion = (currentQuestion: IQuestion) => async (
  dispatch: Dispatch<ActionDispatchType>,
) => {
  dispatch({
    type: SET_BACK_QUESTION,
    payload: currentQuestion,
  });
};

export const restart = () => async (dispatch: Dispatch<ActionDispatchType>) => {
  dispatch({
    type: RESTART,
  });
};
