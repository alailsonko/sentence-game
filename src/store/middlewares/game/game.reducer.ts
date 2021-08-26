import {
  HELLO,
} from './game.types';

const gameData = {
  what: '',
  who: '',
  where: '',
  when: '',
};

const initialState = {
  loading: false,
  result: '',
  questions: gameData,
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
    case HELLO:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
