import axios from "axios";

const BASE_URL = "https://62231068666291106a33d218.mockapi.io/sv";
export const sinhVienServ = {
  layDanhSinhVien: () => {
    return axios({
      method: "GET",
      url: BASE_URL,
    });
  },
};
