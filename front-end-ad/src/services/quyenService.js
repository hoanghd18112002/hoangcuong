import axios from "../utils/axiosCustomize";
const getALL = async () => {
    return axios.get("quyen/get-desc")
}
const CreateQuyen = async (obj) => {
    return axios.post("quyen/create", obj);
}
const UpdateQuyen = async (obj) => {
    return axios.put("quyen/update", obj)
}
const DeleteQuyen = async (id) => {
    return axios.delete(`quyen/delete/${id}`)
}
export { CreateQuyen, getALL, UpdateQuyen, DeleteQuyen }