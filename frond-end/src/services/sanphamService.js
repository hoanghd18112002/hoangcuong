import axios from "../utils/axiosCustomize";
const GetSanPham_asc = async () => {
    return axios.get("sanpham/get-asc/4");
}
const GetSanPhamNgauNhien = async () => {
    return axios.get("sanpham/get-random/4")
}
const GetByID = async (id) => {
    return axios.get(`sanpham/get-by-id/${id}`)
}
export { GetSanPham_asc, GetSanPhamNgauNhien, GetByID }