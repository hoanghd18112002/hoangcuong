import axios from "../utils/axiosCustomize";
const GetLoaiSanPhamALL = async () => {
    return axios.get("loaisanpham/get-asc");
}
export { GetLoaiSanPhamALL }