import React, { Component } from "react";
import Form_Validation from "./Form_Validation";
import { connect } from "react-redux";

class QLSV extends Component {
  renderTable = () => {
    return this.props.mangNguoiDung.map((nguoiDung, index) => {
      return (
        <tr key={index}>
          <td>{nguoiDung.taiKhoan}</td>
          <td>{nguoiDung.matKhau}</td>
          <td>{nguoiDung.hoTen}</td>
          <td>{nguoiDung.email}</td>
          <td>{nguoiDung.soDt}</td>
          <td>{nguoiDung.maNhom}</td>
          <td>
            <button
              onClick={() => {
                this.props.dispatch({
                  type: "CHINH_SUA",
                  nguoiDung,
                });
              }}
              className="btn btn-primary"
            >
              Chỉnh sửa
            </button>
            <button
              onClick={() => {
                this.props.dispatch({
                  type: "XOA_NGUOI_DUNG",
                  taiKhoan: nguoiDung.taiKhoan,
                });
              }}
              className="btn btn-primary"
            >
              Xoa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <Form_Validation />
        <table class="table">
          <thead>
            <tr>
              <th>Tài khoản</th>
              <th>Mật Khẩu</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>SDT</th>
              <th>Mã nhóm</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mangNguoiDung: state.QLSVReducer.mangNguoiDung,
    nguoiDungEdit: state.QLSVReducer.nguoiDungEdit,
  };
}
export default connect(mapStateToProps)(QLSV);
