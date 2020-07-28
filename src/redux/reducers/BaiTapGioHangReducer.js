import BaiTapGioHang from "../../BaiTapRedux/BaiTapGioHang/BaiTapGioHang"

//Thay vì khai báo state ở component ta khai báo tại reducer
const stateDefault = {
    spChiTiet: {
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
    }
}

const BaiTapGioHangReducer = (state = stateDefault, action) => {
    console.log('actionCNSP', action)
    switch (action.type) {
        case 'XEM_CHI_TIET': {
            return { ...state, spChiTiet: action.sanPham }
        }
        default: return { ...state }
    }
    return { ...state }
}

export default BaiTapGioHangReducer