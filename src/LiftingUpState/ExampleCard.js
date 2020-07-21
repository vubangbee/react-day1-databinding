import React, { PureComponent } from 'react'
import data from "./data.json";
import Product from './Product';

class ExampleCard extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            proList: data,
            proSelected: null,
        }

    }
    handleSelectPro = (pro) => {
        this.setState({
            proSelected: pro,
        })
    }

    //Cấu trúc  render dùng lại nhiều
    renderProList = () => {
        return this.state.proList.map((item, index) => {
            return (
                <div className="col-sm-4" key={index}>
                    <Product handleSelectPro={this.handleSelectPro} item={item} />
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
                    {this.state.proSelected ? (<div className="row">
                        <div className="col-sm-5">
                            <img className="img-fluid" src={this.state.proSelected.hinhAnh} />
                        </div>
                        <div className="col-sm-7">
                            <h3>Thông số kỹ thuật</h3>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{this.state.proSelected.manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{this.state.proSelected.heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>{this.state.proSelected.cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>{this.state.proSelected.cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>RAM</td>
                                        <td>{this.state.proSelected.ram}</td>
                                    </tr>
                                    <tr>
                                        <td>ROM</td>
                                        <td>{this.state.proSelected.rom}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>) : null}

                </div>
            </div>

        )
    }
}

export default ExampleCard