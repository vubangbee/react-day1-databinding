import React, { Component } from 'react'
import "./style.css"
import DanhSachCuoc from './DanhSachCuoc'
import XucXac from './XucXac'
import { connect } from "react-redux";

class GameBauCua extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        //Bóc tách  destructuring javascript
        const { tongTien, choiGame } = this.props;
        return (
            <div className="bau-cua">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="bau-cua__tien font-weight-bold">Tổng Tiền : {this.props.tongTien}$</div>
                        <h2 className="text-center text-danger">Bầu Cua</h2>
                        <div><button className="btn btn-info" onClick={() => {
                            // this.props.choiGame()
                            choiGame()
                        }}>Chơi Game</button></div>
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
const mapStateToProps = (state) => {
    return {
        tongTien: state.stateGamBauCua.tongTien
    };

};


const mapDispatchToProps = (dispatch) => {
    return {
        choiGame: () => {
            const action = {
                type: "CHOI_GAME",
            };
            dispatch(action);
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(GameBauCua);
