console.log('I am alive!');

var Promise = require('es6-promise').Promise;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let getTags = function() {
  return new Promise((resolve, reject) => {
    fetch('/api/tags')
      .then(res => res.json())
      .then(resJson => resolve(resJson))
      .catch(err => reject(err));
  });
};
  
getTags().then(tags => {
	ReactDOM.render(
	 	<App tags={tags}/>,
		document.getElementById('app')
	);
});