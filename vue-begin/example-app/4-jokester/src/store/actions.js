// https://official-joke-api.appspot.com/random_ten

import * as types from "./mutation-types";

export const init_jokes = ({ commit }) => {
  fetch(`https://official-joke-api.appspot.com/random_ten`, {
    method: "GET"
  })
    .then(response => response.json())
    .then(json => commit(types.INIT_JOKES, json));
};

export const add_joke = ({ commit }) => {
  fetch(`https://official-joke-api.appspot.com/random_joke`, {
    method: "GET"
  })
    .then(response => response.json())
    .then(json => commit(types.ADD_JOKE, json));
};

export const remove_joke = ({ commit }, index) => {
  commit(types.REMOVE_JOKE, index);
};
