import React, { useState } from "react";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { StarOutlined } from "@ant-design/icons";
import { useHistory, useParams } from "react-router-dom";

const RatingModal = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [modalVisible, setModalVisible] = useState(false);

  let history = useHistory();
  let params = useParams();
//   let {slug} = useParams();

  const handleModal = () => {
    if (user && user.token) {
      setModalVisible(true);
    } else {
      history.push({
        pathname: "/login",
        state: { from: `/product/${params.slug}` },
      });
    }
  };

  return (
    <>
      <div onClick={handleModal}>
        <StarOutlined className="text-danger" />
        <br />
        {user ? "leave rating" : "Login to rate"}
      </div>
      <Modal
        onOk={() => {
          setModalVisible(false);
          toast.success("Thanks for your review.It will apper soon");
        }}
        onCancel={() => setModalVisible(false)}
        title="Leave your rating"
        centered
        visible={modalVisible}
      >
        {children}
      </Modal>
    </>
  );
};

export default RatingModal;
