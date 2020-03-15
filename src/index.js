import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Pages/Landing';
import Contact from './Pages/Contact';
import Business from './Components/Business'
import Technology from './Components/Technology'
import Sports from './Components/Sports'
import Entertainment from './Components/Entertainment'
import Error from './Pages/Error';
import AppModel from './Components/Redirect';
import Source from './Components/Source';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';


const routing = (
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/contact" component={Contact} />
				<Route path="/redirect" component={AppModel} />
				<Route path="/source" component={Source} />
				<Route path="/business" component={Business} />
				<Route path="/technology" component={Technology} />
				<Route path="/sports" component={Sports} />
				<Route path="/entertainment" component={Entertainment} />
				<Route component={Error} />
			</Switch>
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
