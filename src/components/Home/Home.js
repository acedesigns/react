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
import { Carousel } from "react-bootstrap";
declare var holder: any;

function Home () {

    return(
        <div>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-6">ReactJs App!</h1>
                    <p>This is just an App that displays random but interesting stuff.</p>
                    <p><a className="btn btn-primary btn-sm" rel="noopener noreferrer" target="_blank" href="https://twitter.com/anele_ace" role="button">Learn more &raquo;</a></p>
                </div>
            </div>

            <Carousel className="mb-4">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400.png/282c34/fff?text=Slide+Image"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400.png/282c34/fff?text=Slide+Image"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400.png/282c34/fff?text=Slide+Image"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home;