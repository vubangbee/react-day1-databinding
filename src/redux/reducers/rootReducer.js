import { combineReducers } from "redux"; //3.5k (Gzip: 1.5k)
// import GamBauCuaReducer from "./GameBauCuaReducer";
// import GameTaiXiuReducer from "./GameTaiXiuReducer";
import QLSVReducer from "./QLSVReducer";
import QuanLyPhimReducer from "./QuanLyPhimReducer";

//Setstore tổng của ứng dụng  chứa tất cả  các state của ứng dụng
const rootReducer = combineReducers({
  //Nơi  khai báo các state theo từng nghiệp  vụ
  //   stateGamBauCua: GamBauCuaReducer,
  //   GameTaiXiuReducer,
  QLSVReducer: QLSVReducer,
  QuanLyPhimReducer,
});

export default rootReducer;
