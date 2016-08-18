import {getCards} from '../api/cardApi';
export const REQUEST_CARDS = 'REQUEST_CARDS';
export const RECEIVE_CARDS = 'RECEIVE_CARDS';

function requestCards() {
  return {
    type: REQUEST_CARDS
  }
}

function receiveCards(cardList) {
  return {
    type: RECEIVE_CARDS,
    cardList: cardList
  }
}

export function fetchCards() {
  return dispatch => {
    dispatch(requestCards());
    return getCards().then(function (response) {
      dispatch(receiveCards(response.data));
    });
  }
}