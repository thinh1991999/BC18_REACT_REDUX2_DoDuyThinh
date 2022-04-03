import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Store";

function Modal() {
  const {
    messModal: { type, msg },
    clearModal,
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleOnChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.setClearModal(false));
    setTimeout(() => {
      dispatch(actions.addSV(formValue));
    }, 500);
  };

  const clearMessModal = () => {
    dispatch(
      actions.setMessModal({
        type: "",
        msg: "",
      })
    );
  };

  useEffect(() => {
    clearModal &&
      setFormValue({
        id: "",
        name: "",
        email: "",
        phone: "",
      });
  }, [clearModal]);

  return (
    <div className="">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Thêm sinh viên
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Thêm sinh viên
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={clearMessModal}
              />
            </div>
            <div className="modal-body">
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="Id" className="form-label">
                    Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Id"
                    name="id"
                    aria-describedby="emailHelp"
                    onChange={handleOnChange}
                    value={formValue.id}
                    required={true}
                    onFocus={clearMessModal}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="Name"
                    onChange={handleOnChange}
                    value={formValue.name}
                    onFocus={clearMessModal}
                    required={true}
                  />
                </div>
                <div className="mb-3 ">
                  <label htmlFor="Email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="Email"
                    onChange={handleOnChange}
                    value={formValue.email}
                    onFocus={clearMessModal}
                    required={true}
                  />
                </div>
                <div className="mb-3 ">
                  <label htmlFor="sdt" className="form-label">
                    Số Điện Thoại
                  </label>
                  <input
                    type="number"
                    name="phone"
                    className="form-control"
                    id="sdt"
                    onChange={handleOnChange}
                    value={formValue.phone}
                    onFocus={clearMessModal}
                    required={true}
                  />
                </div>
                {msg.length > 0 && (
                  <p
                    style={{
                      color: `${type === "success" ? `blue` : `red`}`,
                    }}
                  >
                    {msg}
                  </p>
                )}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={clearMessModal}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onSubmit={handleSubmit}
                  >
                    Thêm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
