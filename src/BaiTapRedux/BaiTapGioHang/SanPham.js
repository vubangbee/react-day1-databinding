import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class SanPham extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        let { sanPham } = this.props;
        return (
            <div className="card text-left">
                <img className="card-img-top" src={sanPham.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.gia}</p>
                    <button onClick={() => { this.props.xemChiTiet(sanPham) }} type="button" class="btn btn-primary">Xem chi tiết</button>
                </div>
            </div>


        )
    }
}

//Hàm lấy giá trị callback từ store về để đưa dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
    return {
        xemChiTiet: (sanPham) => {// Định nghĩa  1 props cho component này  là 1 hàm
            //Dùng hàm dispatch của redux đưa sản phẩm lên tất cả reducer
            console.log('sanPhamDuocClick', sanPham)

            //Dùng hàm dispatch từ redux trả  ra để đưa dũ liệu lên reducer xử lý

            const action = {
                type: 'XEM_CHI_TIET',  //Giá trị  bắt  buộc  phải có
                sanPham
            }

            dispatch(action);  //Gửi lên reducer

        }
    }

}

export default connect(null, mapDispatchToProps)(SanPham)