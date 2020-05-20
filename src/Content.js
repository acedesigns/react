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
import { Route } from 'react-router-dom';
import { Home, Companies, About } from './components';

function Content () {

    return(
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/numbers" component={Companies} />
            <Route path="/about" component={About} />
        </div>
    )
}

export default Content;