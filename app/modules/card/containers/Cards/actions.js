import {getCards} from '../../api';
import {REQUEST_CARDS, RECEIVE_CARDS} from './types';

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