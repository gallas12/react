/**
 * Created by Milan Gallas on 30.8.2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

// pomocné balíčky pro routování a ovládání histoy api
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// naimportuji si vlastní komponentu
import App from 'components/app';

// jednotlivé stránky
import Archives from './pages/Archives';
import Featured from './pages/Featured';
import Settings from './pages/Settings';

//logika nastavení elementu
const app = document.getElementById('app');

//renderer = nastavení rout + defaultní routa + history api
//  <Route path="archives(/:article)" name="archives" component={Archives}></Route>
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Featured}></IndexRoute>
            <Route path="archives" name="archives" component={Archives}></Route>
            <Route path="settings" name="settings" component={Settings}></Route>
        </Route>
    </Router>,
    app);