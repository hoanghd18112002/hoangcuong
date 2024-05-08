import axios from "../utils/axiosCustomize";
const GetSanPham_asc = async () => {
    return axios.get("sanpham/get-asc");
}
export { GetSanPham_asc }