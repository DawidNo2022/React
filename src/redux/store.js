import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
//selectors
export const getFilteredCards = (
  { cards, searchString },
  columnId //(state)-destrukturyzacja
) =>
  cards.filter(
    (card) =>
      card.columnId === columnId &&
      card.title.toLowerCase().includes(searchString.searchString.toLowerCase())
  );

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { id: shortid(), ...action.payload }], // parsowanie do Int??
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { id: shortid(), ...action.payload }],
      };
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
