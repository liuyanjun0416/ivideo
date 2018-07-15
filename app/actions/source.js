// import * as api from '../utils/fetch';
import {getVipList} from "../utils/getVipList"

export function getAllVideoSource(){
  return (dispatch) => {
    const vipList = getVipList();
    return dispatch({
      type: 'GETALLVIDEOSOURCE',
      payload: vipList
    });
  }
}

// export function getAllVideoSource() {
//   return (dispatch) => {
//     api.source.getAllVideoSource().then(res => {
//       return dispatch({
//         type: 'GETALLVIDEOSOURCE',
//         payload: res.data
//       });
//     });
//   }
// }
