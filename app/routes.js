import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import * as comp from './components';

export const routes = (
    <Router history={browserHistory}>
	    <Route path="/" component={comp.Global}>
	    	<IndexRoute component={comp.Project}/>
	    	<Route path="home" component={comp.Home}/>
		 	<Route path="about" component={comp.About}/>
		 	<Route path="project" component={comp.Project}/>
		</Route>
	</Router>
   );

