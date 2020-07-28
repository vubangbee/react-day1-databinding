import React, { PureComponent } from 'react'
import SanPham from './SanPham'
import { connect } from 'react-redux'

class DanhSachSanPham extends PureComponent {

    renderSanPham = () => {
        // Lấy props từ  component cha là mangSanPham  render ra các  componnet c ard
        return this.props.mangSanPham.map((sanPham, index) => {
            return <div className="col-4" key={index}>
                <SanPham sanPham={sanPham} />
            </div>
        })
    }
    render() {
        return (
            <div>
                <h3>Danh sách  sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <h3>Chi  tiết sản phẩm</h3>
                <div className="row">
                    <div className="col-4">
                        <h3 className="text-center">Iphone</h3>
                        <img className="img-fluid" height="{350}" src={this.props.spChiTiet.hinhAnh} alt />
                    </div>

                    <div className="col-8">
                        <table class="table">

                            <tr>
                                <td>Tên sản phẩm</td>
                                <td>{this.props.spChiTiet.tenSP}</td>
                            </tr>
                            <tr>
                                <td>Màn hình</td>
                                <td>{this.props.spChiTiet.manHinh}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành</td>
                                <td>{this.props.spChiTiet.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <td>Camera sau</td>
                                <td>{this.props.spChiTiet.cameraSau}</td>
                            </tr>
                            <tr>
                                <td>Camera trước</td>
                                <td>{this.props.spChiTiet.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <td>Ram</td>
                                <td>{this.props.spChiTiet.ram}</td>
                            </tr>
                            <tr>
                                <td>Rom</td>
                                <td>{this.props.spChiTiet.rom}</td>
                            </tr>
                            <tr>
                                <td>Giá bán</td>
                                <td>{this.props.spChiTiet.giaBan}</td>
                            </tr>

                        </table>

                    </div>
                </div>

            </div>

        )
    }
}
//Đây là hàm lấy state từ redux chuyển thành props của component
const mapStateToProps = state => {
    return {
        spChiTiet: state.stateBaiTapGioHang.spChiTiet
    }
}

export default connect(mapStateToProps)(DanhSachSanPham)

