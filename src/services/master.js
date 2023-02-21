import axios from "axios";
import { USER_API } from './../config/config';
const api={}
api={
    loginUsers: async function (cb, type, payload) {
        await axios.post(USER_API, payload).then((response) => {
          cb(true, response, type);
          return response
        }).catch((err) => {
          cb(false, err, type);
        })
      },
}
export default api