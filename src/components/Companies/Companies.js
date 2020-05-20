/**
 * ====================================================
 *
 * Created by anele on 2020/05/19.
 *
 * @anele_ace
 * https://stackoverflow.com/questions/42391499/
 *
 * ====================================================
 */

import React from "react";
import * as moment from 'moment';
import { Row, Col, Form } from "react-bootstrap";
import { fetchNumberFact, fetchDateFact, fetchRandJoke, fetchLoveCompat } from "../../api";
import styles from './Companies.module.css';
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
declare var Swal: any;


export class Companies extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        //const { promiseInProgress } = usePromiseTracker();
        this.state = {
            rand_number: {},
            rand_joke: '',
            date_fact: [],
            love_calc: {},
        }
    }

    async componentDidMount() {
        this._isMounted = true;
        //trackPromise();

        const fetchedData = await fetchNumberFact();
        const fetchedDate = await fetchDateFact();
        const fetchedJoke = await fetchRandJoke();
        //const fetchedLove = await fetchLoveCompat();


        this.setState({rand_number: fetchedData, date_fact: fetchedDate, rand_joke: fetchedJoke });
    }

    componentWillUnmount () {
        this._isMounted = false;
    };

    submitFormHandler = async (event) => {
        event.preventDefault();
        if (!event.target.checkValidity()) {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter names',
                icon: 'error',
                confirmButtonText: 'Cool'
            });
            return;
        }

        const data = new FormData(event.target);
        const user = {
            fname: data.get('firstName'),
            sname: data.get('secondName'),
        };
        const sendData = await fetchLoveCompat(user);
        this.setState({ love_calc: sendData });
        this.setState({ displayErrors: true });

    };

    render() {

        const number    = this.state.rand_number;
        const return_date  = this.state.date_fact;
        const joke      = this.state.rand_joke;
        const love      = this.state.love_calc;

        if ( Object.keys(number).length <= 0 || Object.keys(joke).length <= 0) {
            return 'Loading...';
        }
        const { displayErrors } = this.state;
        return (
            <div>
            <Row>

                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            Mathematical Number Meaning/Facts
                        </div>
                        <div className="card-body">
                            <h6> Property about  : {number.number}</h6>
                            <p className="card-text"> {number.data} </p>

                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted"> {moment(number.lastUpdate).subtract(7, 'minutes').fromNow()} </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            Fact about a day of year
                        </div>
                        <div className="card-body">
                            <h6>  Month: {return_date.month}, Day: {return_date.day} </h6>
                            <p className="card-text"> { return_date.data } </p>

                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted"> {moment(number.lastUpdate).subtract(3, 'minutes').fromNow()} </small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comment */}
            </Row>

            <Row>
                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                             Some Random Joke
                        </div>
                        <div className="card-body">

                            <p className="card-text"> { joke.content } </p>

                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted"> {moment(number.lastUpdate).subtract(3, 'minutes').fromNow()} </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <Form onSubmit={this.submitFormHandler} noValidate>
                        <div className="card-header">
                             Love Calculator
                        </div>

                        <div className="card-body">
                            <Row>
                                <Col md="6">
                                    <label htmlFor="firstName">Your Name</label>
                                    <input className="form-control form-control-sm" id="firstName" name="firstName" type="text" required />
                                </Col>

                                <Col md="6">
                                    <label htmlFor="secondName">Your Lovers Email</label>
                                    <input className="form-control form-control-sm" id="secondName" name="secondName" type="text" required/>
                                </Col>
                            </Row>

                            <div className="justify-content-between align-items-center">
                                <br/>

                                <div className="alert alert-primary" role="alert">
                                    {displayErrors ? love.percentage+'%' : ''}
                                    <hr/>
                                    {displayErrors ? love.result : ''}
                                </div>

                            </div>
                        </div>

                        <div className="card-footer">
                            <button className="btn btn-info btn-sm" >Show Me</button>
                        </div>
                        </Form>
                    </div>
                </div>
            </Row>
            </div>
        )
    }



}
