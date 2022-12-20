import style from "./orders.module.scss";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteOrder, getOrders } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import ModalMessage from "../ModalMessage/ModalMessage";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, isFetching } = useSelector((state) => state.order);
  const { currentUser } = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    getOrders(dispatch, currentUser._id);
  }, []); //eslint-disable-line

  const handleDeleteDialog = (id) => {
    setSelectedOrder(orders?.find((order) => order._id === id));
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    setShowModal(false);
    deleteOrder(dispatch, currentUser?._id, selectedOrder?._id);
  };

  const columns = [
    {
      field: "amount",
      headerName: "Amount($)",
      minWidth: 80,
      flex: 1,
    },
    { field: "phone", headerName: "Phone", minWidth: 110, flex: 2 },
    { field: "address", headerName: "Address", minWidth: 110, flex: 2 },
    {
      field: "date",
      headerName: "Order Date",
      minWidth: 90,
      flex: 2,
      renderCell: (params) => {
        const date = params.row.createdAt.split("T")?.[0];
        const time = params.row.createdAt.split("T")?.[1];
        const cleanTime = time.split(".")?.[0];
        return (
          <>
            <span style={{ marginRight: "20px" }}>{date}</span>
            <span>{cleanTime}</span>
          </>
        );
      },
    },
    { field: "status", headerName: "Status", minWidth: 70, flex: 1 },
    {
      field: "action",
      headerName: "Action",
      minWidth: 110,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={
                (params.row.status !== "paid" ? "/repay/" : "/editaddress/") +
                params.row._id
              }
            >
              <button
                className={style.Edit}
                style={{
                  backgroundColor:
                    params.row.status !== "paid" ? "#3bb077" : "darkBlue",
                }}
              >
                {params.row.status !== "paid" ? "Repay" : "Edit Address"}
              </button>
            </Link>
            {params.row.status !== "paid" && (
              <DeleteOutlined
                className={style.Delete}
                onClick={() => handleDeleteDialog(params.row._id)}
              />
            )}
          </>
        );
      },
    },
  ];

  return (
    <div className={style.Wrapper}>
      <div className={style.Container}>
        {showModal && (
          <Modal
            onClose={() => setShowModal(false)}
            title="Cancel Order"
            height="180px"
          >
            <ModalMessage
              message="Are you sure you want to cancel this order?"
              firstOption="Yes"
              secondOption="No"
              onClose={() => setShowModal(false)}
              onConfirm={handleConfirmDelete}
            />
          </Modal>
        )}

        <div className={style.Title}>
          <h1>Orders List</h1>
        </div>

        <DataGrid
          rows={isFetching ? [] : orders}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
          disableSelectionOnClick
          getRowId={(row) => row._id}
        />
      </div>
    </div>
  );
};

export default Orders;
