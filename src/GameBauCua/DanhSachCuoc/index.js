import React, { Component } from 'react'

class DanhSachCuoc extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="bau-cua__chon">
                <div className="bau-cua__bang row">
                    <div className="card col-4">
                        <img className="card-img-top" src="./img/bau.png" alt="Card cap" style={{ height: 200 }} />
                        <div className="card-body">
                            <h5 className="card-title" />
                            <div className="d-flex justify-content-around align-items-center">
                                <button className="btn btn-info">-</button><span>0$</span><button className="btn btn-info">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="card col-4">
                        <img className="card-img-top" src="./img/cua.png" alt="Card cap" style={{ height: 200 }} />
                        <div className="card-body">
                            <h5 className="card-title" />
                            <div className="d-flex justify-content-around align-items-center">
                                <button className="btn btn-info">-</button><span>0$</span><button className="btn btn-info">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="card col-4">
                        <img className="card-img-top" src="./img/tom.png" alt="Card cap" style={{ height: 200 }} />
                        <div className="card-body">
                            <h5 className="card-title" />
                            <div className="d-flex justify-content-around align-items-center">
                                <button className="btn btn-info">-</button><span>0$</span><button className="btn btn-info">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="card col-4">
                        <img className="card-img-top" src="./img/ca.png" alt="Card cap" style={{ height: 200 }} />
                        <div className="card-body">
                            <h5 className="card-title" />
                            <div className="d-flex justify-content-around align-items-center">
                                <button className="btn btn-info">-</button><span>0$</span><button className="btn btn-info">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="card col-4">
                        <img className="card-img-top" src="./img/nai.png" alt="Card cap" style={{ height: 200 }} />
                        <div className="card-body">
                            <h5 className="card-title" />
                            <div className="d-flex justify-content-around align-items-center">
                                <button className="btn btn-info">-</button><span>0$</span><button className="btn btn-info">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="card col-4">
                        <img className="card-img-top" src="./img/ga.png" alt="Card cap" style={{ height: 200 }} />
                        <div className="card-body">
                            <h5 className="card-title" />
                            <div className="d-flex justify-content-around align-items-center">
                                <button className="btn btn-info">-</button><span>0$</span><button className="btn btn-info">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default DanhSachCuoc
