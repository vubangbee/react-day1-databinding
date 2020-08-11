import React, { Component } from "react";
import { connect } from "react-redux";
import { THEM_NGUOI_DUNG } from "../redux/constants/QLSVConst";
//import thư viện xử lý object  js
import _ from "lodash";
class Form_Validation extends Component {
  state = {
    values: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
    },
  };

  handleSubmit = (even) => {
    //Ngăn sự kiện reload lại form
    even.preventDefault();
    let valid = true;
    let { values, errors } = this.state;

    //Duyệt các trường values của state
    for (let key in values) {
      if (values[key].trim() === "") {
        alert("Dữ liệu không hợp lệ!");
        return;
      }
    }
    for (let key in errors) {
      if (errors[key].trim() !== "") {
        alert("Dữ liệu không hợp lệ!");
        return;
      }
    }
    // Submit lên reducer thêm  người dùng vào mảng người  dùng

    this.props.dispatch({
      type: THEM_NGUOI_DUNG,
      nguoiDung: this.state.values,
    });
  };

  //Chạy sau khi nhận props mới và trước khi render =>  trả về  state mới
  // static getDerivedStateFromProps(
  //   newProps,
  //   currentState //Props mới và state hiện tại
  // ) {
  //   // console.log("getDerivedStateFromProps");
  //   console.log("newProps", newProps);
  //   console.log("state", currentState);

  //   //So sánh nếu nguoiDungEdit (được click) khách state hiện tại thid lấy thằng được click gán  cho  state hiện tại
  //   // if (!_.isEqual(newProps.nguoiDungEdit, currentState.values))
  //   // if (newProps.nguoiDungEdit.taiKhoan !== currentState.values.taiKhoan)
  //   if (
  //     newProps.nguoiDungEdit.edit &&
  //     newProps.nguoiDungEdit.taiKhoan !== currentState.values.taiKhoan
  //   ) {
  //     console.log(1231);
  //     //Lấy props mới trả về state  mới
  //     let newState = { ...currentState, values: newProps.nguoiDungEdit };
  //     // currentState.taiKhoan = newProps.nguoiDungEdit.taiKhoan;
  //     // currentState.matKhau = newProps.nguoiDungEdit.matKhau;
  //     //...

  //     return { ...newState }; //Trả về state mới
  //   }
  //   return null;
  // }

  componentWillReceiveProps(newProps) {
    //Chạy sau khi  nhận props mới và
    this.setState({
      values: newProps.nguoiDungEdit,
    });
  }

  //prevProps là props trước khi render
  //prevState là state trước khi render
  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevProps.nguoiDungEdit, this.props.nguoiDungEdit)) {
      // chỉ setstate khi người dùng bấm vào nút chỉnh sửa
      this.setState({ value: this.props.nguoiDungEdit });
    }
  }
  handleChange = (even) => {
    // let value = even.target.value; //even.target là thẻ (component) xảy ra sự kiện onChange
    // let name = even.target.name;
    // console.log("taikhoan", value);
    let { name, value } = even.target;
    let label = even.target.getAttribute("label");
    let type = even.target.getAttribute("type");
    //Tách gí trị values và errors của state ra xử lý riêng
    //Xử lý gán value
    let newValues = { ...this.state.values, [name]: value };
    //Xử lý error
    //Kiểm tra trống
    let errorMess = "";
    if (value.trim() === "") {
      errorMess = label + "  không được bỏ trống";
    } else {
      // Kiểm tra nhập số
      let regexNumber = /^[0-9]*$/;
      if (type === "phone") {
        if (!regexNumber.test(value)) {
          errorMess = ` ${label} chỉ được phép nhập  số`;
        }
      } else if (type === "email") {
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexEmail.test(value)) {
          errorMess = ` ${label} không hợp lệ`;
        }
      }
    }

    let newErrors = { ...this.state.errors, [name]: errorMess };

    this.setState(
      { values: newValues, errors: newErrors },

      () => {
        console.log("state", this.state);
      }
    );
  };

  render() {
    //Lấy props từ người dùn từ state redux
    // let {
    //   taiKhoan,
    //   hoTen,
    //   matKhau,
    //   email,
    //   soDt,
    //   maNhom,
    // } = this.props.nguoiDungEdit;
    let { taiKhoan, hoTen, matKhau, email, soDt, maNhom } = this.state.values;
    return (
      <div className="card text-white bg-white text-dark">
        <div className="card-header">Form Đăng ký</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit} className="container-fluid">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Tài khoản</p>
                  <input
                    value={taiKhoan}
                    className="form-control"
                    name="taiKhoan"
                    label="Tài Khoản"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">
                    {this.state.errors.taiKhoan}
                  </p>
                </div>
                <div className="form-group">
                  <p>Mật khẩu</p>
                  <input
                    className="form-control"
                    value={matKhau}
                    name="matKhau"
                    label="Mật khẩu"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">
                    {this.state.errors.matKhau}
                  </p>
                </div>
                <div className="form-group">
                  <p>Số Điện Thoại</p>
                  <input
                    value={soDt}
                    className="form-control"
                    type="phone"
                    name="soDt"
                    label="Số điện thoại"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.soDt}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Họ tên</p>
                  <input
                    value={hoTen}
                    className="form-control"
                    name="hoTen"
                    label="Họ tên"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.hoTen}</p>
                </div>
                <div className="form-group">
                  <p>Email</p>
                  <input
                    value={email}
                    className="form-control"
                    name="email"
                    label="Email"
                    type="email"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.email}</p>
                </div>
                <div className="form-group">
                  <p>Mã nhóm</p>
                  <input
                    value={maNhom}
                    className="form-control"
                    name="maNhom"
                    label="Mã nhóm"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.maNhom}</p>
                </div>
                <div className="form-group">
                  <button className="btn btn-success">Đăng ký</button>
                  <button
                    type="button"
                    onClick={() => {
                      //Sự kiện  cập nhật
                      this.props.dispatch({
                        type: "CAP_NHAT",
                        nguoiDung: this.state.values,
                      });
                    }}
                    className="btn btn-success"
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    nguoiDungEdit: state.QLSVReducer.nguoiDungEdit,
  };
};
export default connect(mapStateToProps)(Form_Validation);
