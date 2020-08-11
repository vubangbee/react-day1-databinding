import { THEM_NGUOI_DUNG } from "../constants/QLSVConst";
const initialState = {
  mangNguoiDung: [
    {
      taiKhoan: "vubangbee",
      matKhau: "bí mật",
      email: "vubangbee@gmail.com",
      soDt: "0969066500",
      hoTen: "Bằng",
      maNhom: "GP01",
    },
  ],
  nguoiDungEdit: {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    hoTen: "",
    maNhom: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case THEM_NGUOI_DUNG: {
      let mangNguoiDungUpdate = [
        ...state.mangNguoiDung,
        { ...action.nguoiDung },
      ];
      console.log("dispatch", action);
      return { ...state, mangNguoiDung: mangNguoiDungUpdate };
    }
    case "CHINH_SUA": {
      //LẤY người  dùng được click gán vào người dùng edit
      state.nguoiDungEdit = action.nguoiDung;
      console.log(action);
      return { ...state };
    }
    case "CAP_NHAT": {
      let mangNguoiDungUpdate = [...state.mangNguoiDung];

      let index = mangNguoiDungUpdate.findIndex(
        (nd) => nd.taiKhoan === action.nguoiDung.taiKhoan
      );
      if (index !== 1) {
        //gán giá trị người dùng trong mảng = người dùng  mới gửi lên
        mangNguoiDungUpdate[index] = { ...action.nguoiDung };
      }

      //Gán mảng ngươi dung  hiện tain = mang ngyou dung da cap nhap
      state.mangNguoiDung = mangNguoiDungUpdate;
      return { ...state };
    }

    case "XOA_NGUOI_DUNG": {
      //dispatch  lên action.taikhoan = tai khoản người dùng click nút  xóa
      let mangNguoiDungUpdate = [...state.mangNguoiDung];
      //Tìm  ra vị trí người  dùng đó  trong mảng
      let index = mangNguoiDungUpdate.findIndex(
        (nd) => nd.taiKhoan === action.taiKhoan
      );

      if (index !== 1) {
        //Xóa  vị trí người  dùng trong  mảng
        mangNguoiDungUpdate.splice(index, 1);
      }
      //cập nhaatk lại state
      state.mangNguoiDung = mangNguoiDungUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
