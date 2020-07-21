import React, { PureComponent } from 'react'
import data from "./data.json";

class ExampleCard extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            proList: data,
        }
    }

    //Cấu trúc  render dùng lại nhiều
    renderProList = () => {
        return this.state.proList.map((item, index) => {
            return (
                <div className="col-sm-4" key={index}>
                    <div className="card">
                        <img className="card-img-top" src={item.hinhAnh} alt="asdsad" />
                        <div className="card-body">
                            <h4 className="card-title">{item.tenSP}</h4>
                            <button className="btn btn-success">Chi tiết</button><button type="button" className="btn btn-danger">Mua</button>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        <h2>Card</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Hình Ảnh</th>
                                    <th>Tên sảm phẩm</th>
                                    <th>Giá bán</th>
                                    <th>số lượng</th>
                                    <th>thành giá</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img src="./img/vsphone.jpg" alt="asda" style={{ width: 100 }} />
                                    </td>
                                    <td>VinSmart Live</td>
                                    <td>5700000$</td>
                                    <td>
                                        <button className="btn btn-info">-</button><span className="mx-2">3</span><button className="btn btn-info">+</button>
                                    </td>
                                    <td>17100000$</td>
                                    <td><button className="btn btn-danger">xóa</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <img src="./img/meizuphone.jpg" alt="asda" style={{ width: 100 }} />
                                    </td>
                                    <td>Meizu 16Xs</td>
                                    <td>7600000$</td>
                                    <td>
                                        <button className="btn btn-info">-</button><span className="mx-2">2</span><button className="btn btn-info">+</button>
                                    </td>
                                    <td>15200000$</td>
                                    <td><button className="btn btn-danger">xóa</button></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td>32300000</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="row" >
                        {this.renderProList()}
                    </div>
                    <div className="row">
                        <div className="col-sm-5">
                            <img className="img-fluid" src="./img/vsphone.jpg" />
                        </div>
                        <div className="col-sm-7">
                            <h3>Thông số kỹ thuật</h3>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>AMOLED, 6.2", Full HD+</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>iOS 12</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>7 MP</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>Chính 12 MP &amp; Phụ 12 MP</td>
                                    </tr>
                                    <tr>
                                        <td>RAM</td>
                                        <td>4 GB</td>
                                    </tr>
                                    <tr>
                                        <td>ROM</td>
                                        <td>64 GB</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ExampleCard