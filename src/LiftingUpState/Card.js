import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    renderListCard = () => {
        return this.props.cardList.map((item, index) => {
            return (
                <tr>
                    <td>1</td>
                    <td>
                        <img src={item.hinhAnh} alt="asda" style={{ width: 100 }} />
                    </td>
                    <td>{item.tenSP}</td>
                    <td>{item.giaBan}</td>
                    <td>
                        <button onClick={() => { this.props.tangGiamSoLuong(item.maSP, false) }} className="btn btn-info">-</button>
                        <span className="mx-2">{item.soLuong}</span>
                        <button onClick={() => { this.props.tangGiamSoLuong(item.maSP, true) }} className="btn btn-info">+</button>
                    </td>
                    <td>{item.giaBan}</td>
                    <td><button onClick={() => { this.props.handleDelete(item) }} className="btn btn-danger">xóa</button></td>
                </tr>
            )

        }
        )

    }
    tinhTongTien = () => {
        return this.props.cardList.reduce((tongTien, spGH, index) => {
            return tongTien += spGH.soLuong * spGH.giaBan;
        }, 0).toLocaleString();
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
                        {this.renderListCard()}

                    </tbody>
                    <tfoot>
                        <tr>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td>{this.tinhTongTien()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default Card
