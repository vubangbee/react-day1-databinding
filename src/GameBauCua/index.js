import React, { Component } from 'react'
import "./style.css"
import DanhSachCuoc from './DanhSachCuoc'
import XucXac from './XucXac'

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
                            <DanhSachCuoc />
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <XucXac />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default GameBauCua
