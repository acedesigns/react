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


export class About extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">

                        <div className="col-xl-4 mb-4">
                            <div className="card border-0 shadow">
                                <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" alt="" className="card-img-top"/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title mb-0">Anele</h5>
                                        <div className="card-text text-black-50">Web Developer</div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-xl-4 mb-4">
                            <div className="card border-0 shadow">
                                <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" alt="" className="card-img-top" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title mb-0">Team Member</h5>
                                        <div className="card-text text-black-50">Web Developer</div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-xl-4 mb-4">
                            <div className="card border-0 shadow">
                                <img src="https://source.unsplash.com/sNut2MqSmds/500x350" alt="" className="card-img-top" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title mb-0">Team Member</h5>
                                        <div className="card-text text-black-50">Brother</div>
                                    </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-xl-4 mb-4">
                            <div className="card border-0 shadow">
                                <img src="https://source.unsplash.com/ZI6p3i9SbVU/500x350" alt="" className="card-img-top" />
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-0">Team Member</h5>
                                    <div className="card-text text-black-50">Web Developer</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}