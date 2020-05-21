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
import { Card, Row, Col } from "react-bootstrap";
import { fetchWorldPopulation, fetchPopulOfCountry } from "../../api";

export class Population extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            worldPopulation: {},
            countries: {},
            selectedCountry: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    numberWithCommas(number) {
        return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    componentWillUnmount () {
        this._isMounted = false;
    };

    async handleChange(event) {
        event.preventDefault();
        const sendData = await fetchPopulOfCountry(event.target.value);
        this.setState({ selectedCountry: sendData, displayErrors: true });
    }

    async componentDidMount() {
        this._isMounted = true;

        const fetchedData = await fetchWorldPopulation();

        this.setState({ worldPopulation: fetchedData.world });
        this.setState({ countries: fetchedData.countries });
    }


    render() {

        const world_population    = this.state.worldPopulation.world_population;
        const world_countries     = this.state.countries.countries;
        const one_country     = this.state.selectedCountry.data;

        if ( !world_population || !world_countries ) {
            return 'Loading World data...';
        }
        const { displayErrors } = this.state;

        return (
            <div>
                <Row>
                    <div className="col-md-6">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                Countries
                            </div>
                            <div className="card-body">
                                <select className="custom-select" onChange={this.handleChange}>
                                    <option value="grapefruit">Grapefruit</option>
                                    {world_countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                                </select>

                                <hr/>

                                <div className="alert alert-primary" role="alert">
                                    {displayErrors ? one_country.country_name : ''}
                                    <hr/>
                                    {displayErrors ? this.numberWithCommas(one_country.population) + ' People' : ''}
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted"> 9 min ago </small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Col md="6">

                        <Card bg='light' style={{ width: '18rem' }}>

                            <Card.Header> World Population </Card.Header>

                            <Card.Body>
                                <Card.Title> {/*Card Title*/} </Card.Title>
                                <Card.Text>
                                    { this.numberWithCommas(world_population) } People
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer>
                                Footer
                            </Card.Footer>
                        </Card>

                    </Col>
                </Row>
            </div>
        )
    }
}