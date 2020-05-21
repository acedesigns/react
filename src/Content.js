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
import { Home, Companies, About, Population , PageNotFound } from './components';

function Content () {

    return(
        <div>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/numbers" component={Companies} />
            <Route path="/population" component={Population} />
            <Route path="/about" component={About} />
            <Route component={PageNotFound} />
            </Switch>
        </div>
    )
}

export default Content;