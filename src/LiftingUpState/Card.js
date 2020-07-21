import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
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
        )
    }
}

export default Card
