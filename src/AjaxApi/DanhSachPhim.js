import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { result } from "lodash";
import { layDanhSachPhimAjax } from "../redux/action/QuanLyPhimActions";

class DanhSachPhim extends Component {
  //state chứa danh sách phim
  state = {
    danhSachPhim: [],
  };

  renderPhim = () => {
    console.log();
    return this.props.danhSachPhim.map((phim, index) => {
      return (
        <div className="col-3" key="index">
          <div className="card text-left">
            <img className="card-img-top" src={phim.hinhAnh} alt />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <p className="card-text">Body</p>
            </div>
          </div>
        </div>
      );
    });
  };

  //Lấy danh sách phim về gắn vô state, render ra
  layDanhSachPhim = () => {
    //Xử lý gọi về server
    // let promise = axios({
    //   method: "get",
    //   url:
    //     "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    // });
    // promise
    //   .then((result) => {
    //     console.log("danhsachphim", result.data);
    //     this.setState({
    //       danhSachPhim: result.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //   });
    this.props.dispatch(layDanhSachPhimAjax());
  };

  //Lifecycle componentDidmount tự động chạy khi component được load (sau hàm render)
  componentDidMount() {
    this.layDanhSachPhim();
  }
  render() {
    return (
      <div className="container">
        <button
          className="btn btn-success"
          onClick={() => {
            this.layDanhSachPhim();
          }}
        >
          Lấy danh sách phim
        </button>
        <h3 className="display-4">Danh sách phim</h3>
        <div className="row">{this.renderPhim()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachPhim: state.QuanLyPhimReducer.danhSachPhim,
});
export default connect(mapStateToProps)(DanhSachPhim);
