/* eslint-disable indent */
import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

import MovieList from '../routes/movielist/movieList';
import Index from '../routes/pictures/index';

export default class App extends Component {

    /** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
    };
    
    render() {
        return (
            <div id="app">
                <Header />
                <Router onChange={this.handleRoute}>
                    <MovieList path="/" />
                    <Index path="/picture" />
                </Router>
            </div>
        );
    }
}