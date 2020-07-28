import React, { PureComponent } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'
import SanPham from './SanPham'
let mangSanPham = [{
    "maSP": 1,
    "tenSP": "VinSmart Live",
    "manHinh": "AMOLED, 6.2\", Full HD+",
    "heDieuHanh": "Android 9.0 (Pie)",
    "cameraTruoc": "20 MP",
    "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
    "ram": "4 GB",
    "rom": "64 GB",
    "giaBan": 5700000,
    "hinhAnh": "./img/vsphone.jpg"
},
{
    "maSP": 2,
    "tenSP": "Meizu 16Xs",
    "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
    "heDieuHanh": "Android 9.0 (Pie); Flyme",
    "cameraTruoc": "20 MP",
    "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
    "ram": "4 GB",
    "rom": "64 GB",
    "giaBan": 7600000,
    "hinhAnh": "./img/meizuphone.jpg"
},
{
    "maSP": 3,
    "tenSP": "Iphone XS Max",
    "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
    "heDieuHanh": "iOS 12",
    "cameraSau": "Chính 12 MP & Phụ 12 MP",
    "cameraTruoc": "7 MP",
    "ram": "4 GB",
    "rom": "128 GB",
    "giaBan": 27000000,
    "hinhAnh": "./img/applephone.jpg"
}]

class BaiTapGioHang extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <GioHang />
                <DanhSachSanPham mangSanPham={mangSanPham} />

            </div>

        )
    }
}

export default BaiTapGioHang