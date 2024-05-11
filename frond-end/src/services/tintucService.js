import axios from "../utils/axiosCustomize";
const GetTinTuc_asc = async () => {
    return axios.get("tintuc/get-asc");
}
const GetByID = async (id) => {
    return axios.get(`tintuc/get-by-id/${id}`)
}
export { GetTinTuc_asc, GetByID }