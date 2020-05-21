/**
 * ====================================================
 *
 * Created by anele on 2020/05/19.
 *
 * @anele_ace
 *
 * ====================================================
 */

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, Companies, About, PageNotFound } from './components';

function Content () {

    return(
        <div>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/numbers" component={Companies} />
            <Route path="/about" component={About} />
            <Route component={PageNotFound} />
            </Switch>
        </div>
    )
}

export default Content;