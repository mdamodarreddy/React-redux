import React, { Component } from 'react';
import { combineReducers } from 'redux';
import AdditionReducers from './additionReducers';
import AdditionAnswerReducers from './additionAnswerReducers';

const allReducers = combineReducers({
	addition: AdditionReducers,
	saveAnswer: AdditionAnswerReducers
});
console.log('allReducers >>>');
export default allReducers;