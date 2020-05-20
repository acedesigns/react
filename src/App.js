/**
 * ====================================================
 *
 * Created by anele on 2020/05/18.
 *
 * @anele_ace
 *
 * ====================================================
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import  Navigation from './Navigation';
import  Content from './Content';


class App extends React.Component {

    /*
    constructor(props) {
        super(props);
    }*/

    componentDidMount() {}

    render() {
        return (
            <Container>
                <Router>
                    <Navigation />
                    <Content/>
                </Router>
            </Container>
        );
    }

}

export default App;
