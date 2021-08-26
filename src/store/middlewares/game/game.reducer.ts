import {
  SET_ANSWER,
  GET_QUESTION,
  SET_NEXT_QUESTION,
} from './game.types';

const gameData = [{
  question: 'Who?',
  answer: '',
  id: 1,
}, {
  question: 'What?',
  answer: '',
  id: 2,
}, {
  question: 'When?',
  answer: '',
  id: 3,
}, {
  question: 'Where?',
  answer: '',
  id: 4,
}];

const initialState = {
  loading: false,
  result: '',
  questions: gameData,
  currentQuestion: gameData[0],
  error: '',
};

interface GameActionTypes {
  type: string
  payload: any
}

export default function game(
  state = initialState,
  action: GameActionTypes,
) {
  switch (action.type) {
    case GET_QUESTION:
      return {
        ...state,
      };
    case SET_ANSWER:
      return {
        ...state,
        questions: state.questions.map((question) => {
          const q = question;
          if (question.id === action.payload.id) {
            q.answer = action.payload.answer;
          }
          return q;
        }),
      };
    case SET_NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: state.questions.find((question) => question.id === action.payload.id + 1),
      };
    default:
      return state;
  }
}
