import React, { Component } from 'react';
import { connect } from "react-redux";
import { tangGiamAction } from "../../redux/actions/GameBauCuaAction";


class DanhSachCuoc extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    renderDSC = (list) => {
        return list.map((ele, index) => {
            return (
                <div className="card col-4" key={index}>
                    <img className="card-img-top" src={ele.hinhAnh} alt="Card cap" style={{ height: 200 }} />
                    <div className="card-body">
                        <h5 className="card-title" />
                        <div className="d-flex justify-content-around align-items-center">
                            <button className="btn btn-info" onClick={() => {
                                this.props.tangGiamMucCuoc(ele.ma, false)
                            }}>-</button><span>{ele.giaCuoc}</span><button className="btn btn-info" onClick={() => {
                                this.props.tangGiamMucCuoc(ele.ma, true)
                            }}>+</button>
                        </div>
                    </div>
                </div>

            )
        })

    }

    render() {
        const { danhSachCuoc } = this.props
        return (
            <div className="bau-cua__chon">
                <div className="bau-cua__bang row">
                    {this.renderDSC(danhSachCuoc)}
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        //Key là props of componet: value  là state of store
        danhSachCuoc: state.stateGamBauCua.danhSachCuoc
    };

};

const mapDispatchToProps = (dispatch) => {
    return {
        //Key là props of componet: value  là method send action to reducer
        tangGiamMucCuoc: (ma, tangGiam) => {
            // const action = {
            //     type: "TANG_GIAM",
            //     ma: ma,
            //     tangGiam: tangGiam,
            // };
            dispatch(tangGiamAction(ma, tangGiam));
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc);
