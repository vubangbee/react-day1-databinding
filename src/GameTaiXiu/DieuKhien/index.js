import React, { Component } from "react";
import { connect } from "react-redux";

class DieuKhien extends Component {
  renderXucXac = () => {
    return this.props.xucXac.map((ele, index) => {
      return (
        <span key={index}>
          <i
            className={ele.classes}
            style={{ color: "white", fontSize: 150 }}
          />
        </span>
      );
    });
  };
  render() {
    return (
      <div className="xi-ngau__control row text-center mt-4">
        <div className="col-4">
          <button
            className="btn btn-lg rounded-circle"
            style={{ overflow: "hidden" }}
            onClick={() => {
              this.props.chonTaiXiu();
            }}
          >
            <img src="./img/tai.PNG" alt="tai" />
          </button>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-around">
          <span>
            <i
              className="fa fa-dice-one"
              style={{ color: "white", fontSize: 150 }}
            />
          </span>
          <span>
            <i
              className="fa fa-dice-two"
              style={{ color: "white", fontSize: 150 }}
            />
          </span>
          <span>
            <i
              className="fa fa-dice-six"
              style={{ color: "white", fontSize: 150 }}
            />
          </span>
        </div>
        <div className="col-4">
          <button
            className="btn btn-lg rounded-circle"
            style={{ overflow: "hidden" }}
          >
            <img src="./img/xiu.PNG" alt="xiu" />
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // Key là props của component
    xucXac: state.GameTaiXiuReducer.xucXac,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    chonTaiXiu: (taiXiu) => {
      dispatch({
        type: "CHON_TAI_XIU",
        taiXiu, // Key
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DieuKhien);
