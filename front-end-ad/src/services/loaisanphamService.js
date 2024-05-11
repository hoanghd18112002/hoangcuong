import axios from "../utils/axiosCustomize";
const getALL = async () => {
    return axios.get("loaisanpham/get-desc")
}
const CreateLoaiSP = async (obj) => {
    return axios.post("loaisanpham/create", obj);
}
const UpdateLoaiSanPham = async (obj) => {
    return axios.put("loaisanpham/update", obj)
}
const DeleteLoaiSanPham = async (id) => {
    return axios.delete(`loaisanpham/delete/${id}`)
}
export { CreateLoaiSP, getALL, UpdateLoaiSanPham, DeleteLoaiSanPham }