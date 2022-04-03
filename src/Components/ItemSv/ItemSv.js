import { useDispatch } from "react-redux";
import { actions } from "../../Store";

function ItemSv({ value }) {
  const dispatch = useDispatch();
  const { name, email, id, phone } = value;

  const handleDeleteSV = () => {
    dispatch(actions.deleteSV(id));
  };

  const handleShowRepair = () => {
    dispatch(
      actions.setShowRepair({
        show: true,
        id,
      })
    );
  };

  return (
    <tr>
      <th className="fw-normal">{id}</th>
      <th className="fw-normal">{name}</th>

      <th className="fw-normal">{email}</th>

      <th className="fw-normal">{phone}</th>

      <th>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleShowRepair}
        >
          Sửa
        </button>
        <button
          type="button"
          className="btn btn-danger ms-2"
          onClick={handleDeleteSV}
        >
          Xóa
        </button>
      </th>
    </tr>
  );
}

export default ItemSv;
