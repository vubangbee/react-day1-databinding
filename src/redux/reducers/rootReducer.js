import { combineReducers } from 'redux'; //3.5k (Gzip: 1.5k)
import BaiTapGioHangReducer from './BaiTapGioHangReducer';
//Setstore tổng của ứng dụng  chứa tất cả  các state của ứng dụng
const rootReducer = combineReducers({
    //Nơi  khai báo các state theo từng nghiệp  vụ
    stateBaiTapGioHang: BaiTapGioHangReducer

});


export default rootReducer