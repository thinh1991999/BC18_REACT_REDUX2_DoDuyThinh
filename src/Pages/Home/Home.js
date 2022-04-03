import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemSv, Modal, RepailSV } from "../../Components";
import { sinhVienServ } from "../../Shared";
import { actions } from "../../Store";

function Home() {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.homeData);
  const showRepair = useSelector((state) => state.showRepair);

  useEffect(() => {
    sinhVienServ
      .layDanhSinhVien()
      .then((res) => {
        dispatch(actions.setHomeData(res.data));
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <div
      className=""
      style={{
        padding: `100px 0 100px 0`,
      }}
    >
      <h2 className="text-center fs-1 red fw-bold">Quản Lý Sinh Viên</h2>
      <Modal />
      <div className="p-3">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên</th>

              <th>Email</th>

              <th>Số Điện Thoại</th>

              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {homeData.map((item, index) => {
              return <ItemSv key={index} value={item} />;
            })}
          </tbody>
        </table>
        {showRepair?.show && <RepailSV />}
      </div>
    </div>
  );
}

export default Home;
