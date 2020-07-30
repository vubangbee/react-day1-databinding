import React, { Component } from 'react';
import { connect } from "react-redux";


class XucXac extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    renderDSXX = (list) => {
        return list.map((ele, index) => {
            return (
                <div className={`bau-cua__xoay bau-cua__xoay--${index + 1}`} key={index}>
                    <img src={ele.hinhAnh} />
                </div >

            );

        })
    }
    render() {
        const { xucXac } = this.props;
        return (
            <div className="bau-cua__do w-100 h-100">
                <img src="./img/dia.png" alt="hinh" className="w-100 h-100" />
                {this.renderDSXX(xucXac)}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        //Key là props of componet: value  là state of store
        xucXac: state.stateGamBauCua.xucXac
    };

};
export default connect(mapStateToProps, null)(XucXac);

