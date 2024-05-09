import axios from "../utils/axiosCustomize";
const CreateHoaDon = async (obj) => {
    return axios.post("donhang/create", obj);
}
// const getDonHangAll = async () => {
//     return axios.get("api/hoa-don/get-all");
// }

export { CreateHoaDon }