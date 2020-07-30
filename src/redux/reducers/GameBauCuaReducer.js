import { getRandomInt } from "../../utils/randomInt";
import { TANG_GIAM } from "../constants/GameBauCuaConst"
const initialState = {
    tongTien: 200,
    danhSachCuoc: [
        { ma: "bau", hinhAnh: "./img/bau.png", giaCuoc: 0, },
        { ma: "cua", hinhAnh: "./img/cua.png", giaCuoc: 0, },
        { ma: "tom", hinhAnh: "./img/tom.png", giaCuoc: 0, },
        { ma: "ca", hinhAnh: "./img/ca.png", giaCuoc: 0, },
        { ma: "nai", hinhAnh: "./img/nai.png", giaCuoc: 0, },
        { ma: "ga", hinhAnh: "./img/ga.png", giaCuoc: 0, },
    ],
    xucXac: [
        { ma: "bau", hinhAnh: "./img/bau.png", giaCuoc: 0, },
        { ma: "cua", hinhAnh: "./img/cua.png", giaCuoc: 0, },
        { ma: "tom", hinhAnh: "./img/tom.png", giaCuoc: 0, },
    ],
};
// {trả về tập lệnh } 
const GameBauCuaReducer = (state = initialState, action) => {
    switch (action.type) {
        case TANG_GIAM:
            console.log(action);
            let { tongTien } = state;
            let danhSachCuoc = [...state.danhSachCuoc]
            let index = danhSachCuoc.findIndex((ele) => ele.ma === action.ma);
            if (index !== -1) {
                //Cộng tiền giảm tiền
                if (action.tangGiam) {
                    //Cộng tiền
                    if (tongTien > 0) {
                        danhSachCuoc[index].giaCuoc += 10;
                        tongTien -= 10;
                    }

                }
                else {
                    //Trừ tiền
                    if (danhSachCuoc[index].giaCuoc > 0) {
                        danhSachCuoc[index].giaCuoc -= 10;
                        tongTien += 10;
                    }

                }
            }

            return { ...state, danhSachCuoc, tongTien };
        case "CHOI_GAME":
            {

                let { tongTien } = state;
                //Bóc tách cho khác địa chỉ để render lại.
                let danhSachCuoc = [...state.danhSachCuoc];

                //Tạo xúc  xắc  ngẫu nhiên
                let xucXac = [
                    danhSachCuoc[getRandomInt(6)],
                    danhSachCuoc[getRandomInt(6)],
                    danhSachCuoc[getRandomInt(6)],
                ];

                //Lấy con cược
                danhSachCuoc = danhSachCuoc.filter((ele) => ele.giaCuoc > 0)
                //Xử lý trả lại tiền
                for (let ele of danhSachCuoc) {
                    let tralaiTien = xucXac.find((item) => item.ma === ele.ma);
                    if (tralaiTien) {
                        tongTien += ele.giaCuoc;
                    }

                }

                //Trúng thưởng
                for (let ele of xucXac) {
                    let trungThuong = danhSachCuoc.find((item) => item.ma === ele.ma);
                    if (trungThuong) {
                        tongTien += trungThuong.giaCuoc;
                    }

                }
                // Reset giá trị cược về 0
                let updatedanhSachCuoc = [...state.danhSachCuoc];

                // Dấu ngoặc tròn trả về object
                updatedanhSachCuoc = updatedanhSachCuoc.map((ele) => ({ ...ele, giaCuoc: 0 }));
                return { ...state, xucXac, tongTien, danhSachCuoc: updatedanhSachCuoc }
                console.log(action);



            }
        default:
            break;
    }
    return { ...state };

}

export default GameBauCuaReducer