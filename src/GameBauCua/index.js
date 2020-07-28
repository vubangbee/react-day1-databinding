import React, { Component } from 'react'
import "./style.css"

class GameBauCua extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="bau-cua">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="bau-cua__tien font-weight-bold">Tổng Tiền : 100$</div>
                        <h2 className="text-center text-danger">Bầu Cua</h2>
                        <div><btn className="btn btn-info">Chơi Game</btn></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-7">
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
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div className="bau-cua__do w-100 h-100">
                                <img src="./img/dia.png" alt="hinh" className="w-100 h-100" />
                                <div className="bau-cua__xoay bau-cua__xoay--1">
                                    <img src="./img/bau.png" alt="hinhanh" />
                                </div>
                                <div className="bau-cua__xoay bau-cua__xoay--2">
                                    <img src="./img/bau.png" alt="hinhanh" />
                                </div>
                                <div className="bau-cua__xoay bau-cua__xoay--3">
                                    <img src="./img/bau.png" alt="hinhanh" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default GameBauCua
