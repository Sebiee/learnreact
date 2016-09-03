import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from './reducers/reducers';
import { routes } from './routes';
import './styles/main';

/**
* Entry Point for application
**/

const store = createStore(todoApp);

render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.getElementById('root')
);
