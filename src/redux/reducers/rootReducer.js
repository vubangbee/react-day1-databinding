import { combineReducers } from 'redux'; //3.5k (Gzip: 1.5k)
import GamBauCuaReducer from './GameBauCuaReducer';
//Setstore tổng của ứng dụng  chứa tất cả  các state của ứng dụng
const rootReducer = combineReducers({
    //Nơi  khai báo các state theo từng nghiệp  vụ
    stateGamBauCua: GamBauCuaReducer

});


export default rootReducer